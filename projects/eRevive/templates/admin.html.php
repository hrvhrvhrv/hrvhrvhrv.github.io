<div class="content_wrapper flex_row ">

    <!--    content wrapper left-->
    <div class="content_wrapper_left ">
        <div class=" flex_row">
            <a class="flex_column admin_btn" href="index.php?action=adminAllprod"><i class="fa fa-archive fa-4x" aria-hidden="true"></i><?php echo $prodCount ?> current listings</a>
            <a class="flex_column admin_btn" href="index.php?action=adminAllusers"><i class="fa fa-id-card fa-4x" aria-hidden="true"></i><?php echo $userCount ?> registered users</a>
            <a class="flex_column admin_btn" href="index.php?action=productNew"><i class="fa fa-money fa-4x" aria-hidden="true"></i><?php echo $totalValue?> value of products</a>
            <a class="flex_column admin_btn" href="index.php?action=adminAllSearches"><i class="fa fa-search fa-4x" aria-hidden="true"></i><?php echo $searchCount ?> searches</a>
        </div>
    </div>
    <div class="content_wrapper_right flex_column ">
        <div class=" flex_column ">
            <div class="flex_row">
                <a class="flex_column admin_btn" href="index.php?action=basket"><i class="fa fa-credit-card fa-4x" aria-hidden="true"></i>sales</a>
                <a class="flex_column admin_btn" href="index.php?action=logout"><i class="fa fa-times fa-4x" aria-hidden="true"></i>logout</a></div>

            <form class="title flex_column spaceBetween noWrap" action="" method="post">
                <p class="title">your saved details</p>

                <fieldset class="form_login_input_wrap flex_row">
                    <!--                <input value="--><? //= $_SESSION['id'] ?? '' ?><!--" type="hidden" name="user[user_id]">-->
                    <hr>

                    <label class="">Name</label>
                    <p class="title"><?= $_SESSION['firstName'] . ' ' . $_SESSION['lastName'] ?></p>

                    <label class="">Location</label>
                    <p class="title"><?= $_SESSION['location'] ?></p>

                    <label class="">email</label>
                    <p class="title"><?= $_SESSION['email'] ?></p>

                </fieldset>

                <h2><a class=" highlight" href="index.php?action=editProfile&id=<?= $_SESSION['id'] ?>">edit profile</a></h2>

            </form>


        </div>
    </div>

</div>

