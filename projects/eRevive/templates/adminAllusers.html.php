<div class="content_wrapper flex_row ">

    <!--    content wrapper left-->
    <div class="content_wrapper_left ">
        <table>
            <h1 class=" white"><?php echo $userCount ?> users</h1>


            <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>location</th>
                <th>email</th>
                <th>edit</th>
                <th>delete</th>
            </tr>


            <?php foreach ($userResults as $user): ?>
                <tr>
                    <td><?= $user['user_id'] ?></td>
                    <td><?= $user['user_firstName'] ?></td>
                    <td><?= $user['user_lastName'] ?></td>
                    <td><?= $user['user_location'] ?></td>
                    <td><?= $user['user_email'] ?></td>

                    <td><a class="highlight" href="index.php?action=editProfile&id=<?= $user['user_id'] ?>"><i
                                    class="fa fa-pencil" aria-hidden="true"></i></a></td>
                    <td><a class="highlight" href="index.php?action=register&id=<?= $user['user_id'] ?>"><i
                                    class="fa fa-trash-o" aria-hidden="true"></i>
                        </a></td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
    <div class="content_wrapper_right flex_column ">
        <div class=" flex_column ">


            <div class="flex_row">
                <a class="flex_column admin_btn" href="index.php?action=admin"><i class="fa fa-arrow-left fa-4x" aria-hidden="true"></i>back</a>
                <a class="flex_column admin_btn" href="index.php?action=logout"><i class="fa fa-times fa-4x" aria-hidden="true"></i>logout</a>
                <a class="flex_column admin_btn" href="index.php?action=register"><i class="fa fa-id-card fa-4x" aria-hidden="true"></i>add new user</a></div>



        <form class="title flex_column spaceBetween noWrap" action="" method="post">
            <p class="title">your saved details</p>

            <fieldset class="form_login_input_wrap flex_row">
                <!--                <input value="--><? //= $_SESSION['id'] ?? '' ?><!--" type="hidden" name="user[user_id]">-->
                <hr>

                <label class="">Name</label>
                <p class="title"><?= $_SESSION['firstName'] . ' ' . $_SESSION['lastName'] ?></p>

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

