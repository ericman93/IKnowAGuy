/**
 * Created by Eric on 19/11/2015.
 */
angular.module('iKnowAGuyApp.search').controller("searchController", ['$scope', '$state', 'Tag',
    function ($scope, $state, Tag) {
        var tags;
        $scope.selectedTags = [];

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