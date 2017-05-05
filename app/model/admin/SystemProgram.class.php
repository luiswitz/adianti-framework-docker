<?php
/**
 * System_program Active Record
 * @author  <your-name-here>
 */
class SystemProgram extends TRecord
{
    const TABLENAME = 'system_program';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    // use SystemChangeLogTrait;
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL)
    {
        parent::__construct($id);
        parent::addAttribute('name');
        parent::addAttribute('controller');
    }
}
