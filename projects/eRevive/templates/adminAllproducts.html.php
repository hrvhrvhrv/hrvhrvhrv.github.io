<div class="content_wrapper flex_row ">

    <!--    content wrapper left-->
    <div class="content_wrapper_left ">
        <table>
            <h1 class=" white"><?php echo $prodCount?> products</h1>

            <tr>
                <th>id</th>
                <th></th>

                <th>name</th>
                <th>brand</th>

                <th>value</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
            <?php foreach ($products as $prod): ?>
                <tr>

                    <td><?= $prod['prod_id'] ?></td>
                    <td><a class="highlight" href="index.php?action=search&search=<?= $prod['prod_category'] ?>"><i
                                    class="fa fa-<?= $prod['prod_category'] ?> " aria-hidden="true"></i></a>
                    </td>
                    <td><?= $prod['prod_name'] ?></td>
                    <td><a class="white" href="index.php?action=search&search=<?= $prod['prod_brand'] ?>"><?= $prod['prod_brand'] ?></a></td>
                    <td>£<?= $prod['prod_price'] ?></td>
                    <td><a class="highlight" href="index.php?action=productNew&id=<?= $prod['prod_id'] ?>">
                            <i class="fa fa-pencil" aria-hidden="true"></i></a></td>
                    <td>
                        <a class="highlight" href="index.php?action=admin"><i class="fa fa-trash-o" aria-hidden="true"></i>
                        </a>
                        <form id="" action="index.php?action=deleteAdmin" method="post">
                            <input type="hidden" name="id"
                                   value="<?= $prod['prod_id'] ?>">
                            <input type="submit" value="Delete">
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>

        </table>

    </div>
    <div class="content_wrapper_right flex_column ">
        <div class=" flex_column ">


            <div class="flex_row">
                <a class="flex_column admin_btn" href="index.php?action=admin"><i class="fa fa-arrow-left fa-4x" aria-hidden="true"></i>back</a>
                <a class="flex_column admin_btn" href="index.php?action=logout"><i class="fa fa-times fa-4x" aria-hidden="true"></i>logout</a></div>
                <a class="flex_column admin_btn" href="index.php?action=productNew"><i class="fa fa-archive fa-4x" aria-hidden="true"></i>add new product</a>


        <form class="title flex_column spaceBetween noWrap" action="" method="post">
                <p class="title">your saved details</p>

                <fieldset class="form_login_input_wrap flex_row">
                    <!--                <input value="--><? //= $_SESSION['id'] ?? '' ?><!--" type="hidden" name="user[user_id]">-->
                    <hr>

                    <label class="">Name</label>
                    <p class="title"><?= $_SESSION['firstName'] . ' ' . $_SESSION['lastName'] ?></p>

                    <!--                <input value="--><? //= $_SESSION['firstName'] ?? '' ?><!--" class="input_std" type="text"-->
                    <!--                       name="login[user_firstName]" placeholder="first name">-->
                    <!--                <label class="">Last Name</label>-->
                    <!--                <input value="--><? //= $_SESSION['lastName'] ?? '' ?><!--"-->
                    <!--                       class="input_std" type="text"-->
                    <!--                       name="login[user_lastName]"-->
                    <!--                       placeholder="last name"-->
                    <!--                >-->
                    <label class="">Location</label>
                    <p class="title"><?= $_SESSION['location'] ?></p>

                    <!--                <input value="--><? //= $_SESSION['location'] ?? '' ?><!--" class="input_std" type="text"-->
                    <!--                       name="login[user_location]" placeholder="city">-->
                    <label class="">email</label>
                    <p class="title"><?= $_SESSION['email'] ?></p>
                    <!--                <input value="--><? //= $_SESSION['email'] ?? '' ?><!--" class="input_std" type="text"-->
                    <!--                       name="login[user_email]" placeholder="email">-->

                </fieldset>

                <h2><a class=" highlight" href="index.php?action=register&id=<?= $_SESSION['id'] ?>">edit profile</a></h2>


                <!--            <input type="submit" class="btn btn_text" name="submit" value="register">-->

            </form>


        </div>
    </div>

</div>

