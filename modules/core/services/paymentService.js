angular.module('iKnowAGuyApp.core').factory('Payment', ['$http', '$q', 'Backand',
    function ($http, $q, Backand) {

        function getAllBids() {
            var deferred = $q.defer();

            $http.get(Backand.getApiUrl() + '/1/objects/bids?deep=true')
                .then(function (data) {
                    deferred.resolve(data.data.data);
                }, function (error) {
                    deferred.reject();
                });

            return deferred.promise;
        }

        function createBid(userId, serviceId, amount) {
            var deferred = $q.defer();

            var data = {
                "__metadata": {
                    "id": serviceId
                },
                "bids": [{
                    "user": userId,
                    "amount": amount,
                    "timestamp": new Date()
                }]
            };

            $http.put(Backand.getApiUrl() + '/1/objects/services/' + serviceId + '?deep=true', data).then(function (data) {
                console.log(data)
                deferred.resolve();
            }, function (error) {
                deferred.reject(error.data);
            });

            return deferred.promise;
        }

        function createPayment(userId, serviceId, amount) {
            var deferred = $q.defer();

            var data = {
                "__metadata": {
                    "id": serviceId
                },
                "bids": [{
                    "user": userId,
                    "amount": amount,
                    "timestamp": new Date(),
                    isAuction: "false"
                }]
            };

            $http.put(Backand.getApiUrl() + '/1/objects/transactions/' + serviceId + '?deep=true', data).then(function (data) {
                console.log(data)
                deferred.resolve();
            }, function (error) {
                deferred.reject(error.data);
            });

            return deferred.promise;
        }

        return {
            getAllBids: getAllBids,
            createBid: createBid,
            createPayment: createPayment
        };
    }
]);
