
<form class="" action="" method="post">
<!--    <input type="text" class="searchBox" name="search" placeholder="enter your search term here">-->
<!--    <div class="flex_row">-->
<!--    <input type="submit" class="btn btn_submit" value="search"></div> </form>-->
<div class="content_wrapper flex_row">
    <?php foreach ($prod as $prods): ?>

        <div class="prod_tile">
            <div class="prod_tile_img_wrapper">
                <i class="fa fa-<?= $prods['prod_category'] ?> fa-2x prod_title_icon" aria-hidden="true"></i>

                <img src="./images/<?= $prods['prod_category'] ?>.jpg" alt="<?= $prods['prod_category'] ?>"
                     class="prod_tile_img">

            </div>
            <div class="prod_tile_textWrap flex_column">
                <div class="prod_tile_textBox">
                    <h2><?= htmlspecialchars($prods['prod_brand'], ENT_QUOTES, 'UTF-8') ?>
                        <h2><?= htmlspecialchars($prods['prod_name'], ENT_QUOTES, 'UTF-8') ?></h2></h2>
                </div>
                <div class="prod_tile_textBox"><h2>
                        £<?= htmlspecialchars($prods['prod_price'], ENT_QUOTES, 'UTF-8') ?></h2>
                </div>

            </div>


            <a href="index.php?action=productView&id=<?= $prods['prod_id'] ?>">
                <div class="btn_prod_tile">View Product</div>
            </a>


        </div>


    <?php endforeach; ?>
</div>