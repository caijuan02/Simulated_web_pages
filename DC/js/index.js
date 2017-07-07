angular.module('index', ['indexService'])
    .controller('indexCtrl',[
        '$scope',
        '$http',
        '$interval',
        'indexService',
        function($scope,$http,$interval,indexService){
            //读取json数据
            $http.get('data/carousel.json')
                .success(function(r){
                    $scope.arr = r;
                });

            //点击切换按钮
            $scope.cindex = 0;
            $scope.nextImg = function(){
                $scope.cindex --;
                indexService.start($scope.cindex);
            };
            $scope.prevImg = function(){
                $scope.cindex ++;
                indexService.start($scope.cindex);
            };
            var timer = $interval(function(){
                $scope.cindex ++;
                indexService.start($scope.cindex);
            },3000);

            $scope.stop = function(){
                $interval.cancel(timer);
            };
            $scope.start = function(){
                timer = $interval(function(){
                    $scope.cindex ++;
                    indexService.start($scope.cindex);
                },3000)
            }
    }]);