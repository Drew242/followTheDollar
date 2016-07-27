angular.module('Dollar')
  .controller('followCtrl', [
    'dollarFactory',
    'predictionFactory',
    followCtrl
  ])

function followCtrl(dollarFactory, predictionFactory) {
  var follow    = this;
  var df        = dollarFactory;
  var pf        = predictionFactory;

  follow.banner = 'Election Countdown';
  follow.header = 'Pick your poison in ...';

  // df.trump.then(function (response) {
  //               follow.trump = response.data.response.summary["@attributes"];
  //               });
  // df.clinton.then(function (response) {
  //                 follow.clinton = response.data.response.summary["@attributes"];
  //                 });

  pf.prediction.then(function (response) {
    follow.prediction = response.data.data[0];
  })

  follow.countdown = function() {
    var currentDate  = new Date();
    var electionDate = new Date(Date.UTC(2016, 10, 8, 7, 0, 0))
    var diff         = electionDate.getTime() / 1000 - currentDate.getTime() / 1000;

        clock = $('.electionCountdown').FlipClock(diff, {
    		clockFace: 'DailyCounter',
    		countdown: true
    	});
  }

  follow.chartRender = function() {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "PollyVote Prediction",
        verticalAlign: 'top',
        horizontalAlign: 'left'
      },
      animationEnabled: true,
      data: [
        {
          type: "doughnut",
          startAngle:20,
          toolTipContent: "{label}: {y} - <strong>#percent%</strong>",
          indexLabel: "{label} #percent%",
          dataPoints: [
            {  y: 49, label: "Dem" },
            {  y: 49, label: "Rep" },
            {  y: 2, label: "Other/undecided" }
          ]
        }
      ]
    });
    chart.render();
  }

}
