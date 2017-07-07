angular.module('mainCtrl',[])
.controller('mainCtrl',[
    '$scope',
    '$http',
    '$rootScope',
    '$interval',
    'mainService',
    function($scope,$http,$rootScope,$interval,mainService){
    //获取轮播图下面的分页器
    //console.log($('.carousel ul'));
    //定义一个全局变量
    $scope.now = 0;
    //鼠标滑上时显示对应的大图
    $('.circle').on('click','div',function(){
        if($scope.now == this.dataset.index){
            return
        } else{
            $scope.now = this.dataset.index;
            mainService.move($scope.now);
        }
    });
    //点击切换按钮实现图片切换
    $('.next-btn').on('click',function(){
        $scope.now ++;
        if($scope.now >= $('.carousel li').length){
            $scope.now = 0;
        }
        mainService.move($scope.now);
    });
    $('.prev-btn').on('click',function(){
        $scope.now --;
        if($scope.now <= -1){
            $scope.now = 4
        }
        mainService.move($scope.now);
    });
    //自动切换
    var timer = $interval(function(){
        $scope.now ++;
        if($scope.now >= $('.carousel li').length){
            $scope.now = 0;
        }
        mainService.move($scope.now);
    },3000);


    //菜单滑动门滑上时
    $('.main-menu div ul').on('mouseover','li',function(){
        //定义当前滑上的序号
        var index = this.dataset.index;
        mainService.show(index);
    });
    //滑出时
    $('.main-menu div ul').on('mouseout','li',function(){
        mainService.hide();
    });
    //滑上本身时
    $('.main-tab').on('mouseover','div',function(){
        var num = this.dataset.num;
        mainService.show(num);
    });
    $('.main-tab').on('mouseout','div',function(){
        mainService.hide();
    });

    //从数据库读取数据实现 猜你喜欢 模块
    $http.get('main/php/like.php')
        .success(function(result){
            //动态生成元素
            $('<div />',{
                class: 'like'
            }).appendTo($('.main:last'));
            $('<div />',{
                class: 'clearFix main-like'
            }).appendTo($('.like:last'));
            $('.main-like:last').append('<h2>猜你喜欢</h2>');
            $.each(result,function(i,obj){
                $('<div />',{
                    class: 'hover',
                    html: $('<img />',{
                        src: obj.src
                    })
                }).appendTo($('.main-like:last'));
                $('<p />',{
                    html: obj.decoration
                }).appendTo($('.main-like div:last'));
                $('<p />',{
                    class: 'clearFix pic-p',
                    html: '<span>'+ obj.price + '</span><span>' + obj.person + '</span>'
                }).appendTo($('.main-like div:last'));
            });

            //滑上样式改变
            mainService.changeStyle();
        });

    //从数据库读取数据实现 课程 模块
    $http.get('main/php/course_name.php')
        .success(function(re){
            $.each(re,function(i,obj){
                var num = i + 1;
                $('<div />',{
                    class: 'course course1',
                    html: $('<div />',{
                        class: 'course-cont',
                        html: $('<div />',{
                            class: 'course-title clearFix',
                            html: '<h3>'+obj.name+'</h3>' + '<span><a href="###">更多</a></span>'
                        })
                    })
                }).appendTo($('.main'));

                //动态添加详细的课程介绍
                $http.get('main/php/course_detail.php',{
                    params: {
                        num : num
                    }
                }).success(function(r){
                    $.each(r,function(i,obj){
                        if(!obj.detail){
                            $('<div />',{
                                class: 'main-course',
                                html: $('<div />',{
                                    class: 'hover',
                                    html: $('<img />',{
                                        src : obj.src
                                    })
                                })
                            }).appendTo($('.course-cont').eq(num-1))
                        } else{
                            $('<div />',{
                                class: 'hover small',
                                html: $('<img />',{
                                    src : obj.src
                                })
                            }).appendTo($('.main-course:last'));
                            $('.small:last').append('<p>'+obj.detail+'</p>').append('<p class="main-price"></p>');
                            $('.main-price:last').append('<span>'+obj.newPrice+'</span>').append('<span>'+obj.oldPrice+'</span>');
                            if(obj.focus){
                                $('.main-price:last').append('<span>'+obj.focus+'</span>')
                            }
                        }

                    })

                    //滑上样式改变
                    mainService.changeStyle();
                })
            })

        });

    //从数据库读取数据实现 新闻 模块
        $http.get('main/php/news_type.php')
            .success(function(res){
                $('<div />',{
                    class: 'news',
                    html: $('<div />',{
                        class: 'news-cont clearFix'
                    })
                }).appendTo($('.main:last'));
                $.each(res,function(i,obj){
                    var num1 = i+1;
                    $('<div />',{
                        class: 'cont-detail',
                        html: $('<div />',{
                            class: 'clearFix',
                            html: '<h3>'+obj.name+'</h3>'+'<span><a href="###">更多</a></span>'
                        })
                    }).appendTo($('.news-cont:last'));
                    $('.cont-detail:last').append('<ul class="list"></ul>');

                    $http.get('main/php/news_detail.php',{
                        params:{
                            num1: num1
                        }
                    })
                        .success(function(d){
                            $.each(d,function(i,obj){
                                $('<li />',{
                                    html: '<a href="###">'+obj.news+'</a>' + '<span>'+obj.timer+'</span>'
                                }).appendTo($('.list').eq(num1-1))
                            })
                        })
                })

            });

}]);










