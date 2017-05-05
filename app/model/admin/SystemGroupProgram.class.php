<?php
/**
 * System_group_program Active Record
 * @author  <your-name-here>
 */
class SystemGroupProgram extends TRecord
{
    const TABLENAME = 'system_group_program';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL)
    {
        parent::__construct($id);
        parent::addAttribute('system_group_id');
        parent::addAttribute('system_program_id');
    }
}
?>