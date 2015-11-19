angular.module('iKnowAGuyApp.core')
    .factory('httpInterceptor', function($q, $rootScope) {
    return {
        // optional method
        'request': function(config) {
            $rootScope.httpRequests += 1;
            return config;
        },

        // optional method
        'requestError': function(rejection) {
            $rootScope.httpRequests += 1;

            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },



        // optional method
        'response': function(response) {
            $rootScope.httpRequests -= 1;

            return response;
        },

        // optional method
        'responseError': function(rejection) {
            $rootScope.httpRequests -= 1;

            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        }
    };
});