angular.module('iKnowAGuyApp.services').controller("servicesController", ['$scope', '$stateParams', '$mdSidenav', 'Services',
    function ($scope, $stateParams, $mdSidenav, Services) {
        $scope.toggleFilter = function () {
            $mdSidenav("left")
                .toggle()
                .then(function () {

                });
        };

        function loadServices(){
            Services.getByTagFilter($stateParams.tags).then(function(services){
                $scope.services = services;
            }, function () {
                $scope.services = [];
            })
        }

        loadServices();
    }
]);