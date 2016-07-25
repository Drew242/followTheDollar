angular.module('Dollar')
  .controller('followCtrl', [
    'dollarFactory',
    followCtrl
  ])

function followCtrl(dollarFactory) {
  var follow = this;
  var df     = dollarFactory;

  follow.banner      = 'Election HQ';

  df.trump.then(function (response) {
                follow.trump = response.data.response.summary["@attributes"];
                });
  df.clinton.then(function (response) {
                  follow.clinton = response.data.response.summary["@attributes"];
                  });

  window.follow = follow
}
