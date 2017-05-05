<?php
/**
 * TableRow
 * Copyright (c) 2006-2010 Pablo Dall'Oglio
 * @author  Pablo Dall'Oglio <pablo [at] adianti.com.br>
 * @version 2.0, 2007-08-01
 */
class TAdiantiTableRow extends TAdiantiElement
{
    /**
     * Class Constructor
     */
    public function __construct()
    {
        parent::__construct('tr');
    }
    
    /**
     * Add a new cell (TTableCell) to the Table Row
     * @param  $value Cell Content
     * @return The created Table Cell
     */
    public function addCell($value)
    {
        // creates a new Table Cell
        $cell = new TAdiantiTableCell($value);
        parent::add($cell);
        // returns the cell object
        return $cell;
    }
}
?>
