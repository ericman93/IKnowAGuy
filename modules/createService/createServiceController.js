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
        
        $scope.querySearch = function(query) {
            var results = query ? tags.filter(createFilterFor(query)) : [];
            return results;
        };

        $scope.search = function () {
            $state.go('services', {
                tags: $scope.selectedTags.map(function(tag) { return tag.id })
            });
        };

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(tag) {
                return tag.name.toLowerCase().indexOf(lowercaseQuery) >= 0;
            };
        }

        function getTags(){
            Tag.getAllTags().then(function (allTags) {
                tags = allTags;
            }, function () {
                tags = [];
            })
        }

        getTags();
    }
]);