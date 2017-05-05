<?php
/**
 * SystemDocumentCategory Active Record
 * @author  <your-name-here>
 */
class SystemDocumentCategory extends TRecord
{
    const TABLENAME = 'system_document_category';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('name');
    }


}
