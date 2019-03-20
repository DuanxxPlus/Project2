$(function () {
    var w=$(window).width(),h=$(window).height();
    if($(window).scrollTop()>$('nav').height()) $('header').addClass('headerFixed');
    else $('header,.header>div').removeClass('headerFixed');
    // $('.sp1,.sp2').css('background-position','-'+(1920-$('.sp').width())/2+'px 0');
    if(w>1183){
        $('main>div').css('margin-top',($('main').height()-$('main>div').height())/2.5+'px');
    }
    else if(w>719){
        $('main>div').css('margin-top',($('main').height()-$('main>div').height())/2+'px');
    }
    else{
        $('main>div').css('margin-top','135px');
    }
});
$(window).scroll(function () {
    var w=$(window).width(),h=$(window).height();
    if($(window).scrollTop()>$('nav').height()) $('header').addClass('headerFixed');
    else $('header,.header>div').removeClass('headerFixed');
});
$(window).resize(function () {
    var w=$(window).width(),h=$(window).height();
    // $('.sp1,.sp2').css('background-position','-'+(1920-$('.sp').width())/2+'px 0');
    if(w>1183){
        $('main>div').css('margin-top',($('main').height()-$('main>div').height())/2.5+'px');
    }
    else if(w>719){
        $('main>div').css('margin-top',($('main').height()-$('main>div').height())/2+'px');
    }
    else{
        $('main>div').css('margin-top','135px');
    }
});
$('.sp_button span').eq(0).click(function () {
    if(!$(this).hasClass('sp_checked')) {
        $('.sp1').width('100%');
        $('.sp2').width(0);
    }
    $(this).addClass('sp_checked');
    $(this).siblings('span').removeClass('sp_checked');
});
$('.sp_button span').eq(1).click(function () {
    if(!$(this).hasClass('sp_checked')) {
        $('.sp2').width('100%');
        $('.sp1').width(0);
    }
    $(this).addClass('sp_checked');
    $(this).siblings('span').removeClass('sp_checked');
});
$('.sp>a').hover(function () {
    $('.sp>a>img').attr('src','../images/spImg2.png');
},function () {
    $('.sp>a>img').attr('src','../images/spImg1.png');
});