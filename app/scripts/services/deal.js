'use strict';

app.factory('Deal', function($resource, $firebase, FIREBASE_URL, User) {

  var dealsRef = new Firebase(FIREBASE_URL + 'deals');
  var deals = $firebase(dealsRef);

  var dealRevisionsRef = new Firebase(FIREBASE_URL + 'dealRevisions');
  var dealRevisions = $firebase(dealRevisionsRef);

  var dealNumberCounterRef = new Firebase(FIREBASE_URL + 'dealNumberCounter');
  var dealNumberCounter = $firebase(dealNumberCounterRef);

  var getDealRevisionCounter = function(dealId) {
    var dealRevisionCounterRef = new Firebase(FIREBASE_URL + 'dealRevisions/' + dealId + '/revisionCounter');
    var dealRevisionCounter = $firebase(dealRevisionCounterRef);
    return dealRevisionCounter;
  };

  var Deal = {
    allDeals: deals,
    defaultsResource: $resource(FIREBASE_URL + '/defaultValues/:dealType.json'),
    dealResource: $resource(FIREBASE_URL + '/deals/:dealId.json'),
    dealRevisionsResource: $resource(FIREBASE_URL + '/dealRevisions/:dealId.json'),
    dealsByUserResource: $resource(FIREBASE_URL + '/deals/dealsByUser/:username.json'),
    find: function(dealId) {
      return deals.$child(dealId);
    },
    create: function(deal) {
      if (User.signedIn()) {
        var user = User.getCurrent();

        return deals.$child("dealsByUser").$child(user.username).$add(deal).then(function() {
          return deals.$child("allDeals").$add(deal);
        });
        
      }
    },
    update: function(dealId, deal) {
      if (User.signedIn()) {
        var user = User.getCurrent();

        deal.lastModifiedUser = user.username;

        return deals.$child(dealId).$set(deal).then(function() {
          Deal.addRevision(dealId, deal);
        });
      }
    },
    cancel: function(dealId, isCancelled) {
      if (User.signedIn()) {
        var user = User.getCurrent();

        if (isCancelled) {
          deals.$child(dealId).$child('cancelled').$set(false);
        } else {
          deals.$child(dealId).$child('cancelled').$set(true);
        }
        deals.$child(dealId).$child('lastModifiedUser').$set(user.username);
      }
    },
    addRevision: function(dealId, deal) {
      if (User.signedIn()) {

        var dealRevisionCounter = getDealRevisionCounter(dealId);

        return dealRevisionCounter.$transaction(function(revisionNumber) {

          if (revisionNumber === null || typeof revisionNumber === 'undefined') {
            revisionNumber = 0;
          }

          dealRevisions.$child(dealId).$child(revisionNumber).$set(deal);

          return revisionNumber + 1;
        });
      }
    }
  };

  return Deal;

});
