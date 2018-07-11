<div class="content_wrapper flex_row ">

    <!--    content wrapper left-->
    <div class="content_wrapper_left ">

        <table>
            <h1 class=" white">you have <?php echo $prodCount ?> products listed for sale</h1>

            <tr>
                <th>id</th>
                <th>category</th>

                <th>name</th>
                <th>brand</th>

                <th>value</th>
                <th>edit</th>
                <th>delete</th>
            </tr>

            <!--        use the function below to call so that items are called from user names id column on products

             public function find($column, $value) {
                    $query = 'SELECT * FROM ' . $this->table . ' WHERE ' .
                        $column . ' LIKE :value';
                    $parameters = [
                        'value' => $value
                    ];
                    $query = $this->query($query, $parameters);
                    return $query->fetchAll();
                }

             -->

            <?php foreach ($products as $prod): ?>
                <tr>
                    <td><?= $prod['prod_id'] ?></td>
                    <td><a class="highlight" href="index.php?action=categories&cat=<?= $prod['prod_category'] ?>"><i
                                    class="fa fa-<?= $prod['prod_category'] ?> highlight" aria-hidden="true"></i></a>
                    </td>
                    <td><a class="white" href="index.php?action=productView&id=<?= $prod['prod_id'] ?>"><?= $prod['prod_name'] ?></a></td>
                    <td><?= $prod['prod_brand'] ?></td>
                    <td>£<?= $prod['prod_price'] ?></td>
                    <td><a class="highlight" href="index.php?action=productNew&id=<?= $prod['prod_id'] ?>"><i
                                    class="fa fa-pencil" aria-hidden="true"></i></a></td>
                    <td>
                        <a class="highlight" href="index.php?action=admin"><i
                                    class="fa fa-trash-o" aria-hidden="true"></i>
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

                <a class="flex_column admin_btn" href="index.php?action=productNew"><i class="fa fa-archive fa-4x" aria-hidden="true"></i>add new product</a>
                <a class="flex_column admin_btn" href="index.php?action=editProfile&id=<?= $_SESSION['id'] ?>"><i class="fa fa-id-card fa-4x" aria-hidden="true"></i>edit profile</a>
                <a class="flex_column admin_btn" href="index.php?action=basket"><i class="fa fa-shopping-basket fa-4x" aria-hidden="true"></i>cart</a>
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

                <!--                <h2><a class=" highlight" href="index.php?action=register&id=--><? //= $_SESSION['id'] ?><!--">edit profile</a></h2>-->

            </form>


        </div>
    </div>

</div>

