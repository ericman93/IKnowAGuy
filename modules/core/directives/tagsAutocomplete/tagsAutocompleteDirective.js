angular.module('iKnowAGuyApp.core').directive('tagsAutocomplete', ['Tag', function (Tag) {
    return {
        templateUrl: 'modules/core/directives/tagsAutocomplete/tagsAutocomplete.html',
        restrict: 'E',
        scope:{
            selectedTags: '=tags'
        },
        controller: function ($scope) {
            $scope.selectedTags = [];
            var tags;

            $scope.querySearch = function(query) {
                var results = query ? tags.filter(createFilterFor(query)) : [];
                return results;
            };

            $scope.search = function () {
                $state.go('services', {
                    tags: $scope.tags.map(function(tag) { return tag.id })
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
    }
}]);