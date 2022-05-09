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
                    <li><a href='#top'>Home</a></li>
                    <li><a href='#greeting'>Welcome to Inase</a></li>
                    <li><a href='#content_1'>Inase’s promise</a></li>
                    <li><a href='#notice'>News</a></li>
                    <li><a href='#access-area'>Restaurant details</a></li>
                    <li><a href='#access'>Reservations</a></li>
                    <li><a href='../'>Japanese</a></li>
                </ul>
            </div>
        <!-- </div> -->
        <div class='hamburger' id='hamburger' ></div>
        Higashi-Azabu Kappo Inase

        <div class='sns-area flex' >
            <?php foreach($snsList as $sns){ ?>
                <a href='<?= $sns['url'] ?>' target="_blank" class='sns-contents flex' >
                    <span class="<?= $sns['name'] ?>" font-awesome="<?= $sns['name'] ?>" ></span>
                    <span class="sp-hidden" ><?= $sns['name'] ?></span>
                </a>
            <?php }?>
            <a href="../" class="sns-contents flex language-change-btn" >Japanese</a>
        </div>
    </div>

</header>


