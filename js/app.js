angular.module('iKnowAGuyApp.services', ['']);
angular.module('iKnowAGuyApp', ['ui.router', 'iKnowAGuyApp.services']);

angular.module('iKnowAGuyApp').config([
    '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('services', {
                    url: "/",
                    templateUrl: "modules/services/services.html",
                    controller: "servicesController"
                });
        }
    ]
);