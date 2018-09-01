$(function(){
    $('.tabbox .content_box ul').width(440*$('.tabbox .content_box li').length+'px');
    $(".tabbox .tab a").mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        var distance = -440*index;
        $('.tabbox .content_box ul').stop().animate({
            left:distance
        });
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if(auto ==1){
        var number = 0;
        var maxNumber = $('.tabbox .tab a').length;
        function autotab(){
            number++;
            number == maxNumber? number = 0 : number;
            $('.tabbox .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
            var distance = -440*number;
            $('.tabbox .content_box ul').stop().animate({
                left:distance
            });
        }
        var tabChange = setInterval(autotab,3000);
        //鼠标悬停暂停切换
        $('.tabbox').mouseover(function(){
            clearInterval(tabChange);
        });
        $('.tabbox').mouseout(function(){
            tabChange = setInterval(autotab,3000);
        });
    }
});