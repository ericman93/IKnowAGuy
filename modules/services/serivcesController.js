angular.module('iKnowAGuyApp.services').controller("servicesController", ['$scope', '$stateParams', 'Services',
    function ($scope, $stateParams, Services) {
        function loadServices(){
            Services.getByTagFilter($stateParams.tags).then(function(services){
                $scope.services = services;
            }, function () {

            })
        }

        loadServices();
    }
]);