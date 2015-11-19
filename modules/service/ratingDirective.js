/**
 * Created by GurRo on 11/19/2015.
 */

angular.module('iKnowAGuyApp.service')
    .directive('rating',
        function () {
            return {
                templateUrl: 'modules/service/rating.html',
                scope: {
                    rating: '='
                }
            };

        });
