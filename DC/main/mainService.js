//自定义轮播图滑动的服务
angular.module('mainService', [])
    .service('mainService', [function () {
        //轮播图
        this.move = function (now) {
            hcmove($('.carousel ul')[0],{'left': -($('.carousel li')[0].offsetWidth * now )});
            $('.circle div i').each(function(index){
                $('.circle div i').eq(index).removeClass('i');
            });
            $('.circle div i').eq(now).addClass('i');
        };

        //滑动门
        this.show = function (k) {
            $('.main-tab div').each(function(i){
                $('.main-tab div').eq(i).removeClass('tab-active');
            });
            $('.main-tab div').eq(k).addClass('tab-active');

            //清除激活状态
            $('.main-menu div ul li').each(function(i){
                $('.main-menu div ul li').eq(i).removeClass('li-active');
            });
            $('.main-menu div ul li a').each(function(j){
                $('.main-menu div ul li a').eq(j).removeClass('a-active');
            });
            //激活状态
            $('.main-menu div ul li').eq(k).addClass('li-active');
            $('.main-menu div ul li a').eq(k).addClass('a-active');
        };
        this.hide = function(){
            //清除激活状态
            $('.main-menu div ul li').each(function(i){
                $('.main-menu div ul li').eq(i).removeClass('li-active');
            });
            $('.main-menu div ul li a').each(function(j){
                $('.main-menu div ul li a').eq(j).removeClass('a-active');
            });
            $('.main-tab div').each(function(i){
                $('.main-tab div').eq(i).removeClass('tab-active');
            });
        }

        //滑上样式改变
        this.changeStyle = function(){
            $('.hover').each(function(i){
                $('.hover')[i].index = i;
                $('.hover').eq(i).removeClass('course-active');
            });
            $('.hover').on('mouseover',function(){
                $('.hover').eq(this.index).addClass('course-active');
            });
            $('.hover').on('mouseout',function(){
                $('.hover').eq(this.index).removeClass('course-active');
            })
        }
    }]);
