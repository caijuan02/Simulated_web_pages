//滑动显示
$('ul').on('click',function(eve){
    //点击的时候情况dl
    $('dl').remove();
    var e = eve || window.event;
    //console.log(e.target.nodeName.toLowerCase());
    if(e.target.nodeName.toLowerCase() == 'li'){
        var li = e.target;
        var index = li.dataset.index;
        var oli = document.getElementsByTagName('li');
        for(var i=0;i<oli.length;i++){
            oli[i].className = '';
        }
        oli[index-1].className = 'selected';
        //发送数据
        $.ajax({
            url: 'php/type.php',
            type: 'get',
            dataType: 'json',
            data: {
                num: index
            },
            success: function(r){
                //console.log(r);
                $.each(r,function(i,obj){
                    //$('dl').remove();
                    //console.log(obj);
                    $('<dl/>').appendTo($('.species'));
                    $('<dt>' +obj.spe+ '</dt>').appendTo($('dl:last'));
                    $('<dd/>').appendTo($('dl:last'));
                });
                $.ajax({
                    url: 'php/species.php',
                    dataType: 'json',
                    data: {
                        num: index
                    },
                    success: function(r1){
                        //console.log(r1);
                        //console.log($('dt:last').text());
                        var str = $('dt');
                        var arr = [];
                        $.each(r1,function(i1,obj1){
                            arr.push(obj1.spe_num);
                            //console.log(str[obj1.spe_num-arr[0]].innerHTML);
                            if(obj1.spe == str[obj1.spe_num-arr[0]].innerHTML){
                                $('<a/>',{
                                html: $('<img/>',{
                                src: 'img/' + obj1.spe_img + '.jpg'
                                   })
                                }).append('<span>' + obj1.spe_name + '</span>').appendTo($('dd')[obj1.spe_num-arr[0]]);
                            }
                        })
                    }
                });
            }
        })
    }
});














