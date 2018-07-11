<?php

//   Database connection string
$pdo = new PDO(
    'mysql:host=localhost:3306;dbname=erevive;charset=utf8',
    'root',
    'root');

$pdo->setAttribute(PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION);


