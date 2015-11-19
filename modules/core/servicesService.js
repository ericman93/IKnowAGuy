angular.module('iKnowAGuyApp.core')
.factory('Services', [
       '$q', '$http', 'Backand',
        function($q, $http, Backand) {
            function getAll() {
                //TODO
            }

            function getById(id) {
                // TODO
            }

            function getByTagFilter(tags) {
                var deferred = $q.defer();

                if (tags.length == 0) {
                    deferred.resolve([]);
                }

                else {
                    $http.get(Backand.getApiUrl() + '/1/objects/service_tag?deep=true')
                        .then(function (data) {
                            var services = data.data.relatedObjects.services;
                            var matchServices = [];

                            angular.forEach(services, function (service) {
                                var isFixed = service.tags.split(',').some(function (tag) {
                                    return tags.indexOf(Number(tag)) >= 0;
                                });

                                if (isFixed) {
                                    matchServices.push(service);
                                }
                            });

                            console.log(matchServices);
                            deferred.resolve(matchServices);
                        }, function (error) {
                            deferred.reject();
                        });
                }

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