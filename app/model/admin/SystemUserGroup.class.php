<?php
/**
 * System_user_group Active Record
 * @author  <your-name-here>
 */
class SystemUserGroup extends TRecord
{
    const TABLENAME = 'system_user_group';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL)
    {
        parent::__construct($id);
        parent::addAttribute('system_user_id');
        parent::addAttribute('system_group_id');
    }
}
?>