<?php

class Database 
{
    public $mysql;

    public function __construct()
    {
        try {
            $this->mysql = $this->getConnection();
           
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }

    private function getConnection()
    {

        $host = "mysql:host=localhost";
        $user = "root";
        $pass = "root";
        $database = "dbname=elconsultorio";
        $pdo = new pdo($host, $database, $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $pdo;
    }
}

$test = new Database();
echo $test;
