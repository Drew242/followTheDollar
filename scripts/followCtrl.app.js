angular.module('Dollar')
  .controller('followCtrl', [
    'dollarFactory',
    followCtrl
  ])

function followCtrl(dollarFactory) {
  var follow = this;
  var df     = dollarFactory;

  follow.banner  = 'Election HQ';
  follow.trump   = df.trump;
  follow.clinton = df.clinton;
  console.log(follow.clinton);
}
