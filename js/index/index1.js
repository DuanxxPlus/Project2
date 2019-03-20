$('#search').hover(function () {
    $('#search img').attr('src','images/search2.png');
},function () {
    $('#search img').attr('src','images/search1.png');
});
$('#shoppingCar').hover(function () {
    $('#shoppingCar img').attr('src','images/shoppingCar2.png');
},function () {
    $('#shoppingCar img').attr('src','images/shoppingCar1.png');
});
$('#user').hover(function () {
    $('#user img').attr('src','images/user2.png');
},function () {
    $('#user img').attr('src','images/user1.png');
});
$('#shoppingCar2').click(function () {
    $('#shop').show();
    $('#menu').hide();
});
$('#shop').mouseleave(function () {
    $(this).hide();
    $('#menu').show();
});
$('#menu').click(function () {
    $('#nav').toggle();
    $('#menu li').eq(1).toggle();
    if($('#menu li').eq(0).css('transform')=='none'){
        $('#menu li').eq(0).css({'transform':'rotate(45deg)','left':'1px','background':'black'});
        $('#menu li').eq(2).css({'transform':'rotate(-45deg)','left':'1px','background':'black'});
    }
    else{
        $('#menu li').eq(0).css({'transform':'none','left':'0','background':'#828282'});
        $('#menu li').eq(2).css({'transform':'none','left':'0','background':'#828282'});
    }
});
$('#sch').focus(function () {
    $(this).css('border-color','#949494');
});
$('#sch').blur(function () {
    $(this).css('border-color','#dddddd');
});
$('#sch').hover(function () {
    $(this).css('border-color','#949494');
},function () {
    $(this).css('border-color','#dddddd');
});
$(window).resize(function () {
    if($(this).width()>1000) $('#nav').hide();
});
$('#sch').click(function () {
    $('#nav>a,#nav>ul').animate({'height':'0','margin-top':'0'},350);
    $('#nav>span').show();
    $('#sch').css('background','#f6f6f6');
});
$('#nav>span').click(function () {
    $('#nav>a').animate({'height':'130px'},350);
    $('#nav>ul').animate({'height':'357px','margin-top':'10px'},350);
    $('#nav>span').hide();
    $('#sch').css('background','none');
});
$('#search').click(function () {
    $('#searchDiv').show();
});
$('#form>span').hover(function () {
    $('#form>span>img').attr('src','images/nav_search_close2.png');
},function () {
    $('#form>span>img').attr('src','images/nav_search_close1.png');
});
$('#form>span').click(function () {
    $('#searchDiv').hide();
});