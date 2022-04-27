
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
        images: ['./img/photo/top_001.png','./img/photo/top_002.png','./img/photo/top_003.png','./img/photo/top_004.png','./img/photo/top_005.png','./img/photo/top_006.png'],
        interval: 5000,
        loop: true,
        effect: "fade",
        duration: 2000,
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
    const access = $('#access').offset().top - 68;
    if( topWindow >= access  ){
            $("#move-arrow-area").addClass("back-to-top");
    }else{
        $("#move-arrow-area").removeClass("back-to-top");
    }
});










// const img_list = ["img-list-001", "img-list-002"];
// let count = -1;
// picChange();
// function picChange() {
//     count++;
//     // カウントが最大になれば初期値に戻す
//     if (count == img_list.length) count = 0;

//     img_list.forEach(function(elem, index) {
//         if(index === count){
//             $("#" + img_list[index]).animate({ opacity: 1 }, { duration: 1000, easing: 'linear' })
//         }else{
//             $("#" + img_list[index]).animate({ opacity: 0 }, { duration: 1000, easing: 'linear' })
//         }
//     });

//     //5秒ごとに実行
//     setTimeout("picChange()", 5000);
// }

// $(function() {
//     var i = 1;
//     setInterval(function() {
//         if(i > 3) i = 1;
//         $(".img-list").css("background","url('./img/photo/top_00"+i+".png')");
//         i++;
//     }, 2000);
// });



// var speed = 1000; // フェードイン・フェードアウトの処理時間（1000で1秒）
// var times = 5000; // 画像切り替えの間隔（1000で1秒）

// var bgimages = [
//     './img/photo/top_001.png',
//     './img/photo/top_002.png',
//     './img/photo/top_003.png',
//     './img/photo/top_004.png',
//     './img/photo/top_005.png',
//     './img/photo/top_006.png' // 最後に,をつけない
// ];
// var position = ['-150px','-100px', '0'];
// $(function(){
//     // 現在の背景画像番号格納する変数
//     var thisnum = 0;
//     // 定期的に実行
//     setInterval(function(){
//         // 背景をフェードアウト
//         $(".main-header").fadeOut(speed,function(){
//             // 背景画像番号変更
//             thisnum = thisnum === bgimages.length - 1 ? 0 : thisnum + 1;
//             // 背景画像を変更しフェードイン
//             $(this).css({
//                 "background-image":"url("+bgimages[thisnum]+")"

//             })
//             .fadeIn(speed);
//         });

//     }, times);
// });






// 画像をポップアップ表示させる
$('.images-pop-up-btn').on('click', function() {
    var src = $(this).parent().children('img').attr('src')
    console.log(src)
});
