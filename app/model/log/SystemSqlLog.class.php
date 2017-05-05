<?php

use Adianti\Log\AdiantiLoggerInterface;

/**
 * SystemSqllog Active Record
 * @author  <your-name-here>
 */
class SystemSqlLog extends TRecord implements AdiantiLoggerInterface
{
    const TABLENAME = 'system_sql_log';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('logdate');
        parent::addAttribute('login');
        parent::addAttribute('database_name');
        parent::addAttribute('sql_command');
        parent::addAttribute('statement_type');
    }
    
    /**
     * Writes an message in the global logger
     * @param  $message Message to be written
     */
    public function write($message)
    {
        $dbname = TTransaction::getDatabase();
        
        // avoid log of log
        if ($dbname !== 'log' AND (in_array(substr($message,0,6), array('INSERT', 'UPDATE', 'DELETE') ) ) )
        {
            $time = date("Y-m-d H:i:s");
            
            TTransaction::open('log');
            $object = new self;
            $object->logdate = $time;
            $object->login = TSession::getValue('login');
            $object->database_name = $dbname;
            $object->sql_command = $message;
            $object->statement_type = strtoupper(substr($message,0,6));
            $object->store();
            TTransaction::close();
        }
    }
}
