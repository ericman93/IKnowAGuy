angular.module('iKnowAGuyApp.search', []);
angular.module('iKnowAGuyApp', ['ui.router', 'ngMaterial', 'iKnowAGuyApp.search']);

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
        }
    ]
);