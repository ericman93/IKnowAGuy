angular.module('iKnowAGuyApp.core')
.factory('Services', [
       '$q', '$http',
        function($q, $http) {
            function getAll() {
                //TODO
            }

            function getById(id) {
                // TODO
            }

            function getByTagFilter(tags) {
                var deferred = $q.defer();

                deferred.resolve([{
                    name: 'Math class',
                    desc: 'mother fucker math fucker',
                    bidType: 1
                },{
                    name: 'Site building',
                    desc: 'mother fucker angular fucker',
                    bidType: 2
                }]);

                return deferred.promise;
            }

            function createService(service) {
                // TODO
            }

            function deleteService(id) {

            }

            return {
                getAll: getAll,
                getById: getById,
                getByTagFilter: getByTagFilter,
                createService: createService,
                deleteService: deleteService
            };
        }
    ]);