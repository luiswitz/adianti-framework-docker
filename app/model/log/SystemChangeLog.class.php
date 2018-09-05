<?php
/**
 * SystemChangeLog
 *
 * @version    1.0
 * @package    model
 * @subpackage log
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemChangeLog extends TRecord
{
    const TABLENAME    = 'system_change_log';
    const PRIMARYKEY   = 'id';
    const IDPOLICY     = 'max'; // {max, serial}
    
    /**
     * Register a change log
     */
    public static function register($activeRecord, $lastState, $currentState)
    {
        $table = $activeRecord->getEntity();
        $pk    = $activeRecord->getPrimaryKey();
        
        TTransaction::open('log');
        
        foreach ($lastState as $key => $value)
        {
            if (!isset($currentState[$key]))
            {
                // deleted
                $log = new self;
                $log->tablename  = $table;
                $log->logdate    = date('Y-m-d H:i:s');
                $log->login      = TSession::getValue('login');
                $log->primarykey = $pk;
                $log->pkvalue    = $activeRecord->$pk;
                $log->operation  = 'deleted';
                $log->columnname = $key;
                $log->oldvalue   = (string) $value;
                $log->newvalue   = '';
                $log->store();
            }
        }
        
        foreach ($currentState as $key => $value)
        {
            if (isset($lastState[$key]) AND ($value != $lastState[$key]))
            {
                // changed
                $log = new self;
                $log->tablename  = $table;
                $log->logdate    = date('Y-m-d H:i:s');
                $log->login      = TSession::getValue('login');
                $log->primarykey = $pk;
                $log->pkvalue    = $activeRecord->$pk;
                $log->operation  = 'changed';
                $log->columnname = $key;
                $log->oldvalue   = (string) $lastState[$key];
                $log->newvalue   = (string) $value;
                $log->store();
            }
            if (!isset($lastState[$key]) AND !empty($value))
            {
                // created
                $log = new self;
                $log->tablename  = $table;
                $log->logdate    = date('Y-m-d H:i:s');
                $log->login      = TSession::getValue('login');
                $log->primarykey = $pk;
                $log->pkvalue    = $activeRecord->$pk;
                $log->operation  = 'created';
                $log->columnname = $key;
                $log->oldvalue   = '';
                $log->newvalue   = (string) $value;
                $log->store();
            }
        }
        
        TTransaction::close();
    }
}
