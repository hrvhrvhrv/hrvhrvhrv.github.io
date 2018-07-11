<div class="prod_page flex_row ">
    <div class="prod_page_img_wrapper flex_row">
        <img class="prod_page_img" src="./images/<?= $prod['prod_category']??'store'?>.jpg">


    </div>
    <div class="prod_page_textWrap flex_column spaceBetween noWrap">

        <div class="flex_column spaceAround">
            <div class="flex_row">
            <a class="flex_column admin_btn" href="javascript:history.back()"><i class="fa fa-arrow-left fa-4x" aria-hidden="true"></i>back</a>
            <a class="flex_column admin_btn" href="index.php?action=search&search=<?= $prod['prod_category'] ?>"><i class="fa fa-search fa-4x" aria-hidden="true"></i>similar product</a>
            </div>
            <p class="prod_page_textBox"><?= $prod['prod_desc'] ?></p>
            <h2 class="prod_page_textBox"><?= $prod['prod_category'] ?></h2>

            <h2 class="prod_page_textBox "><?= $prod['prod_age'] ?> years old</h2>


            <h2 class="prod_page_textBox "> Contact Seller</h2>
        </div>
        <input type="submit" class="btn_page_tile btn_text" value="purchase">

    </div>

</div>