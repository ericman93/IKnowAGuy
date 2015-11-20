/**
 * Created by GurRo on 11/19/2015.
 */

angular.module('iKnowAGuyApp.service')
    .controller('serviceController', [
        '$scope', '$stateParams', '$mdDialog', '$mdToast', 'Services', 'userService', 'Payment', 'Backand',
        function ($scope, $stateParams, $mdDialog, $mdToast, servicesService, userService, paymentService, Backand) {
            function initServiceData() {
                servicesService.getById($stateParams.id)
                    .then(function (service) {
                        initServiceData2(service);
                        /*                        userService.getById(service.userId)
                         .then(function (user) {
                         $scope.preson = user;
                         });*/
                    });

                /*$scope.service = {
                 name: 'Advanced Gutter Toiletry',
                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien justo, porta eget rhoncus nec, volutpat aliquet elit. Praesent ac luctus est. In quis nibh eu ex vulputate fringilla. Cras et sagittis eros. Duis fringilla, lorem nec condimentum tincidunt, nibh erat porta nisl, ac fringilla erat purus sed magna. In erat risus, lacinia lobortis posuere tempor, imperdiet non dolor. Aliquam feugiat pretium nulla at mattis. Cras facilisis felis a mauris mattis, ac pellentesque justo dignissim. Nulla facilisi. Ut justo turpis, commodo id justo a, rhoncus gravida neque. Integer posuere ipsum dolor, quis vulputate turpis aliquam vitae. Etiam pulvinar sapien ut velit tempor consequat nec et dui. Duis sollicitudin, ligula sed lacinia tincidunt, massa nulla consectetur ipsum, tincidunt convallis nulla ligula in mauris. Nam non tortor eu erat dignissim fringilla. Quisque vel metus interdum, sollicitudin elit commodo, consectetur justo. Mauris dignissim fermentum mauris, sit amet euismod ante egestas vitae. Etiam laoreet id sem vitae scelerisque. Nullam et quam vitae tellus consequat dapibus gravida eu lectus. In hac habitasse platea dictumst. Nullam iaculis erat at hendrerit dapibus. Integer suscipit nulla quis faucibus luctus. Nulla cursus quam sit amet turpis consectetur, ut porta enim porttitor. Pellentesque finibus dolor quis hendrerit facilisis. Nunc et enim sed risus tincidunt bibendum eu id ex. Morbi pharetra sem eu condimentum suscipit. Vestibulum pulvinar ut elit eget tempus. Vestibulum id ligula tincidunt, commodo augue et, convallis tortor. Pellentesque feugiat magna vel sem faucibus mattis venenatis ac nunc. Vivamus et blandit purus, ac consequat neque. Ut lacus quam, facilisis et feugiat ut, vulputate at turpis.Nunc nec dapibus augue. Nulla magna magna, ultrices in interdum sit amet, consequat in tellus. Nam dictum, nisi sit amet dapibus pulvinar, velit magna volutpat nibh, sit amet cursus augue mauris laoreet risus. Duis eget posuere turpis, eget tincidunt magna. Donec et risus eros. Praesent eget nibh ante. Maecenas egestas mauris tellus, at pulvinar velit tincidunt in. Cras venenatis odio sapien, quis varius mi vehicula ac. Sed quis ante ex. Sed imperdiet imperdiet felis in tristique. Donec maximus, sapien eget ultrices eleifend, augue est finibus velit, at dictum odio dui non erat. Donec sit amet dui dui. ',
                 maxBid: 666,
                 currentBid: 424

                 };*/


            }

            //Wait for server updates on 'items' object
            Backand.on('newHighestBid', function (data) {

                var serviceId = data.filter(function(obj) {
                    return obj.Key == 'serviceId'
                })[0];

                if (serviceId.Value == $stateParams.id)
                    $scope.currentBid = data.Value;
            });

            function initServiceData2(service) {
                $scope.service = service;

                $scope.person = {
                    icon: 'imgs/person.jpg',
                    name: $scope.service.user.firstName + ' ' + $scope.service.user.lastName,
                    rating: 66
                };

                $scope.currentBid = getCurrentBid(service);
            }

            function getCurrentBid(service) {

                var maxBid = null;

                for (var i = 0; i < service.bids.length; i++) {

                    var bid = service.bids[i];

                    if (maxBid == null)
                        maxBid = bid;
                    else if (bid.amount > maxBid.amount)
                        maxBid = bid;
                }

                return maxBid.amount;

            }

            $scope.buyItNow = function () {
                // Appending dialog to document.body to cover sidenav in docs app
                var confirm = $mdDialog.confirm()
                    .title('Would you like to buy this service ?')
                    .textContent('Buying this service will substract ' + $scope.service.buyItNowPrice + ' orbits from your balance.')
                    .ariaLabel('Lucky day')
                    .ok('Buy It Now')
                    .clickOutsideToClose(true)
                    .cancel('Cancel');

                $mdDialog.show(confirm).then(function () {
                    paymentService.createPayment(16, $scope.service.id, $scope.service.buyItNowPrice).then(function () {
                        $mdToast.show($mdToast.simple().content('Bid successfully created'));
                        $mdDialog.hide();
                    }, function (error) {
                        $mdToast.show($mdToast.simple().content(error));
                    });
                }, function () {
                    $scope.status = 'You decided to keep your debt.';
                });
            };

            $scope.createBid = function () {
                $mdDialog.show({
                    controller: "createBidController",
                    templateUrl: "modules/createBid/createBid.html",
                    clickOutsideToClose: true,
                    locals: {
                        service: $scope.service
                    }
                })
                    .then(function (answer) {
                    }, function () {
                    });
            };

            initServiceData();
        }
    ]);