/**
 * Created by Eric on 19/11/2015.
 */
angular.module('iKnowAGuyApp.createBid').controller("createBidController", ['$scope', '$mdToast', '$mdDialog', 'Payment', 'service',
    function ($scope, $mdToast, $mdDialog, Payment, service) {

        $scope.amount = null;

        $scope.cancel = function () {
            $mdDialog.hide();
        };

        $scope.create = function () {
            Payment.createBid(16, service.id, $scope.amount).then(function () {
                $mdToast.show($mdToast.simple().content('Bid successfully created'));
                $mdDialog.hide();
            }, function (error) {
                $mdToast.show($mdToast.simple().content(error));
            });
        };
    }
]);