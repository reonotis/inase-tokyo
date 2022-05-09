<!DOCTYPE HTML>
<?php include './layout/head.php'; ?>
<html lang="ja">
    <body>
        <?php include './layout/header.php'; ?>
        <?php include './layout/button/reserve_button.php'; ?>
        <div class="top-contents-area" id="top" >
            <div class="parallax-bg-en" >
                <div class="top-logo-box" >
                    <img src="../img/logo/top_logo.png" class="top-logo" >
                </div>
            </div>
            <div class="parallax-bg-en" >
                <div class='parallax-bg-text-area' id="greeting"  >
                    <!-- <p class='greeting-wrapper' >Welcome to Inase</p> -->
                    <p class='greeting-text' >
                        Roppongi’s Azabu-juban epitomizes Tokyo chic.<br>
                        Nestled in the serenity of Higashi-Azabu, it's just a stone's throw from the urban bustle.<br>
                        An area with a chic all its own.
                    </p>
                    <p class='greeting-text' >
                        Step into the Japanese-style dining room, and settle in front of a counter made of precious solid Yoshino cypress.<br>
                        Pass through a low door into a private space evoking images of a tranquil Japanese tea room.<br>
                        High-quality, natural materials create an exquisite harmony of traditional and modern Japanese.<br>
                        Welcome to a warm experience in a friendly space.
                    </p>
                    <!-- <p class='greeting-text' >
                        Using only the choicest seasonal ingredients.<br>
                        Prepared so as to fully bring out their simplicity and freshness, and accompanied by delicious drinks.<br>
                        We offer hospitality that fully captures the here and now.
                    </p>
                    <p class='greeting-text last' >Owner, Higashi-Azabu Kappo Inase</p> -->
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
        <div class="" id="pop-up-img-mask" style="overflow: hidden; display: none;" >
            <div class="" id="pop-up-img" >
                <div class="" id="pop-up-img-close" >×</div>
                <img src="./img/photo/lunch_01.png" >
            </div>
        </div>
        <script src="../js/main.js?<?= date('YmdHis')?>"></script>
    </body>
</html>
