angular.module('questionAnswerCtrl',[])
.controller('questionAnswerCtrl',['$scope','$http',function($scope,$http){

    //加载初始化 显示查询结果从 0 开始
    $scope.quesArr = [];
    $http.get('questionAnswer/php/question.php',{
        params:{
            page: 1
        }
    }).success(function(result){
        $scope.quesArr = result;

    });

    //初始化页面 看有多少页  生成分页器
    $scope.pages = [];
    //查询数据库中共有多少条数据
    $http.get('questionAnswer/php/question_count.php')
        .success(function(re){
            $scope.dataNum = Math.ceil(re[0].count / 4);
            var count = Math.ceil(re[0].count / 4);
            for(var i =0;i< count ;i++){
                $scope.pages.push(i);
            }
        });

    //初始化当前页码
    $scope.now = 1;
    //点击换页
    $scope.changePage = function(i){
        $http.get('questionAnswer/php/question.php',{
            params:{
                page: i
            }
        }).success(function(result){
            $scope.now = i;
            $scope.quesArr = result;
        });
    }
}])