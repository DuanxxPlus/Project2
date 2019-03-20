(function () {
    var w=$(window).width(),x;
    if(w>1166){
        $('.banner1 h2,.banner1 h3,.banner1 p,.banner1_buyNow').css('margin-left',(w-1000)/2+'px');
        x=(3840-w)/2;
        $('.banner1 h3').css('margin-top','168px');
        $('main>div').css({'background-size':'1910px 500px','background-position':'-'+(1910-w*0.4965)/2+'px 0'});
        $('article').css({
            'height':w/2.62+'px',
            'background-size':w+'px '+w*1080/1920+'px',
            'background-position':'0 -'+(175*w/1920)+'px',
        });
    }
    else if(w>1050){
        $('.banner1 h2,.banner1 h3,.banner1 p,.banner1_buyNow').css('margin-left',(w-1000)/2+'px');
        x=(3840-w)/2;
        $('.banner1 h3').css('margin-top','168px');
        $('main>div').css({'background-size':'1719px 450px','background-position':'-'+(1719-w*0.4965)/2+'px 0'});
        $('article').css({
            'height':w/2.62+'px',
            'background-size':w+'px '+w*1080/1920+'px',
            'background-position':'0 -'+(175*w/1920)+'px',
        });
    }
    else{
        x=3840/(650/(w/3));
        $('.banner1 h2,.banner1 h3,.banner1 p,.banner1_buyNow').css('margin-left','25px');
        $('.banner1').css({'height':w/3+'px','background-size':x+'px '+(w/3)+'px'});
        $('.banner1 h3').css('margin-top','3%');
        x=(x-w)/2;
        $('main>div').css({'background-size':'1719px 450px','background-position':'-'+(1719-w)/2+'px 0'});
        $('article').css({
            'height':w/1.95+'px',
            'background-size':w+'px '+w*1080/1920+'px',
            'background-position':'0 -'+(175*w/1920)+'px',
        });
    }
    $('.banner1').css('background-position','-'+x+'px 0');
})();
$(window).resize(function () {
    var w=$(window).width(),x;
    if(w>1166){
        $('.banner1 h2,.banner1 h3,.banner1 p,.banner1_buyNow').css('margin-left',(w-1000)/2+'px');
        x=(3840-w)/2;
        $('.banner1').css({'height':'650px','background-size':'3840px 650px'});
        $('.banner1 h3').css('margin-top','168px');
        $('main>div').css({'background-size':'1910px 500px','background-position':'-'+(1910-w*0.4965)/2+'px 0'});
        $('article').css({
            'height':w/2.62+'px',
            'background-size':w+'px '+w*1080/1920+'px',
            'background-position':'0 -'+(175*w/1920)+'px',
        });
    }
    else if(w>1050){
        $('.banner1 h2,.banner1 h3,.banner1 p,.banner1_buyNow').css('margin-left',(w-1000)/2+'px');
        x=(3840-w)/2;
        $('.banner1').css({'height':'650px','background-size':'3840px 650px'});
        $('.banner1 h3').css('margin-top','168px');
        $('main>div').css({'background-size':'1719px 450px','background-position':'-'+(1719-w*0.4965)/2+'px 0'});
        $('article').css({
            'height':w/2.62+'px',
            'background-size':w+'px '+w*1080/1920+'px',
            'background-position':'0 -'+(175*w/1920)+'px',
        });
    }
    else{
        x=3840/(650/(w/3));
        $('.banner1 h2,.banner1 h3,.banner1 p,.banner1_buyNow').css('margin-left','25px');
        $('.banner1').css({'height':w/3+'px','background-size':x+'px '+(w/3)+'px'});
        $('.banner1 h3').css('margin-top','3%');
        x=(x-w)/2;
        $('main>div').css({'background-size':'1719px 450px','background-position':'-'+(1719-w)/2+'px 0'});
        $('article').css({
            'height':w/1.95+'px',
            'background-size':w+'px '+w*1080/1920+'px',
            'background-position':'0 -'+(175*w/1920)+'px',
        });
    }
    $('.banner1').css('background-position','-'+x+'px 0');
});
$('#goShopping').hover(function () {
    $('#goShopping>div').animate({'width':'100%'},200);
},function () {
    $('#goShopping>div').animate({'width':'0'},200);
});
$('article>a').hover(function () {
    $('article>a>div').animate({'width':'100%'},200);
},function () {
    $('article>a>div').animate({'width':'0'},200);
});
$('.onePlusButton').click(function () {
    var i=$(this).index('.onePlusButton');
    var h=$('.onePlus>ul>li').eq(i).children('dl').height();
    if($('.onePlus>ul>li').eq(i).height()==50){
        $('.onePlus>ul>li').height(50);
        $('.onePlus>ul>li').eq(i).animate({'height':h+'px'},350);
        $('.onePlusButton2').css('transform','rotate(-90deg)');
        $(this).children().eq(1).css('transform','rotate(0)');
    }
    else{
        $('.onePlus>ul>li').eq(i).animate({'height':'50px'},350);
        $(this).children().eq(1).css('transform','rotate(-90deg)');
    }
});