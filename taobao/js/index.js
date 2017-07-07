//获取样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {//IE6-8
        return obj.currentStyle[attr];
    } else {//高级浏览器
        return getComputedStyle(obj, null)[attr];
    }
}
//完美框架
function hcmove(obj, json, fn) {
    clearInterval(obj.timer);
    var speed = 0;
    obj.timer = setInterval(function () {
        var curr = 0;
        var flag = true;//假设所有效果都实现了，给flag=true
        //应该是等所有效果都实现后，才清理定时器
        //json需要在定时器里面解析
        for (var attr in json) {//第一次循环attr ="width"  第二次循环 attr = "height"
            if (attr == "opacity") {
                curr = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                curr = parseInt(getStyle(obj, attr));
            }
            speed = (json[attr] - curr) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (json[attr] != curr) {
                flag = false;
            }
            if (attr == "opacity") {
                curr += speed;
                obj.style.opacity = curr / 100;
                obj.style.filter = "alpha(opacity=" + curr + ")";
            } else {
                obj.style[attr] = curr + speed + "px";
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}
//导航
var onavP = love.me.getClassNames("nav_p","p");
var ohide = love.me.getClassNames("hide","div");
for(var i=0;i<onavP.length;i++){
    onavP[i].onmousedown = function(num){
        return function fn1(){
            for(var j=0;j<ohide.length;j++){
                if(j == num){
                    onavP[j].style.backgroundColor = "#fff";
                    onavP[j].style.borderWidth = 1 +"px";
                    onavP[j].style.borderStyle = "solid";
                    onavP[j].style.borderColor = "#f5f5f5";
                    ohide[j].style.display = "block";
                } else{
                    onavP[j].style.backgroundColor = "";
                    onavP[j].style.borderWidth = 1 +"px";
                    onavP[j].style.borderStyle = "solid";
                    onavP[j].style.borderColor = "#transparent";
                    ohide[j].style.display = "none";
                }
            }
        }
    }(i);
    /*document.onmousedown = function(){
        onavP[i].style.backgroundColor = "";
        onavP[i].style.borderWidth = 1 +"px";
        onavP[i].style.borderStyle = "solid";
        onavP[i].style.borderColor = "#transparent";
        ohide[i].style.display = "none";
    }*/
}
//关闭二维码
var close = document.getElementById("close");
var erweima = love.me.getClassNames("erweima","div")[0];
close.onclick = function(){
    erweima.style.display = "none";
};
//右侧链接
var fly = love.me.getClassNames("fly","div")[0];
var flyA7 = love.me.getClassNames("a7","div")[0];
console.log(fly);
window.onscroll = function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollT);
    if(scrollT >= 500){
        fly.style.position = "fixed";
        fly.style.top = 0;
        flyA7.style.display = "block";
    } else{
        fly.style.position = "absolute";
        fly.style.top = 500 + "px";
        flyA7.style.display = "none";
    }
};
//右侧公告
var aside = document.getElementsByTagName("aside")[0];
var aside2 = love.me.getClassNames("aside2", "div")[0];
var anav = love.me.getClassNames("nav", "div")[0];
var a = anav.getElementsByTagName('a');
var aword = love.me.getClassNames("word", "div");
for (var i = 0; i < a.length; i++) {
    a[i].onmouseover = function (num) {
        return function fn1() {
            for (var j = 0; j < aword.length; j++) {
                if (j == num) {
                    aword[j].style.display = "block";
                    a[j].style.fontSize = 14 + "px";
                } else {
                    aword[j].style.display = "none";
                    a[j].style.fontSize = 12 + "px";
                }
            }
        }
    }(i)
}

//右侧功能
var aside3 = love.me.getClassNames("aside3", "div")[0];
var aline = love.me.getClassNames("line1", "div");
var aicon = love.me.getClassNames("icon1", "div");
var aintro = love.me.getClassNames("intro", "div");
for (var p = 0; p < aicon.length; p++) {
    aicon[p].onmouseover = function (num) {
        return function fn2() {
            for (var q = 0; q < aintro.length; q++) {
                if (q == num) {
                    aintro[q].style.display = "block";
                    aintro[q].style.ZIndex = 5;
                    aicon[q].style.width = 69 + "px";
                    aicon[q].style.height = 67 + "px";
                    aicon[q].style.borderWidth = 1 + "px";
                    aicon[q].style.borderStyle = "solid";
                    aicon[q].style.borderColor = "#f40";
                    aicon[q].style.borderBottom = "none";
                    aicon[q].style.color = "#f40";

                } else {
                    aintro[q].style.display = "none";
                    aintro[q].style.ZIndex = 0;
                    aicon[q].style.width = 71 + "px";
                    aicon[q].style.height = 69 + "px";
                    aicon[q].style.borderStyle = "";
                    aicon[q].style.color = "";
                }
            }
        }
    }(p);
}

//滑入透明度变化
var apic1 = love.me.getClassNames("type_pic1", "div");
var aimage = love.me.getClassNames("image", "div");
var apic2 = love.me.getClassNames("pic2", "div");
var apic3 = love.me.getClassNames("pic3", "div");
var apic4 = love.me.getClassNames("pic4", "div");
var aimage1 = love.me.getClassNames("image1", "div");
var ap1 = love.me.getClassNames("p1", "div");
var apic6 = love.me.getClassNames("pic6", "div")[0];
var smallI = apic6.getElementsByTagName("img");
var smallP = apic6.getElementsByTagName("p");
for (var m = 0; m < apic2.length; m++) {
    apic3[m].onmouseover = apic2[m].onmouseover = function () {
        hcmove(this, {"opacity": "70"});
    };
    apic3[m].onmouseout = apic2[m].onmouseout = function () {
        hcmove(this, {"opacity": "100"})
    }
}
for (var n = 0; n < aimage1.length; n++) {
    apic4[n].onmouseover = function (num) {
        return function fn3() {
            hcmove(aimage1[num], {"opacity": "70"});
            hcmove(ap1[num], {"opacity": "100"});
            ap1[num].style.color = "#f40";
        }
    }(n);
    apic4[n].onmouseout = function (num) {
        return function fn3() {
            hcmove(aimage1[num], {"opacity": "100"});
            ap1[num].style.color = "#000";
        }
    }(n)
}
for (var l = 0; l < aimage.length; l++) {
    aimage[l].onmouseover = function () {
        hcmove(this, {"opacity": "70"})
    };
    aimage[l].onmouseout = function () {
        hcmove(this, {"opacity": "100"})
    }
}
for (var w = 0; w < smallI.length; w++) {
    smallI[w].onmouseover = function (num) {
        return function fn3() {
            hcmove(this, {"opacity": "70"});
            smallP[num].style.color = "#f40";
        }
    }(w);
    smallI[w].onmouseout = function (num) {
        return function fn3() {
            hcmove(this, {"opacity": "100"});
            smallP[num].style.color = "#000";
        }
    }(w);
}

//右边滑上滑下
var aside5 = love.me.getClassNames("aside5", "div")[0];
var aul = aside5.getElementsByTagName("ul")[0];
var ali = aul.getElementsByTagName("li");
function move() {
    var height1 = -ali[0].offsetHeight + aul.offsetTop;
    if(height1 < -119){
        height1 = aul.offsetTop+ ali[0].offsetHeight;
    } else if(height1 > 33){
        height1 = 33;
    } else{
        height1 = -ali[0].offsetHeight + aul.offsetTop;
    }
    hcmove(aul, {"top": height1});
}
var timer = setInterval(move, 3000);
for (var i = 0; i < ali.length; i++) {
    ali[i].onmouseover = function () {
        clearInterval(timer);
    };
    ali[i].onmouseout = function () {
        timer = setInterval(move,3000);
    }
}
var olifePic = love.me.getClassNames("life_pic1","div");
var olifeImg = [];
var olifeWord = [];
for(var i=0;i<olifePic.length;i++){
    olifeImg[i] = olifePic[i].getElementsByTagName("img")[0];
    olifeWord[i] = olifePic[i].getElementsByTagName("div")[0];
    olifePic[i].onmouseover = function(num){
        return function fn3(){
            hcmove(olifeImg[num],{"opacity": "70"});
            olifeWord[num].style.color = "#f40";
        }
    }(i);
    olifePic[i].onmouseout = function(num){
        return function fn3(){
            hcmove(olifeImg[num],{"opacity": "100"});
            olifeWord[num].style.color = "";
        }
    }(i);

}

//右边滑入a标签内图片透明度变化
var aside6Pic = document.getElementById('aside6_pic');
var oaside6A = aside6Pic.getElementsByTagName("a");
var oaside6Img = love.me.getClassNames("aside6_img","img");
for(var i=0;i<oaside6A.length;i++){
    oaside6A[i].onmouseover = function(num){
        return function fn1(){
            hcmove(oaside6Img[num],{"opacity":"70"});
        }
    }(i);
    oaside6A[i].onmouseout = function(num){
        return function fn1(){
            hcmove(oaside6Img[num],{"opacity":"100"});
        }
    }(i)
}