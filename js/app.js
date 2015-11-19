angular.module('iKnowAGuyApp.core', []);
angular.module('iKnowAGuyApp.search', []);
angular.module('iKnowAGuyApp.service', []);
angular.module('iKnowAGuyApp', ['ui.router', 'ngMaterial', 'iKnowAGuyApp.core', 'iKnowAGuyApp.search', 'iKnowAGuyApp.service']);

angular.module('iKnowAGuyApp').config([
    '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('search', {
                    url: "/",
                    templateUrl: "modules/search/search.html",
                    controller: "searchController"
                });

            $stateProvider
                .state('service', {
                    url: '/service/:id',
                    templateUrl: 'modules/service/service.html',
                    controller: 'serviceController'
                })
        }
    ]
);