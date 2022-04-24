<!DOCTYPE HTML>
<?php include './layout/head.php'; ?>
<html lang="ja">
    <body>
        <?php include './layout/header.php'; ?>
        <?php include './layout/button/reserve_button.php'; ?>
        <div class="parallax-bg" id="top" ><img src="./img/logo/top_logo.png" class="top-logo" ></div>
        <div class="parallax-bg" id="greeting" >
            <div class='parallax-bg-text-area' >
                <div >

                    <p class='greeting-wrapper' >ご挨拶</p>

                    <p class='greeting-text' >
                        東京の「粋」を体現する六本木、麻布十番<br>
                        その喧騒からすこし離れた、東麻布の贅沢な「静けさ」<br>
                        ここでしか味わえない、ここだけの「粋」があります
                    </p>
                    <p class='greeting-text' >
                        小上がりを上がれば、吉野檜の貴重な一枚板で作られた特別なカウンター席<br>
                        にじり口をくぐるとどこか茶室をイメージさせる落ち着いた個室<br>
                        上質な自然材によって生み出される、和とモダンが絶妙に調和する<br>
                        温かな時間と空間でお客様をお出迎えいたします
                    </p>
                    <p class='greeting-text' >
                        こだわりの旬の食材をふんだんに使い<br>
                        シンプルかつ新鮮な素材の旨味を引き出した、おいしいお料理と旨いお酒で<br>
                        お客様との一期一会を大切におもてなしいたします
                    </p>
                    <p class='greeting-text' >東麻布 割烹 鯔背　店主</p>

                </div>
            </div>
        </div>
        <?php include './layout/commitment.php'; ?>
        <?php include './layout/notice.php'; ?>
        <?php include './layout/access.php'; ?>
        <div class='move-arrow-area sp-hidden'  id='move-arrow-area' >
            <div class='move-arrow' >
            </div>
        </div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.BgSwitcher/0.4.3/jquery.bgswitcher.min.js" integrity="sha512-cwDh42ooq48+o2kkbsn72Kwd9/Ghc34d48DFlNfOCRFJ1dM6EeIFs9d7PIBa4SSv6enwQAYmxsLZGgKOV0yE1A==" crossorigin="anonymous"></script>
<script src="./js/jquery.bgswitcher.js"></script>
<style>


</style>

<script>
    jQuery(function($) {
        $('.parallax-bg').bgSwitcher({
            images: ['./img/photo/top_001.jpg','./img/photo/top_002.jpg','./img/photo/top_003.jpg','./img/photo/top_004_KARI.jpg','./img/photo/top_005.jpg','./img/photo/top_006.jpg'],
            interval: 5000,
            loop: true,
            effect: "fade",
            duration: 2000,
            easing: "swing"
        });
    });
</script>



    </body>
</html>

<script src="../js/main.js?<?= date('YmdHis')?>"></script>
