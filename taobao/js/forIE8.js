+function (IE){
    var IE8AndLower = {};

    //一、判断是否为数组类型
    /**
     *兼容IE8及以下版本判断是否为数组类型的方法
     * @param obj         需要判断的元素名
     * @returns {boolean} 返回值  true是数组类型  false 不是数组类型
     */
    IE8AndLower.isArray = function (obj){
        if(Array.isArray){
            return Array.isArray(obj);
        } else {
            return obj.constructor == Array;
        }
    };

    //二、遍历并输出所有属性名
    /**
     *兼容IE8及以下版本遍历并输出所有属性名的方法
     * @param obj       需要遍历的数组名
     * @returns {Array} 返回obj的所有属性名
     */
        //判断 Object.keys 是否存在, 存在直接调用
        //....
        //不存在, for in  var i 是属性名, 将所有的i 存储到一个数组中, 最后将数组返回
    IE8AndLower.getAllKeys = function (obj){
        var arr = [];
        for (var i in obj) {
            arr[arr.length] = i;
        }
        return arr;
    };

    //三、通过className获取元素
    /** 输出含有这个类名的元素
     * 1.判断是否有这个方法   如果有 直接输出
     * 2.没有
     *    遍历所有的标签名   如果有这个类名  就输出
     *    遍历结束  没有
     */
    /**
     * 找到含有某个类名的元素
     * @param classStr     某个类名
     * @param tagName      需要找的是否含有这个类名的元素
     * @returns {*}
     */
    IE8AndLower.getClassNames = function (classStr,tagName){
        //如果getElementsByClassName可以用就直接输出
        if(document.getElementsByClassName){
            return document.getElementsByClassName(classStr);
        } else{
            var r = document.getElementsByTagName(tagName);
            // 定义一个数组装输出的结果
            var no = [];
            for(var i = 0; i< r.length;i++){
                if(hasClass(r[i],classStr)){ //调用hasClass函数
                    no.push(r[i]);
                }
            }
            return no;
        }
    };

    //四、获取BOM中的一些宽高
    /**
     * 获取可视区的宽度
     * @returns {number}
     */
    IE8AndLower.clientW = function(){
        return document.documentElement.clientWidth || document.body.clientWidth;
    };
    /**
     * 获取可视区的高度
     * @returns {number}
     */
    IE8AndLower.clientH = function(){
        return document.documentElement.clientHeight || document.body.clientHeight;
    };
    /**
     * 上下滚动时滚动条距上部的距离
     * @returns {number}
     */
    IE8AndLower.scrollT = function(){
        return document.documentElement.scrollTop || document.body.scrollTop;
    };
    /**
     * 左右滚动时滚动条距左边的距离
     * @returns {*|number}
     */
    IE8AndLower.scrollL = function(){
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    };
    /**
     * 获取定义的高度
     * @returns {number}
     */
    IE8AndLower.scrollH = function(){
        return document.documentElement.scrollHeight || document.body.scrollHeight;
    };
    /**
     * 获取定义的宽度
     * @returns {number}
     */
    IE8AndLower.scrollW = function(){
        return document.documentElement.scrollWidth || document.body.scrollWidth;
    };

    //五、获取内部或外部样式
    /**
     * 获取内部或外部样式
     * @param obj   要获取哪个元素的样式
     * @param attr  想获取的哪个样式
     * @returns {*}
     */
    IE8AndLower.getStyle = function(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        } else{
            return getComputedStyle(obj,null)[attr];
        }
    };

    //六、添加和删除DOM2级事件
    /**
     *添加DOM2级 事件
     * @param obj   需要添加事件的元素
     * @param eve   添加的事件名
     * @param fn    执行的函数   可以是匿名函数 也可以是调用的函数
     */
    IE8AndLower.addFn = function(obj,eve,fn){
        if(obj.addEventListener){
            return obj.addEventListener(eve,fn);
        } else if(obj.attachEvent){
            return obj.attachEvent("on"+eve,fn);
        }
    };
    /**
     * 删除DOM2级事件
     * @param obj    需要删除事件的元素
     * @param eve    删除的事件名
     * @param fn     调用的函数名
     */
    IE8AndLower.removeFn = function(obj,eve,fn){
        if(obj.removeEventListener){
            return obj.removeEventListener(eve,fn);
        } else if(obj.detachEvent){
            return obj.detachEvent("on" + eve,fn);
        }
    };





    /**
     * 删除所有空格
     * @param str     需要删除空格的元素
     * @returns {XML|void|string}
     */
    IE8AndLower.deleteAll = function(str){
        return str.replace(/\s+/g,"");
    };
    /**
     *删除两边空格
     * @param str
     * @returns {XML|void|string}
     */
    IE8AndLower.deleteTrim = function(str){
        //if(str.trim){
        //    return str.trim;
        //}
        return str.replace(/(^\s*)|(\s*$)/g,"");
    };
    /**
     * 删除左边空格
     * @param str
     * @returns {XML|void|string}
     */
    IE8AndLower.deleteLtrim = function(str){
        return str.replace(/(^\s*)/g,"");
    };
    /**
     * 删除右边空格
     * @param str
     * @returns {XML|void|string}
     */
    IE8AndLower.deleteRtrim = function(str){
        return str.replace(/(\s*$)/g,"");
    };






    if (!IE.love) {
        IE.love = {};
    }
    IE.love.me = IE8AndLower;
}(window);
