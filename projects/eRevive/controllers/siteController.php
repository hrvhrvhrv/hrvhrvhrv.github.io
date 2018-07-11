<?php

class siteController
{
    private $loginTable;
    private $prodTable;
    private $searchTable;

    /**
     * -------------------- -------------------- --------------------
     * class constructor
     * -------------------- -------------------- --------------------
     **/
    public function __construct(
        DatabaseTable $loginTable,
        DatabaseTable $prodTable,
        DatabaseTable $seachTable)
    {
        $this->loginTable = $loginTable;
        $this->prodTable = $prodTable;
        $this->searchTable = $seachTable;
    }
//  -----------------------------------------------------------------

    /**
     * @home method
     *  -   Home page of the site displays 12 products back to the page
     *      -   this is done by calling the findAllLimit method from databaseTable
     *
     *  -   if a session password is set, the page will show the users name on the subheadline
     * -------------------- -------------------- --------------------
     **/
    public function home()
    {
        session_start();
        $prodResult = $this->prodTable->findAllLimit(12);

        $title = 'eRevive.com';
        $headLine = 'welcome to eRevive';
        $subHeadLine = 'home of second hand electronics ';

        if (isset($_SESSION['password'])) {
            $subHeadLine = 'Hello ' . $_SESSION['firstName'] . ' ' . $_SESSION['lastName'];
        }
        return ['template' => 'home.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'products' => $prodResult
            ]
        ];
    }


    /**
     * @categories method
     *  -   this page displays all teh categories of products that are available on the site
     *  -   this page contains no speacial logic
     *  -   links on the html page have a URL with category name in GET method added
     * -------------------- -------------------- --------------------
     **/
    public function categories()
    {
        session_start();

        $title = 'categories eRevive';
        $headLine = "product Categories ";
        $subHeadLine = 'select a category of product';

        return ['template' => 'categories.html.php',
            'title' => $title, 'headLine' => $headLine, 'subHeadline' => $subHeadLine
        ];
    }


    /**
     * @basket method
     *  -   this page would be for the shopping basket
     *  -   currently just a HTML page with images and text
     * -------------------- -------------------- --------------------
     **/
    public function basket()
    {
        session_start();

        $title = 'basket eRevive';
        $headLine = 'Shopping basket';
        $subHeadLine = 'review your purchases';


        return ['template' => 'basket.html.php', 'title' => $title, 'headLine' => $headLine,
            'subHeadline' => $subHeadLine
        ];
    }


    /**
     * @search method
     *  -   the search method is the search page on the site
     *  -   it checks if $_GET 'search' has been set in the URL and that it is not empty
     *  -   the $_GET is set to the key value of search_term in an array which is then passed to the save method on Databse table class
     *      -   this saves all search terms entered into the website in the searchTable
     *  - the search term then has wildcard % added to the front and end and is then passed to the findProd() method which returns an array
     *  -   a count is performed on the array to see how many results are returned
     *  -   an if statement checks how many results are returned
     *  -   if the count is less than 1 there are no products matching the and the corresponding messages is returned to the pages
     *  -   else  the results are returned to the page along with the number of search results
     *  -   if no search term is included in the $_GET then the page tells the user to search again
     * -------------------- -------------------- --------------------
     **/
    public function search()
    {
        session_start();

        if (isset($_GET['search']) && !empty($_GET['search'])) {


            $cleanSearch = $this->inputClean($_GET['search']);

            $searchTerm = '%' . $cleanSearch . '%';


            $prodResult = $this->prodTable->findProd($searchTerm);
            $searchCount = count($prodResult);


            // saving the search term
            $saveSearch = [];
            $saveSearch['search_term'] = $cleanSearch;
            $this->searchTable->save($saveSearch);


            //  checking that there is a result
            if ($searchCount < 1) {
                $headLine = 'There is no results for: ';
                $subHeadLine = $cleanSearch;
            } else {

                $title = 'Search Results | eRevive';
                $headLine = $searchCount . ' search results for:';
                $subHeadLine = $cleanSearch;
            }

        } else {
            $title = 'Search| eRevive';
            $headLine = 'Please enter a search';
            $subHeadLine = 'results will be displayed below';
        }

        return ['template' => 'search.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'prod' => $prodResult ?? null,
            ]
        ];
    }

    /**
     * @showAll method
     *  - smiliar to the seach page but uses the findAll() method instead of using findProd() method
     * -------------------- -------------------- --------------------
     **/
    public function showAll()
    {
        session_start();

        $prodResult = $this->prodTable->findAll();

        $searchCount = count($prodResult);

        if ($searchCount < 1) {
            $headLine = 'There is no results for: show all';
            $subHeadLine = 'please search again';
        } else {

            $title = 'Search Results | eRevive';
            $headLine = $searchCount . ' search results for:';
            $subHeadLine = $_GET['action'];
        }


        return ['template' => 'search.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'prod' => $prodResult ?? null,
                'prodCount' => $searchCount

            ]
        ];


    }

    /**
     * @prodView method
     *  -   this page displays a single product returned to the page dependent on what id is set in the $_GET in the URL
     *  -   the page takes the ID set in the $_GET and uses teh findById() method and returns the data back to the page
     * -------------------- -------------------- --------------------
     **/

    public function productView()
    {
        session_start();


        $cleanID = $this->inputClean($_GET['id']);

        $prod = $this->prodTable->findById($cleanID);
        $title = $prod['prod_name'] . ' | ' . $prod['prod_category'] . ' | eRevive ';
        $headLine = $prod['prod_name'];
        $subHeadLine = $prod['prod_category'];

        return ['template' => 'productView.html.php',
            'title' => $title, 'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'prod' => $prod ?? null,
                'headLine' => $headLine ?? null,
            ]
        ];
    }


//  -----------------------------------------------------------------
//  Admin methods
//  -----------------------------------------------------------------


    /**
     * @admin method
     * This page is the landing page for the admin - it is where the admin is directed to when they log in
     *  -   It displays the total number of products, number of registered users, and how many searches have be performed on the site
     *  -   Each number displayed acts as a link a table showing the corresponding data
     * action=admin this page is password protected for admin only
     *  -   Session is started
     *  -   if statement checks that there is a session password set and that the session email is admin@admin.amin
     *      -   An instances of the database tables are called with the findAll method attached to variables.
     *      -   a count of each findAll of each instance
     *  -   if a password is set but the session email is not admin then the user is passed to userPage
     *  -   else the user is taken to the login page
     * -------------------- -------------------- --------------------
     **/
    public function admin()
    {
        session_start();

        if (isset($_SESSION['password']) && $_SESSION['email'] === 'admin@admin.admin') {
            //  start of protected by password
            $prodResult = $this->prodTable->findAll();
            $userResult = $this->loginTable->findAll();
            $searchResult = $this->searchTable->findAll();

            $searchCount = count($searchResult);
            $prodCount = count($prodResult);
            $userCount = count($userResult);


            $totalValue = $this->prodTable->totalVal('prod_price');

            $title = 'admin | eRevive.com';
            $headLine = 'Admin homepage';
            $subHeadLine = 'Logged in as ' . $_SESSION['firstName'];

        } else {

            if (isset($_SESSION['password'])) {
                header('location: index.php?action=userPage');

            } else {

                header('location: index.php?action=login');
            }
        }

        return ['template' => 'admin.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'products' => $prodResult,
                'userResults' => $userResult,
                'prodCount' => $prodCount,
                'userCount' => $userCount,
                'searchCount' => $searchCount,
                'totalValue' => $totalValue
            ]
        ];
        //  end of of protected by password part of page
    }


    /**
     * @adminAllProd method
     *  -   This page displays a list of all products on the database with a link for deleting and editing the record
     *  -   This page is password protected for admin only same as admin page
     * -------------------- -------------------- --------------------
     **/
    public function adminAllProd()
    {
        session_start();
        if (isset($_SESSION['password']) && $_SESSION['email'] === 'admin@admin.admin') {
            //  start of protected by password
            // An instance of the database table tbl_products is called then the function final called on that instance
            $prodResult = $this->prodTable->findAll();
            // the total value of results returned is counted and passed to the page as a key value pair of the variables object
            $prodCount = count($prodResult);

            //  Page title set
            $title = 'admin | eRevive.com';
            //  Page headline set
            $headLine = 'Admin homepage';
            //  Page sub headline set to a message and the stored session of 'firstName'
            $subHeadLine = 'Logged in as ' . $_SESSION['firstName'];

        } else {

            // if a password session  but the email session does not match admin@admin.admin user sernt to userPage
            if (isset($_SESSION['password'])) {
                header('location: index.php?action=userPage');

            } else {
                //  if no password is set the user is taken to the log in page
                header('location: index.php?action=login');
            }
        }
        //  Values returned to the page
        return ['template' => 'adminAllproducts.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'products' => $prodResult,
                'prodCount' => $prodCount,

            ]
        ];
        //  end of of protected by password part of page

    }


    /**
     * @adminAllUsers method
     *  -   This page displays a list of all registered users on the database with a link for deleting and editing the record
     *  -   This page is password protected for admin only same as admin page
     * -------------------- -------------------- --------------------
     **/
    public function adminAllusers()
    {
        session_start();


//        if (isset($_SESSION['password']) && $_SESSION['username'] =='admin' ) {
        if (isset($_SESSION['password']) && $_SESSION['email'] === 'admin@admin.admin') {


            //  start of protected by password
            $userResult = $this->loginTable->findAll();

            $userCount = count($userResult);


            $title = 'admin | eRevive.com';
            $headLine = 'Admin homepage';
            $subHeadLine = 'Logged in as ' . $_SESSION['firstName'];


        } else {

            if (isset($_SESSION['password'])) {
                header('location: index.php?action=userPage');

            } else {

                header('location: index.php?action=login');
            }
        }

        return ['template' => 'adminAllusers.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'userResults' => $userResult,
                'userCount' => $userCount,

            ]
        ];
        //  end of of protected by password part of page


    }


    /**
     * @adminAllSearches method
     *  -   This page displays a list of all searches which have been stored on the database
     *  -   This page is password protected for admin only same as admin page
     * -------------------- -------------------- --------------------
     **/
    public function adminAllSearches()
    {
        session_start();


        if (isset($_SESSION['password']) && $_SESSION['email'] === 'admin@admin.admin') {


            //  start of protected by password
            $searchResult = $this->searchTable->findAll();

            $searchCount = count($searchResult);


            $title = 'admin | eRevive.com';
            $headLine = 'Admin homepage';
            $subHeadLine = 'Logged in as ' . $_SESSION['firstName'];


        } else {

            if (isset($_SESSION['password'])) {
                header('location: index.php?action=userPage');

            } else {

                header('location: index.php?action=login');
            }
        }

        return ['template' => 'adminAllSearches.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'searchResult' => $searchResult,
                'searchCount' => $searchCount,

            ]
        ];
        //  end of of protected by password part of page


    }


    /**
     * @delete method
     *  -   used by the controller to call the delete function from databaseTable
     *  -   id paraater is passed between pages via post method
     *  -   it then sets the page header back to the admin page
     * -------------------- -------------------- --------------------
     **/
    public function deleteAdmin()
    {

        $cleanID = $this->inputClean($_POST['id']);
        $this->prodTable->delete($cleanID);
        header('location: index.php?action=admin');
    }


//  -----------------------------------------------------------------
//  User page
//  -----------------------------------------------------------------


    /**
     * @adminAllProd method
     *  -   Register method is used for both registering the user and editing the registered data
     *  -   method sets session to start
     *          *** Register function ***
     *  -   it checks if login has been set to post (login is posted to the page by a form on the register page)
     *  -   if it is set
     *      -   validation is performed on each input variable of the post array
     *      -   returning a string to the error array if not valid
     *          -   if not valid the error array is returned ot the page along with data input for user to try again
     *  -   if it is valid the password in the array is hashed then the whole array passed to hte save function in the databaseTable class
     *  -   else if $_POST login is not set an empty version of the page is displayed
     *          *** Update function ***
     *  -   Finally if a session password has been set [i.e. the user has logged in] and the $_POST method has been called
     *  -   The page will perform the same task as before but the save function will pick up the ID set in the POST and update the record
     *  -   if the session password has been set but no POST has been set to the page, the page GETSs the user ID from the page URL
     *  -   it then uses the findByID() method passing in the GET ID number
     *  -   This pre-populates the form with the users saved data from the database for editing
     * -------------------- -------------------- --------------------
     **/
    public function register()
    {
        session_start();

        if (isset($_POST['login'])) {
            // user array passed in from user form and login
            // each array has data associated with type_ in htmlPage

            $login = $_POST['login'];

            //  data is sanitized
            $login['user_firstName'] = $this->inputClean($login['user_firstName']);
            $login['user_lastName'] = $this->inputClean($login['user_lastName']);
            $login['user_location'] = $this->inputClean($login['user_location']);


            //  assume that the registration is valid
            $valid = true;
            $errors = [];

            // But if any of the fields have been left blank
            // set $valid to false

            if (empty($login['user_firstName'])) {
                $valid = false;
                $errors[] = 'Please enter your first name';
            }
            if (empty($login['user_lastName'])) {
                $valid = false;
                $errors[] = 'Please enter your last name';

            }
            if (empty($login['user_location'])) {
                $valid = false;
                $errors[] = 'Please enter your location';

            }
            if (empty($login['user_email'])) {
                $valid = false;
                $errors[] = 'Please enter your email';

            } else if (filter_var($login['user_email'], FILTER_VALIDATE_EMAIL) == false) {
                $valid = false;
                $errors[] = 'Invalid email address';
            } else if (count($this->loginTable->find('user_email', $login['user_email'])) > 0) {

                $valid = false;
                $errors[] = 'That email is already registered';
            }

            if (empty($login['user_password'])) {
                $valid = false;
                $errors[] = 'Please enter a password';

            }

//  --------------------------------------------------------------------------------------------------------------

            if (isset($login['user_firstName'])) {
                $login['user_firstName'] = filter_var($login['user_firstName'], FILTER_SANITIZE_STRING);
                $login['user_firstName'] = $this->inputClean($login['user_firstName']);
            }
            if (isset($login['user_lastName'])) {


            }
            if (isset($login['user_location'])) {


            }
            if (isset($login['user_email'])) {

            }

//  --------------------------------------------------------------------------------------------------------------

            if ($valid == true) {
                // Hash the password before saving it in the database
                $login['user_password'] = password_hash($login['user_password'], PASSWORD_DEFAULT);
                // calls teh save function via each table with type passed in as argument
                $this->loginTable->save($login);
//                $this->usersTable->save($user);
                // takes user to home page once actions have been completed
                header('location: index.php?action=userPage');
            } else {
                // If the data is not valid, show the form again
                $title = 'register';
                $headLine = 'error with submission';
                $subHeadLine = 'please try again';

                return ['template' => 'register.html.php',
                    'title' => $title, 'headLine' => $headLine,
                    'subHeadline' => $subHeadLine,
                    'variables' => [
                        'errors' => $errors,
                        'login' => $login,
                    ]];
            }


        }

        if (isset($_SESSION['password']) && isset($_POST['login'])) {
            // user array passed in from user form and login
            // each array has data associated with type_ in htmlPage
            $login = $_POST['login'];

            //  data is sanitized
            $login['user_firstName'] = $this->inputClean($login['user_firstName']);
            $login['user_lastName'] = $this->inputClean($login['user_lastName']);
            $login['user_location'] = $this->inputClean($login['user_location']);

            //  assume that the registration is valid
            $valid = true;
            $errors = [];

            // But if any of the fields have been left blank
            // set $valid to false

            if (empty($login['user_firstName'])) {
                $valid = false;
                $errors[] = 'Please enter your first name';
            }
            if (empty($login['user_lastName'])) {
                $valid = false;
                $errors[] = 'Please enter your last name';

            }
            if (empty($login['user_location'])) {
                $valid = false;
                $errors[] = 'Please enter your location';

            }
            if (empty($login['user_email'])) {
                $valid = false;
                $errors[] = 'Please enter your email';

            } else if (filter_var($login['user_email'], FILTER_VALIDATE_EMAIL) == false) {
                $valid = false;
                $errors[] = 'Invalid email address';
            } else if (count($this->loginTable->find('user_email', $login['user_email'])) > 0) {

                $valid = true;

            }

            if (empty($login['user_password'])) {
                $valid = false;
                $errors[] = 'Please enter a password';

            }

            if ($valid == true) {
                // Hash the password before saving it in the database
                $login['user_password'] = password_hash($login['user_password'], PASSWORD_DEFAULT);
                // calls teh save function via each table with type passed in as argument
                $this->loginTable->save($login);
//                $this->usersTable->save($user);
                // takes user to home page once actions have been completed
                header('location: index.php?action=login');
            } else {
                // If the data is not valid, show the form again
                $title = 'register';
                $headLine = 'error with submission';
                $subHeadLine = 'please try again';

                return ['template' => 'register.html.php',
                    'title' => $title, 'headLine' => $headLine,
                    'subHeadline' => $subHeadLine,
                    'variables' => [
                        'errors' => $errors,
                        'login' => $login,
                    ]];
            }


        } else {
            if (isset($_GET['id'])) {

                $cleanID = $this->inputClean($_GET['id']);
                $login = $this->loginTable->findById($cleanID);

                $title = 'edit profile eRevive';
                $headLine = 'Edit your profile here';
            } else {
                $title = 'register eRevive';
                $headLine = 'create a profile';
            }

            $subHeadLine = 'user the form to sign into your account';

            return ['template' => 'register.html.php',
                'headLine' => $headLine,
                'subHeadline' => $subHeadLine,
                'title' => $title,
                'variables' => [
                    'login' => $login ?? null,
                ]
            ];
        }

    }


    /**
     * @login method
     *  -   if no post is set then the page is displayed as an HTML file
     *  -   The form on the page submits to its self using a post action
     *  -
     *  -   if user_email is set variables for username and password are set
     *  -   the user email is checked against the database using the find() Method
     *  -   the find method has 'user_email' set as the column to look up and the username as the email submitted
     *      -   this checks to see how many records are returned against the email submitted
     *      -   this function returns an array.  If the array is greater than 0 the email exists
     *  -   the user password returned from the database based on the email submitted is set to a variable
     *  -   password_verify is used on the submitted password in the form and the returned password the database
     *  -   if the array isnt empty (i.e. the password exists) and the password_verify is true then the returned data from the find() method is set to the corresponding names
     *  -   if the password has been set and the email is set to admin@amind.admin then the user is sent to the admin page else to the userPage
     *
     *  -   if the password_verify is false the user is returned the message that the password is incorrect
     *  -   if the returned find() method is empty the user is told the account doesn't exist
     **/

    public function login()
    {

        session_start();

        $title = 'login eRevive';
        $headLine = 'login to eRevive';
        $subHeadLine = 'user the form to sign into your account';
        $template = 'login.html.php';

        $errors = [];


        if (isset($_POST['user_email'])) {


            //  data is sanitized
            $username = filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL);

            $password = $_POST['user_password'];

            $user = $this->loginTable->find('user_email', $username);

            $userPassword = $user[0]['user_password'];


            if (!empty($user) && password_verify($password, $userPassword)) {

                $_SESSION['email'] = $user[0]['user_email'];
                $_SESSION['location'] = $user[0]['user_location'];
                $_SESSION['password'] = $user[0]['user_password'];
                $_SESSION['firstName'] = $user[0]['user_firstName'];
                $_SESSION['lastName'] = $user[0]['user_lastName'];
                $_SESSION['id'] = $user[0]['user_id'];

                if (isset($_SESSION['password']) && $_SESSION['email'] === 'admin@admin.admin') {

                    header('location: index.php?action=admin');
                } else {
                    header('location: index.php?action=userPage');

                }
            } else {
                if (!password_verify($password, $userPassword)) {
                    $errors[] = 'Incorrect Password';

                }
                if (empty($user)) {
                    $errors[] = 'Account does not exist';

                }
                $template = 'login.html.php';

            }

        }


        //  ==================


        return [
            'template' => $template,
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'errors' => $errors,
//                'products' => $prodResult,
//                'userResults' => $userResult
            ]
        ];

    }

    /**
     * @logout method
     *  -   when called the sessions are unset and destroyed
     *  -   the user is then sent to the login page
     * -------------------- -------------------- --------------------
     **/
    public function logout()
    {
        session_start();
        session_unset();
        session_destroy();
        header('location:index.php?action=login');
    }

    /**
     * @adminAllProd method
     *  -   This page displays a list of all products on the database with a link for deleting and editing the record
     *  -   This page is password protected for admin only same as admin page
     * -------------------- -------------------- --------------------
     **/
    public function userPage()
    {
        session_start();


//        if (isset($_SESSION['password']) && $_SESSION['username'] =='admin' ) {
        if (isset($_SESSION['password'])) {


            //  start of protected by password
//          the find function is returning only search results where the products user ID is the same as the session ID
            $prodResult = $this->prodTable->find('user_id', $_SESSION['id']);
            $userResult = $this->loginTable->findAll();
            $prodCount = count($prodResult);

            $title = 'user home page | eRevive.com';
            $headLine = 'User Home Page';
            $subHeadLine = 'Logged in as ' . $_SESSION['firstName'];


        } else {
            header('location: index.php');
        }

        return ['template' => 'userPage.html.php',
            'title' => $title,
            'headLine' => $headLine,
            'subHeadline' => $subHeadLine,
            'variables' => [
                'products' => $prodResult,
                'userResults' => $userResult,
                'prodCount' => $prodCount
            ]
        ];
        //  end of of protected by password part of page


    }

    /**
     * @editProfile method
     *  -   This page allows the user edit their details
     *  -   If it is set, the user is displayed the same page as registering with their data pre-populated in the form
     *  -   this is done by getting the ID from $_GET passed in the URL in the page
     *  -   a findById() method is then called on the login table
     *  -   the form on the page submits to itself
     *  -   if the post of login has been set and the session password has been set (i.e. user is logged in)
     *  -   Validation is carried out on the form submission to check there is data in all fields
     *  -   any errors are returned to the page for the user to correct
     *  -   if all valid the save() method is called and hte $_POST login is passed
     * -------------------- -------------------- --------------------
     **/
    public function editProfile()
    {
        session_start();

        if (isset($_SESSION['password']) && isset($_POST['login'])) {
            // user array passed in from user form and login
            // each array has data associated with type_ in htmlPage
            $login = $_POST['login'];

            //  data sanitized
            $login['user_firstName'] = $this->inputClean($login['user_firstName']);
            $login['user_lastName'] = $this->inputClean($login['user_lastName']);
            $login['user_location'] = $this->inputClean($login['user_location']);

            //  assume that the registration is valid
            $valid = true;
            $errors = [];


            if (empty($login['user_firstName'])) {
                $valid = false;
                $errors[] = 'Please enter your first name';
            }
            if (empty($login['user_lastName'])) {
                $valid = false;
                $errors[] = 'Please enter your last name';

            }
            if (empty($login['user_location'])) {
                $valid = false;
                $errors[] = 'Please enter your location';

            }
            if (empty($login['user_email'])) {
                $valid = false;
                $errors[] = 'Please enter your email';

            } else if (filter_var($login['user_email'], FILTER_VALIDATE_EMAIL) == false) {
                $valid = false;
                $errors[] = 'Invalid email address';
            } else if (count($this->loginTable->find('user_email', $login['user_email'])) > 0) {

                $valid = true;

            }

            if (empty($login['user_password'])) {
                $valid = false;
                $errors[] = 'Please enter a password';
            }

            if ($valid == true) {
                // Hash the password before saving it in the database
                $login['user_password'] = password_hash($login['user_password'], PASSWORD_DEFAULT);
                //  save method called on the loginTable passing in $login array
                $this->loginTable->save($login);
                //  session information is set
                $_SESSION['email'] = $login['user_email'];
                $_SESSION['location'] = $login['user_location'];
                $_SESSION['firstName'] = $login['user_firstName'];
                $_SESSION['lastName'] = $login['user_lastName'];

                if ($_SESSION['email'] === 'admin@admin.admin') {
                    header('location: index.php?action=admin');
                } else {
                    header('location: index.php?action=userPage');
                }
            }
        } else {
            if (isset($_GET['id'])) {

                $cleanID = $this->inputClean($_GET['id']);
                $login = $this->loginTable->findById($cleanID);

                $title = 'edit profile eRevive';
                $headLine = 'Edit your profile here';
            } else {
                $title = 'register eRevive';
                $headLine = 'create a profile';
            }

            $subHeadLine = 'user the form to sign into your account';

            return ['template' => 'register.html.php',
                'headLine' => $headLine,
                'subHeadline' => $subHeadLine,
                'title' => $title,
                'variables' => [

                    'login' => $login ?? null
                ]
            ];
        }

    }


    /**
     * @productNew method
     *  -   this is page allows users to crate a new listing an edit an old listing
     *  -   create a new product or edit an existing if the ID is set to $_GET then the page shows the existing product details in the form
     *      -   this is done by using teh findByID() method
     *  -   if no ID is set in the $_GET then the page shows a blank form and asks the user to create a new listing
     *  -   the form on the page submits to its self using the $_POST action
     *  -   if this is set the the page calls the save() method from database table
     *  -   if a Prod_id is set (i.e. the listing is being edited instead of created)
     *  -   the user is returned to the userPage else they are returned to the index page
     * -------------------- -------------------- --------------------
     **/
    public function productNew()
    {
        session_start();

        if (isset($_POST['prod'])) {
            // user array passed in from user form and login
            // each array has data associated with type_ in htmlPage


            $prod = $_POST['prod'];

            // calls teh save function via each table with type passed in as argument
            $this->prodTable->save($prod);

            // Checks if the value of the prod_id is set more than ''

            if ($prod['prod_id'] != '') {
                header('location: index.php?action=userPage');

            } else {
                header('location: index.php');

            }


        } else {
            if (isset($_GET['id'])) {


                $prod = $this->prodTable->findById($_GET['id']);


                $title = 'edit product listing eRevive';
                $headLine = 'Edit your listing here';
                $subHeadLine = 'change the required data in the form then submit';


            } else {
                $title = 'create product listing eRevive';
                $headLine = 'create a listing here';
                $subHeadLine = 'create a new product';
            }


            return ['template' => 'productEdit.html.php',
                'title' => $title,
                'headLine' => $headLine,
                'subHeadline' => $subHeadLine,
                'variables' => [
                    'user' => $user ?? null,
                    'prod' => $prod ?? null,
                ]
            ];
        }

    }


    private function inputClean($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = strip_tags($data);
        $data = htmlspecialchars($data);

        return $data;
    }


}

