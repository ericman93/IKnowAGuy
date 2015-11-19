angular.module('iKnowAGuyApp.services').controller("servicesController", ['$scope', '$stateParams',
    function ($scope, $stateParams) {
        console.log($stateParams.tags);
    }
]);