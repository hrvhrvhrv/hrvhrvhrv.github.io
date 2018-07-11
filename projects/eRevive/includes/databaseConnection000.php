<?php

//   Database connection string
$servername = "localhost";
$username = "id171433_root";
$password = "password";
$database = "P@ssword1";

$pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

$pdo->setAttribute(PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION);