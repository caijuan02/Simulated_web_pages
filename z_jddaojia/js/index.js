//背景图片触摸滑动
new Swiper('.img-container', {
    loop: true,
    autoplay: 2000,
    //页码生成的容器
    pagination: '.swiper-pagination',
    //可点击页码
    paginationClickable: true,
    //paginationHide: true
    paginationBulletRender: function (index, cname) {
        return '<span class="' + cname + '">' + '</span>'
    },
    //swiper 自动播放后还能触摸滑动
    autoplayDisableOnInteraction: false    //注意此参数，默认为true
});
//banner图片
/*$.ajax({
 url: 'php/banner.php',
 dataType: 'json',
 success: function(r){
 $.each(r,function(i,obj){
 $('<div/>',{
 class: 'swiper-slide',
 html: $('<img/>',{
 src: 'img/' + obj.src + '.jpg'
 })
 }).appendTo($('.swiper-wrapper'))
 })
 }
 });*/
//限时秒杀倒计时
//取元素
var time = document.getElementById('time');
var hh = document.getElementById('hh');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');
var newhh = 2;
var newmm = 59;
var newss = 59;
var timer = setInterval(function () {
    newss--;
    if (newss < 10) {
        ss.innerHTML = '0' + newss;
        if (newss == 0) {
            newss = 60;
            newmm -= 1;
        }
    } else {
        ss.innerHTML = newss;
    }
    if (newmm < 10) {
        mm.innerHTML = '0' + newmm;
        if (newmm == -1) {
            newmm = 59;
            newhh -= 1;
        }
    } else {
        mm.innerHTML = newmm;
    }
    if (newhh < 10) {
        hh.innerHTML = '0' + newhh;
        if (newhh == -1) {
            newhh = 2;
            newss = 59;
            newmm = 59;
        }
    } else {
        hh.innerHTML = newhh;
    }
}, 1000);


//限时秒杀图片
$.ajax({
    url: 'php/time_pic.php',
    dataType: 'json',
    success: function (r1) {
        //添加图片
        var arr = [];
        r1.forEach(function (obj) {
            arr.push(obj.src);
        });
        //图片播放
        var i = 0;
        var timer = setInterval(function () {
            $('#time-img-all img').remove();
            $('<img/>', {
                src: 'img/' + arr[i] + '.jpg',
                class: 'block'
            }).appendTo($('#time-img-all'));
            i++;
            if(i == 3){
                i=0;
            }


        }, 3000)


    }
});

//附近的店铺
$.ajax({
    url: 'php/nearby.php',
    dataType: 'json',
    success: function (r2) {
        $.each(r2, function (i, obj) {
            //添加li
            $('<li/>', {
                class: 'main-li'
            }).appendTo($('.main'));
            //为li添加内容
            $('<div/>', {
                class: 'ul-top'
            }).appendTo($('.main-li:last'));
            $('<div/>', {
                class: 'detail'
            }).appendTo($('.ul-top:last'));
            $('<div/>', {
                class: 'banner'
            }).appendTo($('.detail:last'));
            //添加推荐店家图片
            if (obj.banner_img) {
                $('<img/>', {
                    src: 'img/' + obj.banner_img + '.jpg' || 'img/' + obj.banner_img + '.png'
                }).appendTo($('.banner:last'));
            } else {
                $('<img/>', {
                    src: 'img/' + obj.default_img + '.png'
                }).appendTo($('.banner:last'));
            }

            $('<div/>', {
                class: 'message clearFix'
            }).appendTo($('.detail:last'));
            //为message添加内容
            $('<h2/>', {
                html: obj.h2
            }).appendTo($('.message:last'));
            $('<div/>', {
                class: 'courier clearFix'
            }).appendTo($('.message:last'));
            //为courier添加内容
            $('<p/>', {
                class: 'courier-p1',
                html: obj.p1
            }).appendTo($('.courier:last'));
            $('<p/>', {
                class: 'courier-p2',
                html: obj.p2
            }).appendTo($('.courier:last'));
            $('<p/>', {
                class: 'evaluation clearFix'
            }).appendTo($('.message:last'));
            $('.evaluation:last').append('<i></i>').append('<i></i>').append('<i></i>').append('<i></i>').append('<i class="half-A-star"></i>');
            $('<p/>', {
                class: 'order'
            }).appendTo($('.message:last'));
            $('.order:last').append('<i class="line"></i>').append(obj.order);
            //添加购物车
            $('<div/>', {
                class: 'car',
                html: $('<i/>')
            }).appendTo($('.detail:last'));
            //添加news
            if (obj.news) {
                $('<p/>', {
                    class: 'news',
                    html: $('<i/>')
                }).appendTo($('.ul-top:last'));
                $('.news:last').append(obj.news);
            }
            //添加满减
            if (obj.fulldown) {
                $('<div/>', {
                    class: 'fulldown',
                    html: $('<i/>', {
                        html: '满减'
                    })
                }).appendTo($('.main-li:last'));
                $('<span/>', {
                    html: obj.fulldown
                }).appendTo($('.fulldown:last'));
            }
            //添加下面的图片
            if (obj.part_img1) {
                $('<div/>', {
                    class: 'part'
                }).appendTo($('.ul-top:last'));
                $('.part:last').append('<div class="part1"></div>').append('<div class="part2"></div>').append('<div class="part3"></div>').append('<div class="part4"></div>');
                $('<img/>', {
                    src: 'img/' + obj.part_img1 + '.jpg'
                }).appendTo($('.part1:last'));
                $('<span/>', {
                    html: obj.price1
                }).appendTo($('.part1:last'));

                $('<img/>', {
                    src: 'img/' + obj.part_img2 + '.jpg'
                }).appendTo($('.part2:last'));
                $('<span/>', {
                    html: obj.price2
                }).appendTo($('.part2:last'));

                $('<img/>', {
                    src: 'img/' + obj.part_img3 + '.jpg'
                }).appendTo($('.part3:last'));
                $('<span/>', {
                    html: obj.price3
                }).appendTo($('.part3:last'));

                $('<img/>', {
                    src: 'img/' + obj.part_img4 + '.jpg'
                }).appendTo($('.part4:last'));
                $('<span/>', {
                    html: obj.price4
                }).appendTo($('.part4:last'));
            }

            //添加推荐标签
            var num = $('.main-li').length;
            if (num <= 3) {
                $('<i/>', {
                    class: 'tuijian'
                }).appendTo($('.main-li:last'));
            }


        })
    }
});



















