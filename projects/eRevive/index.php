<?php

function loadTemplate($templateFileName, $variables = [])
{
    extract($variables);
    ob_start();
    include 'templates/' . $templateFileName;
    return ob_get_clean();
}

try {
    include 'includes/DatabaseConnection.php';
    include 'classes/DatabaseTable.php';
    include 'controllers/siteController.php';

    $loginTable = new DatabaseTable($pdo, 'tbl_login', 'user_id');
    $prodTable = new DatabaseTable($pdo, 'tbl_products', 'prod_id');
    $searchTable = new DatabaseTable($pdo, 'tbl_searches', 'search_id');


    $siteController = new siteController( $loginTable, $prodTable, $searchTable);

    /**
     *  $action variable is set to the value of GET behind the key of 'action'
     *  This value is set on <a href> tags all set to index.php?action= '$action'
     *  each $action calls a different method on the site controller php file
     *  each method in site controller delivers a different page related to its call
     **/
    $action = $_GET['action'] ?? 'home';


    $page = $siteController->$action();


    $title = $page['title'];
    $headLine = $page['headLine'];
    $subHeadLine = $page['subHeadline'] ;
    $splashLittle = $page['splashLittle'] ;


    if (isset($page['variables'])) {
        $output = loadTemplate($page['template'],
            $page['variables']);
    } else {
        $output = loadTemplate($page['template']);
    }

    if (isset($_POST['search'])) {
        $searchTerm = $_POST['search'];
        header('location: index.php?action=search&search='.$searchTerm);
    }

} catch (PDOException $e) {
    $title = 'An error has occurred';
    $output = 'Database error: ' . $e->getMessage() . ' in '
        . $e->getFile() . ':' . $e->getLine();

}

include 'templates/layout.html.php';






