angular.module('iKnowAGuyapp.core')
.factory('servicesService', [
       '$q', '$http',
        function($q, $http) {
            function getAll() {
                //TODO
            }

            function getById(id) {
                // TODO
            }

            function getByTagFilter(tags) {
                // TODO
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