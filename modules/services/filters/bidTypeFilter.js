angular.module('iKnowAGuyApp.services').filter('bidTypeFilter', [function () {
    return function(services, bidType){
        var filtered = [];
        angular.forEach(services, function(service) {
            if(!bidType || bidType >= service.bidType) {
                filtered.push(service);
            }
        });
        return filtered;
    }
}]);