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

  window.follow = follow;

  follow.countdown = function() {
    var currentDate  = new Date();
    var electionDate = new Date(Date.UTC(2016, 10, 8, 7, 0, 0))
    var diff         = electionDate.getTime() / 1000 - currentDate.getTime() / 1000;

        clock = $('.electionCountdown').FlipClock(diff, {
    		clockFace: 'DailyCounter',
    		countdown: true
    	});
  }

}
