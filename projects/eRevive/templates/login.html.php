<div class="content_wrapper flex_row ">

    <!--    content wrapper left-->
    <div class="content_wrapper_left">
<!--        <img class="prod_page_img" src="../images/avatar.jpg">-->
        <i class="title fa fa-user-circle fa-5x"></i>


    </div>

<!--    content wrapper right-->
    <div class="content_wrapper_right flex_column spaceBetween">

        <form class="form_login flex_column spaceBetween noWrap" action="" method="post">

            <p class=" center">If you do not have an account please create an account</p>
            <a href="index.php?action=register" class="center highlight">click here to create account</a>

            <?php
            if (!empty($errors)) :
                ?>
                <div class="errors">
                    <p>Your were not logged in because:</p>
                    <ul> <?php
                        foreach ($errors as $error) :
                            ?>
                            <h2><?= $error ?></h2>
                        <?php
                        endforeach; ?>
                        <p>please try again</p>
                    </div>
            <?php
            endif;
            ?>
            <fieldset class="flex_row">
                <h1 class="title center">Login</h1>

                <input class="input_std" type="text" name="user_email" placeholder="email"required>

                <input class="input_std" type="password" name="user_password" placeholder="password"
                       required>
            <p class="center">Password must be more than 6 characters<br> and contain 1
                number</p></fieldset>
            <input type="submit" class="btn_page_tile btn_text" name="submit" value="login">
        </form>

    </div>
</div>
