angular.module('indexService',[])
.service('indexService',['$rootScope',function(){
    this.start = function(index){
        if(index < -1){
            index = $('.carousel2 div ul li').length;
        };
        if(index >= $('.carousel2 div ul li').length){
            index = 0;
        };
        hcmove($('.carousel2 div ul')[0],{'left': -(($('.carousel2 div ul li')[0].offsetWidth + 10) * index)});
    }
}]);