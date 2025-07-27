<!DOCTYPE HTML>
<?php include './layout/head.php'; ?>
<html lang="ja">
    <body>
        <div class="background-black" >
            <?php include './layout/header.php'; ?>
            <div class="top-contents-area" id="top">
                <iframe src="./file/closed_notice.pdf">
                </iframe>
            </div>
        </div>
        <script src="./js/main.js?<?= date('YmdHis')?>"></script>
    </body>
</html>
