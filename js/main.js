
// メニュー
$('#hamburger').on('click', function() {
    $("#menu-mask").show(300);
    $("#menu-bar").addClass("on");
});

$('#menu-mask').on('click', function() {
    $("#menu-mask").hide(300);
    $("#menu-bar").removeClass("on");
});



// スクロール
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
    }

    window.scrollTo({
        top: targetY,
        behavior: 'smooth',
    });
});


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



//
// $(function(){
//     $(window).on('load scroll',function (){
//         $('.animation').each(function(){
//             //ターゲットの位置を取得
//             var target = $(this).offset().top;
//             //スクロール量を取得
//             var scroll = $(window).scrollTop();
//             //ウィンドウの高さを取得
//             var height = $(window).height();
//             //ターゲットまでスクロールするとフェードインする
//             if (scroll > target - height){
//                 //クラスを付与
//                 $(this).addClass('active');
//                 // TODO 2秒後にテキストをじわっと
//                 // $(this).children('img')
//             }
//         });
//     });
// });


