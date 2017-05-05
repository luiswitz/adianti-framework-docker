<?php
/**
 * TableCell
 * Copyright (c) 2006-2010 Pablo Dall'Oglio
 * @author  Pablo Dall'Oglio <pablo [at] adianti.com.br>
 * @version 2.0, 2007-08-01
 */
class TAdiantiTableCell extends TAdiantiElement
{
    /**
     * Class Constructor
     * @param $value  TableCell content
     */
    public function __construct($value)
    {
        parent::__construct('td');
        parent::add($value);
    }
}
?>
