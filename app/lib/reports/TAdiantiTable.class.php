<?php
/**
 * Table Container
 * Copyright (c) 2006-2010 Pablo Dall'Oglio
 * @author  Pablo Dall'Oglio <pablo [at] adianti.com.br>
 * @version 2.0, 2007-08-01
 */
class TAdiantiTable extends TAdiantiElement
{
    /**
     * Class Constructor
     */
    public function __construct()
    {
        parent::__construct('table');
    }

    /**
     * Add a new row (TTableRow object) to the table
     */
    public function addRow()
    {
        // creates a new Table Row
        $row = new TAdiantiTableRow;
        // add this row to the table element
        parent::add($row);
        return $row;
    }
}
?>
