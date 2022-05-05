// $(document).ready( function(){
//     // 看板画像を２秒表示させる
//     $('#kanban-mask').fadeIn(100);
//     setTimeout(function() {
//         $('#kanban-mask').fadeOut(500);
//     }, 2000);
// });
// $('#kanban-close').on('click', function() {
//     $('#kanban-mask').fadeOut(500);
// });



// メニュー
$('#hamburger').on('click', function() {
    $("#menu-mask").show(300);
    $("#menu-bar").addClass("on");
});
$('#menu-mask').on('click', function() {
    $("#menu-mask").hide(300);
    $("#menu-bar").removeClass("on");
});

// TOP画像の切り替え
jQuery(function($) {
    $('.parallax-bg').bgSwitcher({
        images: [
            '../img/photo/top_001.png',
            '../img/photo/top_002.png',
            '../img/photo/top_003.png',
            '../img/photo/top_004.png',
            '../img/photo/top_005.png',
            '../img/photo/top_006.png',
            '../img/photo/top_007.png',
            '../img/photo/top_008.png',
            '../img/photo/top_009.png',
            '../img/photo/top_010.png',
            '../img/photo/top_011.png',
            '../img/photo/top_012.png'
        ],
        interval: 2000,
        loop: true,
        effect: "fade",
        duration: 1000,
        easing: "swing"
    });
    $('.parallax-bg-en').bgSwitcher({
        images: [
            '../img/photo/top_001.png',
            '../img/photo/top_002.png',
            '../img/photo/top_003.png',
            '../img/photo/top_004.png',
            '../img/photo/top_005.png',
            '../img/photo/top_006.png',
            '../img/photo/top_007.png',
            '../img/photo/top_008.png',
            '../img/photo/top_009.png',
            '../img/photo/top_010.png',
            '../img/photo/top_011.png',
            '../img/photo/top_012.png'
        ],
        interval: 2000,
        loop: true,
        effect: "fade",
        duration: 1000,
        easing: "swing"
    });
});

// スクロールする時の動作やスピード
$('a[href^=#]').click(function() {
    var speed = 500; // スクロール速度(ミリ秒)
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 30;
    $('html').animate({scrollTop:position}, speed, 'swing');
    $("#menu-mask").hide(300);
    $("#menu-bar").removeClass("on");
    return false;
});

// 矢印をクリックしたときの処理
$('#move-arrow-area').on('click', function() {
    // 現在位置
    var presentLocationX = window.scrollY;
    // 初期
    var targetY = 0
    var headerHeight = 70
    var headerHeightAdjustment = 65

    const greeting = $('#greeting').offset().top;
    const content_1 = $('#content_1').offset().top;
    const content_2 = $('#content_2').offset().top;
    const content_3 = $('#content_3').offset().top;
    const notice = $('#notice').offset().top;
    const access = $('#access').offset().top;

    if( presentLocationX <= greeting - headerHeight){
        targetY = greeting - headerHeightAdjustment
    }else if( presentLocationX <= content_1 - headerHeight ){
        targetY = content_1 - headerHeightAdjustment
    }else if( presentLocationX <= content_2 - headerHeight ){
        targetY = content_2 - headerHeightAdjustment
    }else if( presentLocationX <= content_3 - headerHeight ){
        targetY = content_3 - headerHeightAdjustment
    }else if( presentLocationX <= notice - headerHeight ){
        targetY = notice - headerHeightAdjustment
    }else if( presentLocationX <= access - headerHeight ){
        targetY = access - headerHeightAdjustment
        var backToTop = $("#move-arrow-area").hasClass("back-to-top")
        if(backToTop){
            targetY = 0
        }
    }

    window.scrollTo({
        top: targetY,
        behavior: 'smooth',
    });
});


// こだわりのコンテンツを非表示にしておく
$('.animation').css('visibility','hidden');
$(window).scroll(function(){
    var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
    $('.animation').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 100){
            $(this).addClass("imgFadeIn");
            $(this).children(".commitment-content-wrapper").addClass("imgTextFadeIn");
        }
    });
});

// スクロールしたら
$(window).scroll(function () {
    topWindow = $(window).scrollTop();
    const access = $('#access-area').offset().top - 68;
    if( topWindow >= access  ){
        $("#move-arrow-area").addClass("back-to-top");
    }else{
        $("#move-arrow-area").removeClass("back-to-top");
    }
});

// 画像をポップアップ表示させる
$('.images-pop-up-btn').on('click', function() {
    var src = $(this).parent().children('img').attr('src')
    $('#pop-up-img').children('img').attr('src', src);
    $('#pop-up-img-mask').fadeIn(250);
});
$('#pop-up-img-close').on('click', function() {
    $('#pop-up-img-mask').fadeOut(250);
});
