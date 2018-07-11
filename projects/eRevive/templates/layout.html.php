<!doctype html>
<html>
<?php

require './includes/html/head.html.php';


?>
<body>
<!-- header split into three sections which the middle section will take its name from php data -->
<?php
if(isset($_SESSION['password'])){
    if (isset($_SESSION['password']) && $_SESSION['email'] === 'admin@admin.admin') {
        require './includes/html/headerAdmin.html.php';
    } else{

    require './includes/html/headerLogged.html.php';}
}
else {
    require './includes/html/header.html.php'; }

?>
<main class="flex_row">
    <!--
    *   Fixed left have side of the page nav bar
    *   same on all pages will be loaded as part of the template file
    *   changes when users is logged in where new links are added
    -->


    <?php

    if(isset($_SESSION['password'])){
        require './includes/html/leftNavLogged.html.php';

    }

    else {
        require './includes/html/leftNav.html.php';
    }

    ?>
    <!--  Right hand section of the page -->
    <div class="container flex_column">

        <?= $output ?>
    </div>
</main>
<?php require './includes/html/footer.html.php'; ?>
</body>

