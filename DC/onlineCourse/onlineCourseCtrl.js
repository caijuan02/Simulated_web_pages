angular.module('onlineCourseCtrl', [])
    .controller('onlineCourseCtrl', ['$scope','$http', function ($scope,$http) {

        //加载初始化 显示查询结果从 0 开始
        $scope.courseArr = [];
        $http.get('onlineCourse/php/online_course.php',{
            params:{
                page: 1
            }
        }).success(function(result){
                $scope.courseArr = result;

            });

        //初始化页面 看有多少页  生成分页器
        $scope.pages = [];
        //查询数据库中共有多少条数据
        $http.get('onlineCourse/php/course_count.php')
            .success(function(re){
                $scope.dataNum = Math.ceil(re[0].count / 12);
                var count = Math.ceil(re[0].count / 12);
                for(var i =0;i< count ;i++){
                    $scope.pages.push(i);
                }
            });

        //初始化当前页码
        $scope.now = 1;
        //点击换页
        $scope.changePage = function(i){
            $http.get('onlineCourse/php/online_course.php',{
                params:{
                    page: i
                }
            }).success(function(result){
                $scope.now = i;
                $scope.courseArr = result;
            });
        }
    }]);











