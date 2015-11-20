/**
 * Created by Eric on 19/11/2015.
 */
angular.module('iKnowAGuyApp.search').controller("searchController", ['$scope', '$state', 'Tag',
    function ($scope, $state, Tag) {
        $scope.search = function () {
            $state.go('services', {
                tags: $scope.tags.map(function(tag) { return tag.id })
            });
        };

    }
]);