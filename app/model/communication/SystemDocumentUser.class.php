<?php
/**
 * SystemDocumentUser Active Record
 * @author  <your-name-here>
 */
class SystemDocumentUser extends TRecord
{
    const TABLENAME = 'system_document_user';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('document_id');
        parent::addAttribute('system_user_id');
    }


}
