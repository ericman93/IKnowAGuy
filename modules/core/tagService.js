angular.module('iKnowAGuyApp.core').factory('Tag', ['$http', '$q',
    function ($http, $q) {

        function getAllTags(){
            var deferred = $q.defer();

            deferred.resolve(['Sport', 'Math', 'Angular', 'Drugs']);

            return deferred.promise;
        }

        return {
            getAllTags: getAllTags
        };
    }
]);
