/**
 * Created by GurRo on 11/19/2015.
 */

angular.module('iKnowAGuyApp.service')
.controller('serviceController', [
        '$scope', 'stateParams', 'servicesService', 'userService',
        function($scope, $stateParams, servicesService, userService) {
            function initServiceData() {
                servicesService.getById($stateParams.id)
                    .then(function (service) {
                        $scope.service = service;

                        userService.getById(service.userId)
                            .then(function (user) {
                                $scope.preson = user;
                            });
                    });

                $scope.service = {
                    name: 'chulululu',
                    desc: 'desc'
                };

                $scope.person = {
                    icon: '',
                    name: 'Chu Chuu',
                    rating: 6
                };
            }

            initServiceData();
        }
    ]);