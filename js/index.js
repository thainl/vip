//点击选地址
$('#addr').click(function (event) {
    $(this).css({
        'background': '#fff',
        'border': '1px solid #cdcdcd',
        'border-bottom ': '1px solid #fff',
    })
    $('.seleaddr').show();
    $('.white-bar').show();
    return false;
});
//点击X关闭选地址
$('.del').click(function (event) {
    $('#addr').css({
        'background': '',
        'border': '1px solid transparent',
    });
    $('.seleaddr').hide();
    $('.white-bar').hide();
    return false;
});
//点其他地方关闭选地址
$(document).click(function (event) {
    var flag=$('.seleaddr').is(":hidden"); //判断div是否隐藏
    // console.log(flag)
    if (!flag) {
        $('#addr').css({
            'background': '',
            'border': '1px solid transparent',
        });
        $('.seleaddr').hide();
        $('.white-bar').hide();
        }
});

//选地址里的tab栏
$('ul.tab-opin li').click(function(event) {
    $('ul.tab-opin li').attr('class','');
    $(this).attr('class','curr');
    // console.log($(this).index());
    // if($(this).index())
    $('.tab i').eq($(this).index()).css('display', 'block');
    $('.tab i').eq($(this).index()).siblings('i').css('display', 'none');
    $('.choice div').attr('class','');
    $('.choice div').eq($(this).index()).attr('class','curr');
});
//选省份
$('.province-ul a').click(function(event) {
    $('.province-ul a').removeClass('selected');
    $(this).addClass('selected');
    console.log('select address function is not work yet');
});
//选城市
$('.cities-ul a').click(function(event) {
    $('.cities-ul a').removeClass('selected');
    $(this).addClass('selected');
    console.log('select address function is not work yet');
});


//鼠标经过请登录li
$('li.liuser').hover(function() {
    $('.user-in').addClass('user-hover');
    $('.login').css('display', 'block');
}, function() {
    $('.user-in').removeClass('user-hover');
    $('.login').css('display', 'none');
});

//鼠标经过签到li
$('#menu li.lisign').hover(function() {
    // var tag=$('<b class="arrow-out">◆</b> <b class="arrow">◆</b>')
    // $('.sign').before(tag);
    $('.arrow-out').css('display', 'block');
    $('.arrow').css('display', 'block');
    $('.sign').css('display', 'block');
    $('.arrow-out').stop().animate({bottom: '-5px'},250);
    $('.arrow').stop().animate({bottom: '-6px'},250);
    $('.sign').stop().animate({top: '28px'},250)
 }, function() {
    $('.arrow-out').css('display', 'none');
    $('.arrow').css('display', 'none');
    $('.sign').css('display', 'none');
    $('.arrow-out').stop().animate({bottom: '-15px'},250);
    $('.arrow').stop().animate({bottom: '-17px'},250);
    $('.sign').stop().animate({top: '38px'},250)
 });
//鼠标经过我的特卖li
$('#menu li.lispe').hover(function() {
    $('.spe-in').addClass('spe-hover');
    $('.myspe').css('display', 'block');
}, function() {
    $('.spe-in').removeClass('spe-hover');
    $('.myspe').css('display', 'none');
});

//鼠标经过会员俱乐部li
$('#menu li.livip').hover(function() {
    $('.vip-in').addClass('vip-hover');
    $('.vip').css('display', 'block');
}, function() {
    $('.vip-in').removeClass('vip-hover');
    $('.vip').css('display', 'none');
});

//鼠标经过客户服务li
$('#menu li.liserver').hover(function() {
    $('.server-in').addClass('server-hover');
    $('.server').css('display', 'block');
}, function() {
    $('.server-in').removeClass('server-hover');
    $('.server').css('display', 'none');
});

//鼠标经过手机版li
$('#menu li.limob').hover(function() {
    $('.mob-in').addClass('mob-hover');
    $('.mobile').css('display', 'block');
}, function() {
    $('.mob-in').removeClass('mob-hover');
    $('.mobile').css('display', 'none');
});

//鼠标经过更多li
$('#menu li.limore').hover(function() {
    $('.more-in').addClass('more-hover');
    $('.more').css('display', 'block');
}, function() {
    $('.more-in').removeClass('more-hover');
    $('.more').css('display', 'none');
});

// 鼠标经过每个菜单栏的li时三角形变方向
$('#menu li').hover(function() {
    $(this).children('div').children('em').addClass('em-hover');
}, function() {
    $(this).children('div').children('em').removeClass('em-hover');
});

//top-main鼠标经过购物袋div
$('.shopping-bag').hover(function() {
    $('.wrap-bag').addClass('wrap-bag-hover');
    $('.shopping-bag-detail').show();
}, function() {
    $('.wrap-bag').removeClass('wrap-bag-hover');
    $('.shopping-bag-detail').hide();
});

//鼠标点击搜索输入框
$('.search input').focus(function(event) {
    $('.search').css({
        'border-bottom-left-radius':'0px',
        'border-bottom-right-radius':'0px',
    });
    $('.search-more').show();
    return false;
});

//点其他地方关闭搜索框弹出
$('.search input').blur(function (event) {
    var flag=$('.search-more').is(":hidden"); //判断div是否隐藏
    // console.log(flag)
    if (!flag) {
        $('.search').css({
            'border-bottom-left-radius':'3px',
            'border-bottom-right-radius':'3px',
        });
        $('.search-more').hide();
    }
});

//鼠标经过top-nav更多li
$('.li-nav-more').hover(function() {
    $('em.nav-more').addClass('nav-more-hover');
    $('.top-nav-more-extend').show();
}, function() {
    $('em.nav-more').removeClass('nav-more-hover');
    $('.top-nav-more-extend').hide();
});
//鼠标经过nav更多里的图片
$('.top-nav-more-extend a').hover(function() {
    $(this).children('div').stop().animate({top: '0px'}, 400);
}, function() {
    $(this).children('div').stop().animate({top: '38px'}, 400);
});
//鼠标经过top-nav-right li
$('.top-nav-right').hover(function() {
    $('.nav-right-bar').css('display', 'none');
}, function() {
   $('.nav-right-bar').css('display', 'block');
});

//鼠标经过content商品li
$('.item-list1 li').hover(function() {
    $(this).css('border-color', '#f10180');
    $(this).children('.introduce').children('.buy').children('span').addClass('buynow-hover');
}, function() {
    $(this).css('border-color', '#e0e0e0');
    $(this).children('.introduce').children('.buy').children('span').removeClass('buynow-hover');
});

//鼠标点击商品列表减价导航跳转
$('.ladywear .item-nav li').click(function(event) {
    var a=$('.ladywear').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.beauty .item-nav li').click(function(event) {
    var a=$('.beauty').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.shoesbag .item-nav li').click(function(event) {
    var a=$('.shoesbag').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.sports .item-nav li').click(function(event) {
    var a=$('.sports').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.momchild .item-nav li').click(function(event) {
    var a=$('.momchild').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.manswear .item-nav li').click(function(event) {
    var a=$('.manswear').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.homeappl .item-nav li').click(function(event) {
    var a=$('.homeappl').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.jewelry .item-nav li').click(function(event) {
    var a=$('.jewelry').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.hometextile .item-nav li').click(function(event) {
    var a=$('.hometextile').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.neiyi .item-nav li').click(function(event) {
    var a=$('.neiyi').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.life .item-nav li').click(function(event) {
    var a=$('.life').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.overseas .item-nav li').click(function(event) {
    var a=$('.overseas').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.bigbrand .item-nav li').click(function(event) {
    var a=$('.bigbrand').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});
$('.vipselect .item-nav li').click(function(event) {
    var a=$('.vipselect').children('.item-nav').eq($(this).index()).offset().top;
    console.log('offset().top:'+a);
    $(window).scrollTop(a);
});


//点击右边浮动nav li
$('.nav-right li').eq(0).click(function(event) {
    $(window).scrollTop($('.ladywear').offset().top);
    console.log('offset().top:'+$('.ladywear').offset().top);
});
$('.nav-right li').eq(1).click(function(event) {
    $(window).scrollTop($('.beauty').offset().top);
    console.log('offset().top:'+$('.beauty').offset().top);
});
$('.nav-right li').eq(2).click(function(event) {
    $(window).scrollTop($('.shoesbag').offset().top);
    console.log('offset().top:'+$('.shoesbag').offset().top);
});
$('.nav-right li').eq(3).click(function(event) {
    $(window).scrollTop($('.sports').offset().top);
    console.log('offset().top:'+$('.sports').offset().top);
});
$('.nav-right li').eq(4).click(function(event) {
    $(window).scrollTop($('.momchild').offset().top);
    console.log('offset().top:'+$('.momchild').offset().top);
});
$('.nav-right li').eq(5).click(function(event) {
    $(window).scrollTop($('.manswear').offset().top);
    console.log('offset().top:'+$('.manswear').offset().top);
});
$('.nav-right li').eq(6).click(function(event) {
    $(window).scrollTop($('.homeappl').offset().top);
    console.log('offset().top:'+$('.homeappl').offset().top);
});
$('.nav-right li').eq(7).click(function(event) {
    $(window).scrollTop($('.jewelry').offset().top);
    console.log('offset().top:'+$('.jewelry').offset().top);
});
$('.nav-right li').eq(8).click(function(event) {
    $(window).scrollTop($('.hometextile').offset().top);
    console.log('offset().top:'+$('.hometextile').offset().top);
});
$('.nav-right li').eq(9).click(function(event) {
    $(window).scrollTop($('.neiyi').offset().top);
    console.log('offset().top:'+$('.neiyi').offset().top);
});
$('.nav-right li').eq(10).click(function(event) {
    $(window).scrollTop($('.life').offset().top);
    console.log('offset().top:'+$('.life').offset().top);
});
$('.nav-right li').eq(11).click(function(event) {
    $(window).scrollTop($('.overseas').offset().top);
    console.log('offset().top:'+$('.overseas').offset().top);
});
$('.nav-right li').eq(12).click(function(event) {
    $(window).scrollTop($('.bigbrand').offset().top);
    console.log('offset().top:'+$('.bigbrand').offset().top);
});
$('.nav-right li').eq(13).click(function(event) {
    $(window).scrollTop($('.vipselect').offset().top);
    console.log('offset().top:'+$('.vipselect').offset().top);
});
$('.nav-right li').eq(14).click(function(event) {
    $(window).scrollTop(0);
});

//点击右边浮动导航后变色
$('.nav-right li').click(function(event) {
    if($(this).index()<14){
        $(this).css('color', '#ffff00');
        $(this).siblings('li').css('color', '#fff');
    }else{
        $('.nav-right li').css('color', '#fff');
    }
});

//随着窗口的滚动，右边浮动导航栏跟着动
$(window).scroll(function(event) {
    if($(window).scrollTop()>$('.vipselect').offset().top-100){
        $('.nav-right li').eq(13).css('color', '#ffff00');
        $('.nav-right li').eq(13).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.bigbrand').offset().top-100){
        $('.nav-right li').eq(12).css('color', '#ffff00');
        $('.nav-right li').eq(12).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.overseas').offset().top-100){
        $('.nav-right li').eq(11).css('color', '#ffff00');
        $('.nav-right li').eq(11).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.life').offset().top-100){
        $('.nav-right li').eq(10).css('color', '#ffff00');
        $('.nav-right li').eq(10).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.neiyi').offset().top-100){
        $('.nav-right li').eq(9).css('color', '#ffff00');
        $('.nav-right li').eq(9).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.hometextile').offset().top-100){
        $('.nav-right li').eq(8).css('color', '#ffff00');
        $('.nav-right li').eq(8).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.jewelry').offset().top-100){
        $('.nav-right li').eq(7).css('color', '#ffff00');
        $('.nav-right li').eq(7).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.homeappl').offset().top-100){
        $('.nav-right li').eq(6).css('color', '#ffff00');
        $('.nav-right li').eq(6).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.manswear').offset().top-100){
        $('.nav-right li').eq(5).css('color', '#ffff00');
        $('.nav-right li').eq(5).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.momchild').offset().top-100){
        $('.nav-right li').eq(4).css('color', '#ffff00');
        $('.nav-right li').eq(4).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.sports').offset().top-100){
        $('.nav-right li').eq(3).css('color', '#ffff00');
        $('.nav-right li').eq(3).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.shoesbag').offset().top-100){
        $('.nav-right li').eq(2).css('color', '#ffff00');
        $('.nav-right li').eq(2).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.beauty').offset().top-100){
        $('.nav-right li').eq(1).css('color', '#ffff00');
        $('.nav-right li').eq(1).siblings('li').css('color', '#fff');
    }else if($(window).scrollTop()>$('.ladywear').offset().top-100){
        $('.nav-right li').eq(0).css('color', '#ffff00');
        $('.nav-right li').eq(0).siblings('li').css('color', '#fff');
    }else{
        $('.nav-right li').css('color', '#fff');
    }
});
// 左边618固定nav固定
$(window).scroll(function(event) {
    if($(window).scrollTop()>168){
        $('.nav-left').css({'position':'fixed','top':'0px'});
    }
    else {
        $('.nav-left').css({'position':'absolute','top':'168px'});
    }
});
//返回顶部
$('.nav-left-backtop').click(function(event) {
    $(window).scrollTop(0);
});

// 右边浮动nav固定显示
$(window).scroll(function(event) {
    if($(window).scrollTop()>$('.like618').offset().top){
        // console.log($('.like618').offset().top);
        $('.nav-right').css('display', 'block');
    }
    else{
        $('.nav-right').css('display', 'none');
    }
});



// 右边帐号固定栏
//鼠标经过上方li里的第一个div弹出文字提示
$('.nav-side-main li').children('.side-head-common').hover(function() {
        $(this).children('.side-head-hover').addClass('side-head-hover-show');
}, function() {
        $(this).children('.side-head-hover').removeClass('side-head-hover-show');
});
//鼠标经过底部两个div弹出文字提示
$('.nav-side-bottom').children('div').hover(function() {
    $(this).children('.side-head-hover').addClass('side-head-hover-show');
}, function() {
    $(this).children('.side-head-hover').removeClass('side-head-hover-show');
});
function ifflag(){
    if($('.side-common-content').hasClass('side-common-content-show')){  //如果有其他弹窗弹出，去掉动画
        $('.side-account-content').css('transition', 'none');
        $('.side-common-content').css('transition', 'none');
    }else{
        $('.side-account-content').css('transition', '0.2s linear');
        $('.side-common-content').css('transition', '0.2s linear');
    }
}
//鼠标经过第一个li弹出登陆提示
$('.side-account-head').hover(function() {  //先让第一个li里的第一个head div变色
    $('.side-account-head').addClass('side-account-head-hover');
}, function() {
    $('.side-account-head').removeClass('side-account-head-hover');
});
$('.nav-side-main li').eq(0).hover(function() {
    ifflag();
    $('.side-common-content').removeClass('side-common-content-show');
    $('.side-bag-arrow').hide();
    for(var i=1;i<$('.nav-side-main li').length;i++){  //遍历所有li 
        if(i!=1){               //过滤掉第二个li
            $('.nav-side-main li').eq(i).children('div').eq(0).css('background', 'none'); //让每个li的第一个div子代去掉背景色
        }
    }
    $('.side-account-content').addClass('side-account-content-show');
    return false;
}, function() {
    $('.side-account-content').removeClass('side-account-content-show');
    
});

//鼠标离开通用登陆弹窗
$('.side-common-content').mouseleave(function(event) {
    $(this).removeClass('side-common-content-show');
    $(this).siblings('.side-head-common').css('background', 'none');
    if($('.side-bag').children('.side-common-content').hasClass('side-common-content-show')){
        $('.side-bag-arrow').show();
    }else{
        $('.side-bag-arrow').hide();
    }
});

//鼠标点击第一个以外的li弹出登陆提示
$('.nav-side-main li').click(function(event) {
    ifflag();
    for(var i=1;i<$('.nav-side-main li').length;i++){  //遍历所有li 
        if(i!=1){               //过滤掉第二个li
            $('.nav-side-main li').eq(i).children('div').eq(0).css('background', 'none'); //让每个li的第一个div子代去掉背景色
        }
    }
    console.log($(this).index());
    if($(this).index() !=0){    //过滤掉第一个li
        $(this).children('div').eq(0).css('background', '#df147f');
    }
    $(this).siblings('li').children('.side-common-content').removeClass('side-common-content-show'); 
    $(this).children('.side-common-content').addClass('side-common-content-show');
    if($('.side-bag').children('.side-common-content').hasClass('side-common-content-show')){
        $('.side-bag-arrow').show();
    }else{
        $('.side-bag-arrow').hide();
    }
    if($(this).children('.side-common-content').hasClass('side-common-content-show')){  //判断content div是否弹出
        $(this).children('.side-head-common').hover(function() {   //如果弹出则不显示当前head div的hover滑出
            $(this).children('.side-head-hover').addClass('');
        }, function() {
            $(this).children('.side-head-hover').removeClass('side-head-hover-show');
        });
        // $(this).children('.side-head-common').children('.side-head-hover').removeClass('side-head-hover-show');
    }
    return false;
});

//点击X关闭帐号弹窗
$('.account-close').click(function(event) {
    $('.side-account-content').removeClass('side-account-content-show');
    return false;
});
//点击X关闭其他弹窗
$('.commom-content-close').click(function(event) {
    $('.side-common-content').removeClass('side-common-content-show');
    $(this).parent('.common-login').parent('.side-common-content').siblings('.side-head-common').css('background', 'none'); //去除div的背景
    return false;
});
//点击弹窗以外的地方关闭其他弹窗
$(document).click(function(event) {
    if($('.side-common-content').hasClass('side-common-content-show')){  //判断弹窗是否弹出
        $('.side-common-content').removeClass('side-common-content-show'); //弹出则关闭
        $('.side-common-content').siblings('.side-head-common').css('background', 'none');
        if($('.side-bag').children('.side-common-content').hasClass('side-common-content-show')){
            $('.side-bag-arrow').show();
            }else{
            $('.side-bag-arrow').hide();
        }
    }
});
//点击底部的返回顶部图标
$('.side-backtop').click(function(event) {
        $(window).scrollTop(0);
});
$(window).resize(function(event) {
    if($(window).height()<600){  //当窗口高度小于600隐藏底部两个div
        $('.nav-side-bottom').css('display', 'none');
        $('.side-backtop-inner').css('display', 'none');
    }else{
        $('.nav-side-bottom').css('display', 'block');
        $('.side-backtop-inner').css('display', 'block');
    }
});

//当窗关宽带缩小到一定时
$(window).resize(function(event) {
    if($(document).width()<1070){
        $('.nav-side').css('display', 'none');
    }else{
        $('.nav-side').css('display', 'block');
    }
});
//鼠标经过inner 的购物袋 显示右边账号固定栏
$('.side-bag-inner').mouseenter(function() {
    $('.nav-side').css('display', 'block');
});
//鼠标经过底部 的inner 返回顶部 显示右边账号固定栏
$('.side-backtop-inner').mouseenter(function() {
    $('.nav-side').css('display', 'block');
});
//宽度小于1070 鼠标经过右边账号固定栏 让他固定显示
$('.nav-side').mouseenter(function(event) {
    if($(document).width()<1070){
        clearTimeout(timer);
        $('.nav-side').css('display', 'block');
    }
});
//宽度小于1070 鼠标离开右边账号固定栏 一定时间后隐藏
var timer;
$('.nav-side').mouseleave(function(event) {
    if($(document).width()<1070){
        timer=setTimeout(function(){
            $('.nav-side').css('display', 'none');
        },1500)
        
    }
});



// 倒计时
var starttime= new Date("2019/06/18");
setInterval(function(){
    var nowtime=new Date();
    var time=starttime-nowtime;
    var day = parseInt(time/1000/60 /60 /24);
    var hour = parseInt(time /1000/60/60%24);
    var min = parseInt(time/1000/60%60);
    var sec =parseInt(time/1000%60);
    // if(day<10){
    //   day="0"+day;
    // }
    if(hour<10){
      hour="0"+hour;
    }
    if(min<10){
      min="0"+min;
    }
    if(sec<10){
      sec="0"+sec;
    }
    // console.log(day+"天"+hour+"时"+min+"分"+sec+"秒");
    $('#count-day').html(day);
    $('#count-hour').html(hour);
    $('#count-min').html(min);
    $('#count-sec').html(sec);
},1000);
