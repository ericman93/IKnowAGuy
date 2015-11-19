/**
 * Created by Eric on 19/11/2015.
 */
angular.module('iKnowAGuyApp.createService').controller("createServiceController", ['$scope','$mdToast','$mdDialog', 'Tag', 'Services',
    function ($scope,$mdToast,$mdDialog, Tag, Services) {
        var tags;
        $scope.selectedTags = [];
        $scope.service = {
            tags: []
        };

        $scope.cancel = function () {
            $mdDialog.hide();
        };

        $scope.create = function () {
            $scope.service.tags = $scope.selectedTags.map(function(tag){
                return {
                    tag: tag.id
                }
            });

            Services.createService(16, $scope.service).then(function () {
                $mdToast.show($mdToast.simple().content('Yay!'));
                $mdDialog.hide();
            }, function (error) {
                $mdToast.show($mdToast.simple().content(error));
            });
        };
    }
]);