
<div class="content_wrapper flex_row">

    <?php foreach ($products as $prod): ?>

        <div class="prod_tile">
            <div class="prod_tile_img_wrapper">
                <i class="fa fa-<?= $prod['prod_category'] ?> fa-2x prod_title_icon" aria-hidden="true"></i>

                <img src="./images/<?= $prod['prod_category'] ?>.jpg" alt="<?= $prod['prod_category'] ?>" class="prod_tile_img">

            </div>
            <div class="prod_tile_textWrap flex_column">
                <div class="prod_tile_textBox">
                    <h2><?= htmlspecialchars($prod['prod_brand'], ENT_QUOTES, 'UTF-8') ?>
                        <h2><?= htmlspecialchars($prod['prod_name'], ENT_QUOTES, 'UTF-8') ?></h2></h2>
                </div>
                <div class="prod_tile_textBox"><h2>£<?= htmlspecialchars($prod['prod_price'], ENT_QUOTES, 'UTF-8') ?></h2>
                </div>

            </div>


            <a href="index.php?action=productView&id=<?= $prod['prod_id'] ?>">
                <div class="btn_prod_tile">View Product</div>
            </a>


        </div>


    <?php endforeach; ?>


</div>
