angular.module('iKnowAGuyApp.core', ['backand']);
angular.module('iKnowAGuyApp.search', []);
angular.module('iKnowAGuyApp.createService', []);
angular.module('iKnowAGuyApp.createBid', []);
angular.module('iKnowAGuyApp.services', []);
angular.module('iKnowAGuyApp.service', []);
angular.module('iKnowAGuyApp', ['ui.router', 'ngMaterial', 'iKnowAGuyApp.core', 'iKnowAGuyApp.search', 'iKnowAGuyApp.services', 'iKnowAGuyApp.service', 'iKnowAGuyApp.createService', 'iKnowAGuyApp.createBid']);

angular.module('iKnowAGuyApp').config([
    '$stateProvider', '$urlRouterProvider', '$httpProvider', 'BackandProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider, BackandProvider){

            $httpProvider.interceptors.push('httpInterceptor');

            BackandProvider.setAppName('iknowaguy');
            BackandProvider.setSignUpToken('addb836a-ad44-4474-b586-eb94afb51258');
            BackandProvider.setAnonymousToken('e147a5e6-6391-4fa2-a4e9-d069b63e60f2');

            BackandProvider.setSocketUrl('http://api.backand.com:4000');
            BackandProvider.runSocket(true); //enable the web sockets that makes the database realtime

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('search', {
                    url: "/",
                    templateUrl: "modules/search/search.html",
                    controller: "searchController"
                })
                .state('services', {
                    url: "/services",
                    params:{tags:{}},
                    templateUrl: "modules/services/services.html",
                    controller: "servicesController"
                })
                .state('services.service', {
                    url: '/:id',
                    templateUrl: 'modules/service/service.html',
                    controller: 'serviceController'
                })
        }
    ]
);

angular.module('iKnowAGuyApp').run([
    '$rootScope', '$mdDialog',
    function ($rootScope, $mdDialog) {
        $rootScope.httpRequests = 0;

        $rootScope.showCreationForm = function () {
            $mdDialog.show({
                controller: "createServiceController",
                templateUrl: "modules/createService/createService.html",
                clickOutsideToClose:true
            })
            .then(function(answer) {

            }, function() {

            });
        }
    }
]);