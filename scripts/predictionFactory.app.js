angular.module('Dollar')
  .factory('predictionFactory', [
    '$http',
    predictionFactory
  ])

function predictionFactory($http) {
  var predictionCall = {
    getPrediction: function(URL) {
      return $http.get(URL);
    }
  }

  var predictionURL = '//pollyvote.com/wp-content/plugins/pollyvote/data/index.php?time=current';

  return {
    prediction: predictionCall.getPrediction(predictionURL)
  }

}
