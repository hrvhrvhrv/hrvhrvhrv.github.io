<header>
    <div class="fixed_left"><h1 class="logo">eRevive</h1></div>

    <div class="splash_row flex_row">
        <div class="splash flex_row spaceBetween">
            <div>
            <h1 class="title"><?= $headLine ?></h1>
            <h4 class="subTitle"><?= $subHeadLine ?></h4>
            </div>
            <div class="flex_row ">
                <div class="icon"><a href="javascript:history.back()" class=" flex_column"><i class="fa fa-arrow-left " aria-hidden="true"></i><p>back</p></a></div>

                <div class="icon"><a href="index.php?action=admin" class=" flex_column"><i class="fa fa-cog " aria-hidden="true"></i><p>admin</p></a></div>
                <div class="icon"><a href="index.php?action=userPage" class=" flex_column"><i class="fa fa-user " aria-hidden="true"></i><p>profile</p></a></div>
            </div>
        </div>
        <div class="splash_little " ">

        <form name="searchBox" class="flex-row spaceAround" action="" method="post">
        <div class="flex_row">
            <input type="text" class="searchBox" name="search" placeholder="search eRevive ">
            <input type="submit" class="btn btn_submit" value="Search">

        </div>
                    </form>








        </div>

    </div>

</header>