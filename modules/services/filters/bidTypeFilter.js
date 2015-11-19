angular.module('iKnowAGuyApp.services').filter('bidType', [function () {
    return function(service, bidType){
        console.log(service)
        return service.bidType == bidType;
    }
}]);