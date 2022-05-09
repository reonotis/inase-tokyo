<?php
    $snsList = [[
            'name' => 'Facebook',
            'url' => 'https://www.facebook.com/inase.kappou/',
        ],[
            'name' => 'Instagram',
            'url' => 'https://instagram.com/inase_kappo?igshid=YmMyMTA2M2Y=',
    ]];
?>

<header>
    <div class='flex' style='position:relative; width: 100%; align-items: center;' >
        <!-- <div class='side-menu' id='side-menu' style='display:none;' > -->
            <div class='menu-mask' id='menu-mask' style='display:none;'  ></div>
            <div class='menu-bar' id='menu-bar' >
                <ul class="side-menu">
                    <li><a href='#top'>TOP</a></li>
                    <li><a href='#greeting'>ご挨拶</a></li>
                    <li><a href='#content_1'>こだわり</a></li>
                    <li><a href='#notice'>お知らせ</a></li>
                    <li><a href='#access-area'>お店のご案内</a></li>
                    <li><a href='#access'>ご予約</a></li>
                    <li><a href='/en'>English</a></li>
                </ul>
            </div>
        <!-- </div> -->
        <div class='hamburger' id='hamburger' ></div>
        東麻布 割烹 鯔背 -INASE-

        <div class='sns-area flex' >
            <?php foreach($snsList as $sns){ ?>
                <a href='<?= $sns['url'] ?>' target="_blank" class='sns-contents flex' >
                    <span class="<?= $sns['name'] ?>" font-awesome="<?= $sns['name'] ?>" ></span>
                    <span class="sp-hidden" ><?= $sns['name'] ?></span>
                </a>
            <?php }?>
            <a href="/en" class="sns-contents flex language-change-btn" >English</a>
        </div>
    </div>

</header>


