/**
 * Created by GurRo on 11/19/2015.
 */

angular.module('iKnowAGuyApp.service')
.controller('serviceController', [
        '$scope', '$stateParams', 'Services', 'userService',
        function($scope, $stateParams, servicesService, userService) {
            function initServiceData() {
                //servicesService.getById($stateParams.id)
                //    .then(function (service) {
                //        $scope.service = service;
                //
                //        userService.getById(service.userId)
                //            .then(function (user) {
                //                $scope.preson = user;
                //            });
                //    });

                $scope.service = {
                    name: 'Advanced Gutter Toiletry',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien justo, porta eget rhoncus nec, volutpat aliquet elit. Praesent ac luctus est. In quis nibh eu ex vulputate fringilla. Cras et sagittis eros. Duis fringilla, lorem nec condimentum tincidunt, nibh erat porta nisl, ac fringilla erat purus sed magna. In erat risus, lacinia lobortis posuere tempor, imperdiet non dolor. Aliquam feugiat pretium nulla at mattis. Cras facilisis felis a mauris mattis, ac pellentesque justo dignissim. Nulla facilisi. Ut justo turpis, commodo id justo a, rhoncus gravida neque. Integer posuere ipsum dolor, quis vulputate turpis aliquam vitae. Etiam pulvinar sapien ut velit tempor consequat nec et dui. Duis sollicitudin, ligula sed lacinia tincidunt, massa nulla consectetur ipsum, tincidunt convallis nulla ligula in mauris. Nam non tortor eu erat dignissim fringilla. Quisque vel metus interdum, sollicitudin elit commodo, consectetur justo. Mauris dignissim fermentum mauris, sit amet euismod ante egestas vitae. Etiam laoreet id sem vitae scelerisque. Nullam et quam vitae tellus consequat dapibus gravida eu lectus. In hac habitasse platea dictumst. Nullam iaculis erat at hendrerit dapibus. Integer suscipit nulla quis faucibus luctus. Nulla cursus quam sit amet turpis consectetur, ut porta enim porttitor. Pellentesque finibus dolor quis hendrerit facilisis. Nunc et enim sed risus tincidunt bibendum eu id ex. Morbi pharetra sem eu condimentum suscipit. Vestibulum pulvinar ut elit eget tempus. Vestibulum id ligula tincidunt, commodo augue et, convallis tortor. Pellentesque feugiat magna vel sem faucibus mattis venenatis ac nunc. Vivamus et blandit purus, ac consequat neque. Ut lacus quam, facilisis et feugiat ut, vulputate at turpis.Nunc nec dapibus augue. Nulla magna magna, ultrices in interdum sit amet, consequat in tellus. Nam dictum, nisi sit amet dapibus pulvinar, velit magna volutpat nibh, sit amet cursus augue mauris laoreet risus. Duis eget posuere turpis, eget tincidunt magna. Donec et risus eros. Praesent eget nibh ante. Maecenas egestas mauris tellus, at pulvinar velit tincidunt in. Cras venenatis odio sapien, quis varius mi vehicula ac. Sed quis ante ex. Sed imperdiet imperdiet felis in tristique. Donec maximus, sapien eget ultrices eleifend, augue est finibus velit, at dictum odio dui non erat. Donec sit amet dui dui. ',
                    maxBid: 666,
                    currentBid: 424

                };

                $scope.person = {
                    icon: 'imgs/person.jpg',
                    name: 'Chu Chuu',
                    rating: 66
                };
            }

            initServiceData();
        }
    ]);