angular.module('iKnowAGuyapp.core')
    .factory('userService', [
        '$q', '$http',
        function($q, $http) {
            function getAll() {
                //TODO
            }

            function getById(id) {
                // TODO
            }

            return {
                getById: getById,
                getAll: getAll
            };
        }
    ]);