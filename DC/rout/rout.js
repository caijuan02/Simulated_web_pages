angular.module('myRoute',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider) {
        //默认显示
        $urlRouterProvider.when('', '/index.html');
        //首页
        $stateProvider.state('index', {
            url: '/index.html',
            templateUrl: 'main/main.html',
            controller: 'mainCtrl'
        });
        //在线课程
        $stateProvider.state('onlineCourse', {
            url: '/onlineCourse.html',
            templateUrl: 'onlineCourse/onlineCourse.html',
            controller: 'onlineCourseCtrl'
        });
        //精品课程
        $stateProvider.state('excellentCourse',{
            url: '/excellentCourse.html',
            templateUrl: 'excellentCourse/excellentCourse.html',
            controller: 'excellentCourseCtrl'
        });
        //公开课
        $stateProvider.state('publicCourse',{
            url: '/publicCourse.html',
            templateUrl: 'publicCourse/publicCourse.html',
            controller: 'publicCourseCtrl'
        });
        //微课堂
        $stateProvider.state('microClass',{
        	url:'/microClass.html',
        	templateUrl:'microClass/microClass.html',
        	controller:'microClassCtrl'
        });
        //问答专区
        $stateProvider.state('questionAnswer',{
            url: '/questionAnswer.html',
            templateUrl: 'questionAnswer/questionAnswer.html',
            controller: 'questionAnswerCtrl'
        })
    });
