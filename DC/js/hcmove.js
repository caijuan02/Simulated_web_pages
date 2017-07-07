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