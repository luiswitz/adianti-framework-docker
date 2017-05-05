<?php
/**
 * SystemDocumentGroup Active Record
 * @author  <your-name-here>
 */
class SystemDocumentGroup extends TRecord
{
    const TABLENAME = 'system_document_group';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('document_id');
        parent::addAttribute('system_group_id');
    }


}
