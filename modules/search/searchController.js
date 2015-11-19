/**
 * Created by Eric on 19/11/2015.
 */
angular.module('iKnowAGuyApp.search').controller("searchController", ['$scope', 'Tag',
    function ($scope, Tag) {
        var tags;
        $scope.selectedTags = [];

        $scope.querySearch = function(query) {
            var results = query ? tags.filter(createFilterFor(query)) : [];
            return results;
        };

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(tag) {
                return tag.toLowerCase().indexOf(lowercaseQuery) === 0;
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