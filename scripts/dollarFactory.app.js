angular.module('Dollar')
  .factory('dollarFactory', [
    '$http',
    dollarFactory
  ])

function dollarFactory($http) {
  var candidateCall = {
    getInfo: function(URL) {
      return $http.get(URL)
    }
  };

  var clintonURL = 'http://www.opensecrets.org/api/?method=candSummary&cid=N00000019&output=json&apikey=92b064b67fcb014d6478866b648adc8b';
  var trumpURL   = 'http://www.opensecrets.org/api/?method=candSummary&cid=N00023864&output=json&apikey=92b064b67fcb014d6478866b648adc8b';

  return {
    trump: candidateCall.getInfo(trumpURL),
    clinton: candidateCall.getInfo(clintonURL)
  }

}
