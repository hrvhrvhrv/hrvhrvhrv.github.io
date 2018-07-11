<?php

class DatabaseTable
{

    private $pdo;
    private $table;
    private $primaryKey;

    /**
     * -------------------- -------------------- --------------------
     * class constructor method
     *
     * constructor always set at the top of a class
     * when an instance of the databaseTable class is created the three arguments must be set
     *  - the word before the variable tells PHP what type of value the variable must be set with
     *  - doing this reduces the possibilities of BUGS or ERRORS form setting the wrong value
     *  - the three $this statements then set the values against variables which are set every time a database table is called
     * -------------------- -------------------- --------------------
     **/
    public function __construct(PDO $pdo,
                                string $table,
                                string $primaryKey)
    {
        $this->pdo = $pdo;
        $this->table = $table;
        $this->primaryKey = $primaryKey;
    }

    /**
     * -------------------- -------------------- --------------------
     * @query method
     *
     *  -   Query method prepares the sql statement and parameters values to be executed in the server
     *  -   a PDO connection instance is called form database connection include and the statement prepared to be executed.
     *  -   this method is private and can only be called by methods within this databaseTable class
     *  -   it is called by ever method that connects to the database
     * -------------------- -------------------- --------------------
     **/
    private function query($sql, $parameters = [])
    {
        $query = $this->pdo->prepare($sql);
        $query->execute($parameters);
        return $query;
    }

//    ----------
//      *****
//      CRUD
//      *****
//    ----------

    /**
     * -------------------- -------------------- --------------------
     * @save method
     *  -   this method has a vale of a record passed in by the controller page
     *  -   the try catch statement checks to see if the primary key value has been set
     *  -   if it has the update method is called
     *  -   if the primary key is empty no previous record exists so the insert method is called
     * -------------------- -------------------- --------------------
     **/
    public function save($record)
    {
        try {
            if ($record[$this->primaryKey] == '') {
                $record[$this->primaryKey] = null;
            }
            $this->insert($record);
        } catch (PDOException $e) {
            $this->update($record);
        }
    }

    /**
     * -------------------- -------------------- --------------------
     * @insert method
     *  -   takes in an array argument called fields which is then used to construct a SQL query
     *  -   the foreach loop includes each key value pair of the array in the SQL query
     *  -   the rtrim removes the last ',' added to the SQL query by the foreach loop
     *  -   this makes it the correct format to pass to the private query function
     * -------------------- -------------------- --------------------
     **/
    private function insert($fields)
    {
        $query = 'INSERT INTO `' . $this->table . '` (';
        foreach ($fields as $key => $value) {
            $query .= '`' . $key . '`,';
        }
        $query = rtrim($query, ',');
        $query .= ') VALUES (';
        foreach ($fields as $key => $value) {
            $query .= ':' . $key . ',';
        }
        $query = rtrim($query, ',');
        $query .= ')';
        $this->query($query, $fields);
    }

    /**
     * -------------------- -------------------- --------------------
     * @update method
     *  -   this method preforms the wild card search
     *  -   the value is the search term passed in on the site controller
     *  -   the like where or like where statement used to perform wild card in all fields of the table
     *  -   private method query is then called
     * -------------------- -------------------- --------------------
     **/
    private function update($fields)
    {
        $query = ' UPDATE `' . $this->table . '` SET ';
        foreach ($fields as $key => $value) {
            $query .= '`' . $key . '` = :' . $key . ',';
        }
        $query = rtrim($query, ',');
        $query .= ' WHERE `' . $this->primaryKey . '` = :primaryKey';

        // the primaryKey set here is what checks to insert or save in the save function
        $fields['primaryKey'] = $fields[$this->primaryKey];
        $this->query($query, $fields);
    }

    /**
     * -------------------- -------------------- --------------------
     * @delete method
     *  -   this method preforms deletes records based on their ID
     *  -   the value is the id of user or product passed in on the site controller
     *  -   private method query is then called taking table, primary key and id as arguments
     * -------------------- -------------------- --------------------
     **/
    public function delete($id)
    {
        $parameters = [':id' => $id];
        $this->query('DELETE FROM `' . $this->table . '` WHERE`' . $this->primaryKey . '` = :id', $parameters);
    }

//    --------------------
//      *****
//      Database Interrogation
//      *****
//    --------------------

    /**
     * -------------------- -------------------- --------------------
     * @find method
     *  -   this method selects all from the table in the site controller its called from
     *  -   where the column argument is passed in on the call and the like value likewise
     *  -   private method query is then called
     * -------------------- -------------------- --------------------
     **/
//  currently find is an unused function
    public function find($column, $value)
    {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE ' .
            $column . ' LIKE :value';
        $parameters = [
            'value' => $value
        ];
        $query = $this->query($query, $parameters);
        return $query->fetchAll();
    }

    /**
     * -------------------- -------------------- --------------------
     * @findByID method
     *  -   Value passed in on the site controller
     *  -   SQL query set to select all from 'this table' - set from the site controller
     *  -   Vales is st to the key value of 'value' so variables can be set as part of the query function call
     * -------------------- -------------------- --------------------
     **/
    public function findById($value)
    {
        $query = 'SELECT * FROM `' . $this->table . '` WHERE `' .
            $this->primaryKey . '` = :value';
        $parameters = [
            'value' => $value
        ];
        $query = $this->query($query, $parameters);
        return $query->fetch();
    }




    /**
     * -------------------- -------------------- --------------------
     * @findProd method
     *  -   this method preforms the wild card search
     *  -   the value is the search term passed in on the site controller
     *  -   the like where or like where statement used to perform wild card in all fields of the table
     *  -   private method query is then called
     * -------------------- -------------------- --------------------
     **/
    public function findProd($value)
    {
        $query = 'SELECT * FROM ' . $this->table .

            ' WHERE `prod_brand`LIKE :value
            OR `prod_name` LIKE  :value
            OR `prod_category` LIKE :value 
            OR `prod_age` LIKE :value 
            OR `prod_price` LIKE :value';

        $parameters = [
            'value' => $value
        ];
        $query = $this->query($query, $parameters);
        return $query->fetchAll();
    }

    /**
     * -------------------- -------------------- --------------------
     * @findAll method
     *  -   this method finds all values from a table
     *
     * -------------------- -------------------- --------------------
     **/
    public function findAll()
    {
        $result = $this->query('SELECT * FROM ' .
            $this->table);
        return $result->fetchAll();
    }

    /**
     * -------------------- -------------------- --------------------
     * @findAll method
     *  -   this method finds all values from a table limited to a set number
     *  -   this method is used on the homepage to limit numbe rof products shown to 12
     *
     * -------------------- -------------------- --------------------
     **/
    public function findAllLimit($nums)
    {
        $result = $this->query('SELECT * FROM ' .
            $this->table . '  LIMIT ' . $nums);
        return $result->fetchAll();
    }


    /**
     * -------------------- -------------------- --------------------
     * @totalVal method
     *  -   Has a value for column name passed in on the siteController call
     *  -   returns the sum of the prod_value to show total value of items in the table
     * -------------------- -------------------- --------------------
     **/
    public function totalVal($value)
    {
        $parameters = [
            'value' => $value
        ];
        $query = $this->query('SELECT SUM(:value) FROM `' . $this->table . '`', $parameters);
//        $query = $this->query($query, $parameters);
        return $query->fetch();
    }
}

