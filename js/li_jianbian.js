$(document).ready(function(){
    $(".content_character ul li").mouseover(function(){
        a=$(this).width();
        if(!$(this).is(":animated")){
            $(this).animate({
                width:'300px'},1000);
        }
    }).mouseout(function(){
        if(!$(this).is(":animated")){
        $(this).animate({
                width:a+"px"},1000);
        }
    });
});