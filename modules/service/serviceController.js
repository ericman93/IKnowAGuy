/**
 * Created by GurRo on 11/19/2015.
 */

angular.module('iKnowAGuyApp.service')
.controller('serviceController', [
        '$scope', 'stateParams', 'serviceService',
        function($scope, $stateParams, serviceService) {
            function initServiceData() {
                serviceServices.getById($stateParams.id)
                    .then(function (service) {
                        $scope.service = service;
                    });

            }

            initServiceData();
        }
    ]);