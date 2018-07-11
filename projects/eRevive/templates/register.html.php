<div class="content_wrapper flex_row ">
    <div class="content_wrapper_left">
        <img class="content_wrapper_left__Img" src="./images/avatar.jpg">
    </div>
    <div class="content_wrapper_right flex_column spaceBetween noWrap">
        <div class="flex_column spaceBetween noWrap">

            <?php
            if (!empty($errors)) :
                ?>
                <div class="errors">
                    <p>Your account could not be created,
                        please check the following:</p>
                    <ul> <?php
                        foreach ($errors as $error) :
                            ?>
                            <li><?= $error ?></li>
                        <?php
                        endforeach; ?>
                    </ul>
                </div>
            <?php
            endif;
            ?>


        </div>
        <form class="form_login flex_column spaceBetween noWrap" action="" method="post">
            <p class="highlight center">please do not use your real email and password! </p>
            <p class="highlight center">thanks</p>
            <fieldset class="form_login_input_wrap flex_column">
                <input value="<?= $login['user_id']?>" type="hidden" name="login[user_id]">

                <label class="">First Name
                    <input value="<?= $login['user_firstName'] ?? '' ?>" class="input_std" type="text"
                           name="login[user_firstName]" placeholder="first name"></label>
                <label class="">Last Name
                    <input value="<?= $login['user_lastName'] ?? '' ?>" class="input_std" type="text"
                           name="login[user_lastName]" placeholder="last name"></label>
                <label class="">Location
                    <input value="<?= $login['user_location'] ?? '' ?>" class="input_std" type="text"
                           name="login[user_location]" placeholder="city"></label>
                <label class="">email
                    <input value="<?= $login['user_email'] ?? '' ?>" class="input_std" type="text"
                           name="login[user_email]" placeholder="email"></label>

                <p class="highlight">Password must have more than 6 characters and contain 1
                    number</p>
                <label class="">Password
                    <input class="input_std" type="password" name="login[user_password]" placeholder="Password"
                    ></label>

            </fieldset>
            <input type="submit" class="btn_page_tile btn_text" name="submit" value="register">

        </form>

    </div>
</div>