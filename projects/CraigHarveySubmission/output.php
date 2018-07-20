<?php
//  API logic required as an include to separate page logic from HTML
//  Included above head of HTML so logic is loaded before page is
require './asset/PHP/API_logic.php';
?>
<!doctype html>
<html lang="en">
<?php
// head required as an include to reduce work on multiple pages
require './asset/includes/header.php';
?>
<body>
<a href="index.php">
    <div class="backBtn">
        <p>Restart</p>
    </div>
</a>
<section class="display_section">

    <div class="output">
        <!--        htmlspecialchars used to stop html being used to change page appearance -->
        <h1>Hello <span class="error"><?= htmlspecialchars($userName) ?></span></h1>
        <h2>Your post code is for <span class="error"><?= $user_formatted_address ?></span></h2>
    </div>
    <div class="display_section_below">

        <div class="weatherSection">
            <p>Your current weather is<br> <span class="error"> <?= $weather_current_summary ?></span></p>
            <p>Your current temperature is<br> <span class="error"> <?= round($weather_current_temp) ?> &#8451;</span></p>

            <p>Your forecast for the day is<br><span class="error"> <?= $weather_daily_summary ?> </span></p>

            <p>Your forecast for the week is<br><span class="error"> <?= $weather_weekly_summary ?> </span></p>

        </div>
        <div class="mapWrap">
            <iframe width="600" height="450" frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:<?= $user_place_id ?>&key=AIzaSyAD8VyImQpXUvPG55FLV9PJZ0ibU8z37O0" allowfullscreen></iframe>
        </div>
        <div class="newsHeadlinesSection">
            <div class="newsHeadlineHeader">
                <h3>BBC News Headlines for </h3>
                <h2 class=""><?= $user_city ?></h2>
            </div>
            <div class="newsHeadline_list">
                <!--                for each loop used to cycle through array and display all news headlines-->
                <?php foreach ($news_array['articles'] as $item) {
                    echo "<div class='newsListItem'>" . "<p>" . $item['title'] . "</p><a href='" . $item['url'] . "' target='_blank'><div class='btnLink'>Link</div></a></div>";
                }

                ?>
            </div>
        </div>
    </div>
    <?php
    require './asset/includes/footer.php'
    ?>
</section>

</body>
</html>
