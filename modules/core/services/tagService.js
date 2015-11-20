angular.module('iKnowAGuyApp.core').factory('Tag', ['$http', '$q', 'Backand',
    function ($http, $q, Backand) {

        function getAllTags(){
            var deferred = $q.defer();

            $http.get(Backand.getApiUrl() + '/1/objects/tags')
                .then(function (data) {
                    deferred.resolve(data.data.data);
                }, function (error) {
                    deferred.reject();
                });

            return deferred.promise;
        }

        return {
            getAllTags: getAllTags
        };
    }
]);
