angular.module('iKnowAGuyApp.services').directive('service', [function () {
    return {
        templateUrl: 'modules/services/service/service.html',
        restrict: 'E',
        scope:{
            service: '=model'
        },
        controller: function ($scope) {
            $scope.service.img = "imgs/hippo.png";
            $scope.service.who = "your mother";
        }
    }
}]);