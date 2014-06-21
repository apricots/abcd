// First Chart Example - Area Line Chart

Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2012-10-01', Perqs: 12 },
	{ d: '2012-10-02', Perqs: 13 },
	{ d: '2012-10-03', Perqs:  23 },
	{ d: '2012-10-04', Perqs: 17 },
	{ d: '2012-10-05', Perqs: 20 },
	{ d: '2012-10-06', Perqs: 5 },
	{ d: '2012-10-07', Perqs: 26 },
	{ d: '2012-10-08', Perqs: 29 },
	{ d: '2012-10-09', Perqs: 38 },

  ],
  // The name of the data record attribute that contains x-Perqss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-Perqss.
  ykeys: ['Perqs'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Perqs'],
  // Disables line smoothing
  smooth: false,
});

Morris.Donut({
  element: 'morris-chart-donut',
  data: [
    {label: "Health & Wellness", value: 42.7},
    {label: "Entertainment", value: 8.3},
    {label: "Travel", value: 12.8},
    {label: "Services", value: 36.2}
  ],
  formatter: function (y) { return y + "%" ;}
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-line',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2012-10-01', Cost: 120 },
	{ d: '2012-10-02', Cost: 111 },
	{ d: '2012-10-03', Cost: 82 },
	{ d: '2012-10-04', Cost: 83 },
	{ d: '2012-10-05', Cost: 79 },
	{ d: '2012-10-06', Cost: 101 },
	{ d: '2012-10-07', Cost: 90 },
	{ d: '2012-10-08', Cost: 103 },
	{ d: '2012-10-09', Cost: 110 },
	{ d: '2012-10-10', Cost: 82 },
  ],
  // The name of the data record attribute that contains x-Perqss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-Perqss.
  ykeys: ['Cost'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Cost'],
  // Disables line smoothing
  smooth: false,
});

Morris.Bar ({
  element: 'morris-chart-bar',
  data: [
	{device: 'Yoga Studio', geekbench: 5},
	{device: 'Six Flags', geekbench: 7},
	{device: 'Broadway', geekbench: 12},
	{device: 'Maid Services', geekbench: 19},
	{device: 'Booze Cruise', geekbench: 19},
	{device: 'AMC Movies', geekbench: 27}
  ],
  xkey: 'device',
  ykeys: ['geekbench'],
  labels: ['Guppies Inc.'],
  barRatio: 0.4,
  xLabelAngle: 35,
  hideHover: 'auto'
});
