<div class="nav-left flex_column spaceBetween">

    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="index.php?action=categories">categories</a></li>
            <li><a href="index.php?action=search">search</a></li>
            <li><a href="index.php?action=showAll">show all</a></li>
        </ul>

    </nav>
    <nav>
        <ul>
        <li class="">Currently Logged in as</li>
            <hr>
        <li class="title"><a href="index.php?action=userPage"><?= $_SESSION['firstName'] . ' ' . $_SESSION['lastName']?></a></li>
            <hr>
        <li><a class="highlight" href="index.php?action=logout">logout</a></li>
        </ul>

    </nav>

    <div class="fixedBottom"><i class="fa fa-bars fa-3x" aria-hidden="true"></i>
<!--    <div class="fixedBottom"><a href="index.php?action=logout">logout</a></i>-->
    </div>
</div>
