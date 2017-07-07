angular.module('microClassCtrl',[])
.controller('microClassCtrl',['$scope','$http',function($scope,$http){
	//获取左边数据
	$scope.pubArr = [];
	$http.get('microClass/php/micro_class.php',{
		params:{
                page: 1
            }
	})
	.success(function(result){
		$scope.pubArr = result;
		console.log(result);
	})
	
	//初始化页面，看数据有多少页，生成分页器
	$scope.pages = [];
	$http.get('microClass/php/course_count.php')
	.success(function(res){
		$scope.dataNum = Math.ceil(res[0].count /6);
		console.log($scope.dataNum);
		var count = Math.ceil(res[0].count / 6);
                for(var i =0;i< count ;i++){
                    $scope.pages.push(i);
                }
	})
	
	//初始化当前页面
	$scope.now = 1;
	//点击换页
	$scope.changePage = function(i){
		$http.get('microClass/php/micro_class.php',{
                params:{
                    page: i
                }
            }).success(function(result){
                $scope.now = i;
                $scope.pubArr = result;
            });
	}
	
	
	//获取右边数据
	$http.get('publicCourse/php/pub_img.php')
	.success(function(result){
		$scope.imgArr = result;
	})
	
}])