angular.module('Dollar').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/main.html'
  })
  $routeProvider.when('/clinton', {
    templateUrl: 'views/clinton.html'
  })
  $routeProvider.when('/trump', {
    templateUrl: 'views/trump.html'
  })

  $routeProvider
    .otherwise({
      redirectTo: '/'
    });
});
