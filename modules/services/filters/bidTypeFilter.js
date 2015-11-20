angular.module('iKnowAGuyApp.services').filter('bidTypeFilter', [function () {
    return function(services, bidType){
        var filtered = [];
        angular.forEach(services, function(service) {
            if((bidType.auction && !service.enableAuction) ||
                (bidType.buyNow && !service.enableBuyItNow)) {
                var a = 2;
            }
            else{
                filtered.push(service);
            }
        });
        return filtered;
    }
}]);