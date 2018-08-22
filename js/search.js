/*
* @Author: thain
* @Date:   2018-06-25 23:42:52
* @Last Modified by:   thain
* @Last Modified time: 2018-06-29 22:42:01
*/
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
//点击X关闭
$('.del').click(function (event) {
    $('#addr').css({
        'background': '',
        'border': '1px solid transparent',
    });
    $('.seleaddr').hide();
    $('.white-bar').hide();
    return false;
});
//点其他地方关闭
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



// 筛选栏
// 点击更多按钮显示更多内容
var b=1;
$('button.extend-list').click(function(event) {
    for(var i=0;i<$('.filter-section-list').length;i++){
        if ($('.filter-section-list').eq(i).hasClass('list-scroolbar')) {
            if($(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').hasClass('list-scroolbar')){
                b=0;
            }else{
                b=1;
            }
        }
    }
	if(b%2==1){
        $('.filter-section-list').removeClass('list-extend-brand list-extend-common list-scroolbar');
        $('.filter-section-list').children('ul').children('li').children('a').attr('class','');
        $('.filter-command').hide();
        $('.filter-section-list').scrollTop(0);
        $('.filter-operation').show();
        $('span.filter-button-txt').html('更多'); 

        $('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-down');

        if($(this).parent('.filter-operation').siblings('h3').html() == '品牌：'){
            $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').toggleClass('list-extend-brand list-scroolbar');
        }else{
            $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').toggleClass('list-extend-common list-scroolbar');
        }
		$(this).children('span.filter-button-txt').html('收起');    //展开按钮文字变为收起
        $(this).children('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-right');
        // console.log('展开了');

	}else{
		$(this).children('span.filter-button-txt').html('更多');     //收起按钮文字变为更多
        $(this).children('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-down');
        $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').scrollTop(0);
        $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').removeClass('list-extend-brand list-extend-common list-scroolbar');
         console.log('收起了');
	}
	b++;
});
//点击展开多选
$('button.select-more').click(function(event) {
    // 先清除其他选项
    $('.filter-section-list').removeClass('list-extend-brand list-extend-common list-scroolbar');
    $('.filter-section-list').children('ul').children('li').children('a').attr('class','');
    $('.extend-list').children('span.filter-button-txt').html('更多');
    $('.extend-list').children('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-down');
    $('.filter-section-list').scrollTop(0);
    $('.filter-command').hide();
    $('.filter-operation').show();
    if($(this).parent('.filter-operation').siblings('h3').html() == '品牌：'){
	   $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').addClass('list-extend-brand list-scroolbar');
    }else{
        $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').addClass('list-extend-common list-scroolbar');
        $(this).parent('.filter-operation').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').children('a').addClass('a-multiple');
       
    }
	$(this).parent('.filter-operation').siblings('.filter-command').show();
	//$(this).parent('.filter-operation').siblings('.filter-command').children('button.submit').removeAttr('disabled');  //去除不可按属性
	$(this).parent('.filter-operation').hide();
    b=1;
});
//取消多选
$('button.cannel').click(function(event) {
	$(this).parent('.filter-command').hide();
	$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').removeClass('list-extend-brand list-extend-common list-scroolbar');
    $(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').children('a').attr('class','');
	$(this).parent('.filter-command').siblings('.filter-operation').children('.extend-list').children('span.filter-button-txt').html('更多');
    $(this).parent('.filter-command').siblings('.filter-operation').children('.extend-list').children('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-down');
	b=1;
	$(this).parent('.filter-command').siblings('.filter-operation').show();
	$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').children('a').removeClass('selected');
	$(this).siblings('button.submit').removeClass('submit-clickable');
	$(this).siblings('button.submit').attr('disabled','disabled');
	$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').scrollTop(0);  //取消多选滚动条回到初始位置
});

// 点击筛选条件里的删除
function del_sort(){
	$('span.del-filter-sort').click(function(event) {
		// console.log($(this).parent('.search-filter').parent('li').hasClass('brand-sort'))
        $('.filter-section-list').scrollTop(0);
        $('.filter-section-list').removeClass('list-extend-common list-extend-brand list-scroolbar');
        $('.extend-list span.filter-button-txt').html('更多');
        $('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-down');
        $('.filter-section-list').children('ul').children('li').children('a').attr('class','');
        $('.filter-command').hide();
        $('.filter-operation').show()
        $('.fliter-section-extend').css('display','none');
        $('.extend-filter-section p').html('更多选项');
        $('.extend-filter-section span').removeClass('icon-right');
        e=1;
        // $('.filter-section').show();
		if($(this).parent('.search-filter').parent('li').hasClass('brand-sort')){
			$('.filter-brand').show();
		}
        if($(this).parent('.search-filter').parent('li').hasClass('shape-sort')){
            $('.filter-shape').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('skirt-type-sort')){
            $('.filter-skirt-type').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('technology-sort')){
            $('.filter-technology').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('kuchang-sort')){
            $('.filter-kuchang').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('fashion-sort')){
            $('.filter-fashion').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('yichang-sort')){
            $('.filter-yichang').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('style-sort')){
            $('.filter-style').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('season-sort')){
            $('.filter-season').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('qunchang-sort')){
            $('.filter-qunchang').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('material-sort')){
            $('.filter-material').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('filler-sort')){
            $('.filter-filler').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('color-sort')){
            $('.filter-color').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('size-sort')){
            $('.filter-size').show();
        }
        if($(this).parent('.search-filter').parent('li').hasClass('sex-sort')){
            $('.filter-sex').show();
        }


        $(this).parent('.search-filter').parent('li').remove();
        b=1;
	});
}
// 点击查看结果删除全部筛选条件
$('li.all-search-result').click(function(event) {
    var len=$('.filter-result li').length;
    $('.filter-result li').filter(function(index) {
        return index!=len-1 && index!=0;   //利用filter动态删除
    }).remove();
    $('.filter-section-list').removeClass('list-extend-common list-extend-brand list-scroolbar');
    $('.extend-list span.filter-button-txt').html('更多');
    $('span.button-icon-extend').attr('class','button-icon-extend iconfont icon-down');
    $('.filter-section-list').children('ul').children('li').children('a').attr('class','');
    $('.filter-command').hide();
    $('.filter-operation').show()
    $('.filter-section').show();
    $('.filter-section-list').scrollTop(0);
    $('.fliter-section-extend').hide();
    $('.extend-filter-section p').html('更多选项');
    $('.extend-filter-section span').removeClass('icon-right');
    e=1
    b=1;
});
// 母婴、女装筛选条件下拉可选
function dropdown(){
    $('.search-filter-type').hover(function() {
        $(this).children('.type-dropdown').show();
    }, function() {
        $(this).children('.type-dropdown').hide();
    });
}
dropdown();
// 点击下拉筛选条件
function dropdownclick(){
    //解决新增的元素节点无法触发事件问题
    $('.type-dropdown p').on('click', 'a', function(event) {    
        var txt1=$(this).html();
        var txt2=$(this).parent('p').siblings('p').html();
        $('.search-filter-sort').children('a').html(txt1+'<span class="type-sort-arrow iconfont icon-down"></span>');
        $(this).parent('p').siblings('p').html('<a href="##" title="">'+txt2+'</a>');
        $(this).parent('p').html(txt1);        
        console.log('txt1:'+txt1);
        console.log('txt2:'+txt2);
    });
}
dropdownclick();
// 单选点击分类进行筛选
var cont
var conts='';
var allconts='';
var createli;
var title;
$('.filter-section-list li').click(function(event) {
	createli=$('<li></li>');
	title = $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('h3').html();

    // console.log('title:'+title);
	if(title=='品牌：'){   //判断是否为品牌选项
		createli.attr('class','brand-sort');  //为增加的li添加类
	
        // console.log($(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').is(":hidden"));
    	//判断是否单选
    	if($(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').is(":hidden")){ 
    		cont = $(this).children('a').children('.list-img-hover-txt').html();
    		createli.html('<div class="search-filter"><div class="search-filter-sort">'+title+'<span class="filter-sort-content">'+cont+'</span></div><span class="del-filter-sort iconfont icon-close"></span></div><span class="filter-result-arrow" class="">></span>');
    		$('.filter-result li.all-search-result').after(createli);
    		$(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').parent('.filter-brand').hide();
    	
    	}else{
    		if($(this).children('a').hasClass('selected')){
    			$(this).children('a').removeClass('selected');
    		}else{
    			$(this).children('a').addClass('selected');
    		}
    		if($(this).parent('ul').parent('.filter-section-list').children('ul').children('li').children('a').hasClass('selected')){
    			$(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').addClass('submit-clickable'); //让确认按钮可点击
    			$(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').removeAttr('disabled');
    		}else{
    			$(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').removeClass('submit-clickable');//去掉确认按钮可点击
    			$(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').attr('disabled','disabled');
    		}
    	}
    }else{
        console.log('title:'+title);
        if(title=='分类'){
            createli.attr('class','type-sort');  
            console.log('多选隐藏：'+$(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').is(":hidden"));
            if($(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').is(":hidden")){
                cont=$(this).children('a').html();
                if(cont=='女装'){
                    createli.html('<div class="search-filter search-filter-type"><div class="search-filter-sort"><a class="type-link" href="##">'+cont+'<span class="type-sort-arrow iconfont icon-down"></span></a></div><div class="type-dropdown"><p>'+cont+'</p><p><a href="##" title="">母婴</a></p></div></div><span class="filter-result-arrow" class="">></span>');
                }else{
                    createli.html('<div class="search-filter search-filter-type"><div class="search-filter-sort"><a class="type-link" href="##">'+cont+'<span class="type-sort-arrow iconfont icon-down"></span></a></div><div class="type-dropdown"><p><a href="##" title="">女装</a></p><p>'+cont+'</p></div></div><span class="filter-result-arrow" class="">></span>');
                }
                //createli.html('<div class="search-filter"><div class="search-filter-sort">'+'<span class="filter-sort-content">'+cont+'</span></div></div><span class="filter-result-arrow" class="">></span>');
                $('.filter-result li.all-search-result').after(createli);
                $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').parent('.filter-section').hide();
            }
            dropdown();
            dropdownclick();
        }else{
            if(title=='版型'){
                createli.attr('class','shape-sort');  //识别标题
            }
            if(title=='裙型'){
                createli.attr('class','skirt-type-sort');  //识别标题
            }
            if(title=='工艺'){
                createli.attr('class','technology-sort');  //识别标题
            }
            if(title=='裤长'){
                createli.attr('class','kuchang-sort');  //识别标题
            }
            if(title=='流行元素'){
                createli.attr('class','fashion-sort');  //识别标题
            }
            if(title=='衣长'){
                createli.attr('class','yichang-sort');  //识别标题
            }
            if(title=='风格'){
                createli.attr('class','style-sort');  //识别标题
            }
            if(title=='适用季节'){
                createli.attr('class','season-sort');  //识别标题
            }
            if(title=='裙长'){
                createli.attr('class','qunchang-sort');  //识别标题
            }
            if(title=='裙长'){
                createli.attr('class','material-sort');  //识别标题
            }
            if(title=='填充物'){
                createli.attr('class','filler-sort');  //识别标题
            }
            if(title=='颜色'){
                createli.attr('class','filler-color');  //识别标题
            }
            if(title=='尺码'){
                createli.attr('class','filler-size');  //识别标题
            }
            if(title=='适用性别'){
                createli.attr('class','filler-sex');  //识别标题
            }


            if($(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').is(":hidden")){  //判断单选
                cont=$(this).children('a').html();
                console.log(cont);
                if(title!='品牌：'){
                    title=title+'：';
                }
                createli.html('<div class="search-filter"><div class="search-filter-sort">'+title+'<span class="filter-sort-content">'+cont+'</span></div><span class="del-filter-sort iconfont icon-close"></span></div><span class="filter-result-arrow" class="">></span>');
                $('.filter-result li.search-key').before(createli);
                $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').parent('.filter-section').hide();
            }else{
                if($(this).children('a').hasClass('a-multiple')){
                    $(this).children('a').removeClass('a-multiple');
                    $(this).children('a').addClass('a-multiple-select');
                }else{
                    $(this).children('a').removeClass('a-multiple-select');
                    $(this).children('a').addClass('a-multiple');
                }
                if($(this).parent('ul').parent('.filter-section-list').children('ul').children('li').children('a').hasClass('a-multiple-select')){
                    $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').addClass('submit-clickable'); //让确认按钮可点击
                    $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').removeAttr('disabled');
                }else{
                    $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').removeClass('submit-clickable');//去掉确认按钮可点击
                    $(this).parent('ul').parent('.filter-section-list').parent('.filter-section-content').siblings('.filter-command').children('button.submit').attr('disabled','disabled');
                }
            }
        }
    }
    change();
    console.log($('.filter-section').length)

console.log($('.fliter-section-extend').length)
	del_sort(); //先遍历一次li的删除的功能，否则删除新增的无效
});
// 确认多选
var j=0;
$('button.submit').click(function(event) {
	var l=$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').length;
    if(title=='品牌：'){
        for(var i=0;i<l;i++){
            // if($(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').hasClass('selected')){
            if($(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').hasClass('selected')){
                if(conts == ''){  //判断选择了几个,多选加、号
                    conts =$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').children('.list-img-hover-txt').html();
                }else{
                    conts =conts+'、'+$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').children('.list-img-hover-txt').html();
                }
            }
        }
    }else{
        for(var i=0;i<l;i++){
            if($(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').hasClass('a-multiple-select')){
                if(conts == ''){  //判断选择了几个,多选加、号
                    conts =$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').html();
                }else{
                    conts =conts+'、'+$(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').children('ul').children('li').eq(i).children('a').html();
                }
            }
        }
    }
    if(title!='品牌：'){
        title=title+'：';
    }
    console.log(title);
        console.log(conts)
	createli.html('<div class="search-filter"><div class="search-filter-sort">'+title+'<span class="filter-sort-content">'+conts+'</span></div><span class="del-filter-sort iconfont icon-close"></span></div><span class="filter-result-arrow" class="">></span>');
    if(title=='品牌：'){
        $(this).parent('.filter-command').parent('.filter-section').parent('.filter-box').siblings('.filter-result').children('ul').children('li.all-search-result').after(createli);    //品牌，分类放前面
    }else{
        $(this).parent('.filter-command').parent('.filter-section').parent('.filter-box').siblings('.filter-result').children('ul').children('li.search-key').before(createli);  //其他放后面
    }
    del_sort(); //先遍历一次删除的功能，否则删除新增的无效
	$('.filter-section-list li').children('a').attr('class','');  
	conts='';
    $(this).attr('disabled','disabled');
    $(this).removeClass('submit-clickable');
    $(this).parent('.filter-command').parent('.filter-section').hide();
    $(this).parent('.filter-command').hide();
    $(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').removeClass('list-extend-brand list-extend-common list-scroolbar');
    $(this).parent('.filter-command').siblings('.filter-section-content').children('.filter-section-list').scrollTop(0);  //取消多选滚动条回到初始位置
    $(this).parent('.filter-command').siblings('.filter-operation').show();
    change();
    
});



// 结果排序栏
$('.input-price input').focus(function(event) {
    $('.input-price').addClass('input-price-focus');
    $('a.input-price-btn').css({
        opacity: '1',
        cursor: 'pointer'
    });
});
$('.input-price input').blur(function(event) {
    $('.input-price').removeClass('input-price-focus');
    $('a.input-price-btn').css({
        opacity: '0',
        cursor: 'default'
    });
});


//点击更多选项按钮
var e=1
$('.extend-filter-section').click(function(event) {
    if(e%2==1){
        $('.fliter-section-extend').css('display','block');
        // $('.filter-box').css('max-height','393px')
        $('.extend-filter-section p').html('点击收起');
    }else{
        $('.fliter-section-extend').css('display','none');
        // $('.filter-box').css('min-height','auto')
        $('.extend-filter-section p').html('更多选项');
    }
    e++;
    $('.extend-filter-section span').toggleClass('icon-right');
});

var n=5
function change(){
    // if($('.filter-section').length - $('.fliter-section-extend').length <5 ){
    //     $('.filter-section').eq(5).removeClass('fliter-section-extend');
    // }
    var c=0;
    if($('.fliter-section-extend').is(':hidden')){
        for( var i=0; i<$('.filter-section').length;i++){
        if($('.filter-section').eq(i).is(":hidden")){
            c++;
        }
    }
    console.log('c'+c)
    
    if(c>$('.fliter-section-extend').length){
        $('.filter-section').eq(n).removeClass('fliter-section-extend');
        console.log($('.filter-section').eq(n).children('h3').html())
        n++;
    }
    }
    
}
change();
console.log($('.filter-section').length)

console.log($('.fliter-section-extend').length)