angular.module('excellentCourseCtrl', [])
    .controller('excellentCourseCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('excellentCourse/php/excellent_course.php')
            .success(function(result){
                $scope.exceArr = result;
            })



        //添加鼠标滑上事件
        $scope.showAbnormal = function(e){
            $scope.index= e.currentTarget.dataset.index;
        }

        //点击跳转到指定位置
        $scope.jump = function(){
            window.location.href = 'http://localhost:63342/DC/index.html#watch';
        }

    }])