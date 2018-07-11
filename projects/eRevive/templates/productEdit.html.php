<div class="prod_page flex_row">
    <div class="prod_page_img_wrapper">
        <img class="prod_page_img" src="./images/<?= $prod['prod_category'] ?? 'listing' ?>.jpg">
    </div>
    <div class="prod_page_textWrap flex_column  highlight noWrap spaceBetween">
        <h3 class="highlight center"><?= $headLine ?></h3>
        <form class="flex_column highlight spaceBetween noWrap" action="" method="post">
            <fieldset class="flex_column form_register spaceBetween noWrap">
                <input value="<?= $prod['prod_id'] ?? '' ?>" type="hidden" name="prod[prod_id]">
                <input value="<?= $_SESSION['id'] ?? '' ?>" type="hidden" name="prod[user_id]">


                <fieldset class="flex_row">
                    <label>brand
                        <select name="prod[prod_brand]" id="" class="input_std input_50Wid " required>
                            <option value="<?= $prod['prod_brand'] ?? '' ?>" selected  >Brand</option>
                            <option value="Apple">Apple</option>
                            <option value="Amiga">Amiga</option>
                            <option value="Dell">Dell</option>
                            <option value="GoPro">GoPro</option>
                            <option value="LG">LG</option>
                            <option value="Nintendo">Nintendo</option>
                            <option value="Panasonic">Panasonic</option>
                            <option value="Sony">Sony</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Sega">Sega</option>
                        </select>
                    </label>
                    <label>name
                        <input value="<?= $prod['prod_name'] ?? '' ?>" type="text" class="input_std input_50Wid"
                               placeholder="name"
                               name="prod[prod_name]" id="prod_name" required></label>

<!--                    <label>enter description-->
<!--                        <input value="--><?//= $prod['prod_desc'] ?? '' ?><!--" type="text" class="input_std input_50Wid "-->
<!--                               placeholder="desc"-->
<!--                               name="prod[prod_desc]" id="prod_desc required"></label>-->

                <label>category
                    <select name="prod[prod_category]" id="" class="input_std input_50Wid " required>
                        <option value="<?= $prod['prod_category'] ?? '' ?>" selected  >category</option>
                        <option value="camera-retro">camera</option>
                        <option value="gamepad">video game</option>
                        <option value="laptop">laptop</option>
                        <option value="phone">phone</option>
                        <option value="music">stereo</option>
                        <option value="tv">tv</option>
                        <option value="tablet">tablet</option>
                        <option value="stereo">dvd player</option>
                    </select></label>

                    <label>age
                        <input value="<?= $prod['prod_age'] ?? '' ?>" type="number" class="input_std input_50Wid"
                               placeholder="age"
                               name="prod[prod_age]" id="prod_age" required></label>

                    <label>price
                        <input value="<?= $prod['prod_price'] ?? '' ?>" type="number" class="input_std input_50Wid"
                               placeholder="price"
                               name="prod[prod_price]" id="prod_age" required></label>

                </fieldset>
                <label class="center"> description</label><textarea class="input_std txt_textArea input_50Wid"  name="prod[prod_desc]" id="prod_desc" placeholder="description" required><?= $prod['prod_desc'] ?? '' ?></textarea>


            </fieldset>
            <input type="submit" class="btn_page_tile btn_text" value="save listing">
        </form>



    </div>
</div>



