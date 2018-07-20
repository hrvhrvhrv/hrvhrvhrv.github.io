<!doctype html>
<html lang="en">
<?php
// head required as an include to reduce work on multiple pages
require './asset/includes/header.php';
?>
<body>
<section class="index_section">

    <div class="index_container">
        <div id="welcome_message" class="index_welcome">
            <h1>Hello...</h1>
            <p>Welcome to Craig Harvey's PHP API submission</p>
            <button id="welcome_toggle">Lets get started</button>
        </div>
        <div id="welcome_form" class="index_form_div">
            <h3>Please fill in the form then click submit</h3>
            <form name="userDetails" action="output.php" onsubmit="return validateForm()" method="get" class="index_form">
                <label for="userName" class="inputLabel">Please enter your name
                    <p class="error" id="errorLog_useName"></p>
                    <input id="userName" type="text" name="userName" placeholder="name"></label>
                <label for="location" class="inputLabel">Please enter your postcode or Zip code
                    <p class="error" id="errorLog_location"></p>
                    <input id="location" type="text" name="location" placeholder="postcode"></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</section>
<!-- javascript included at the bottom of the body so that it is loaded after the DOM is created-->
<script src="asset/javascript/scripts.js"></script>
</body>
</html>