<?php
/**
 * SystemAccessLog Active Record
 * @author  <your-name-here>
 */
class SystemAccessLog extends TRecord
{
    const TABLENAME = 'system_access_log';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('sessionid');
        parent::addAttribute('login');
        parent::addAttribute('login_time');
        parent::addAttribute('logout_time');
    }

    /**
     * Register login
     */
    public static function registerLogin()
    {
        TTransaction::open('log');
        $object = new self;
        $object->login = TSession::getValue('login');
        $object->sessionid = session_id();
        $object->login_time = date("Y-m-d H:i:s");
        $object->store();
        TTransaction::close();
    }
    
    /**
     * Register logout
     */
    public static function registerLogout()
    {
        TTransaction::open('log');
        // get logs by session id
        $logs = self::where('sessionid', '=', session_id())->load();
        if (count($logs)>0)
        {
            $log = $logs[0];
            if ($log instanceof SystemAccessLog);
            {
                $log->logout_time = date("Y-m-d H:i:s");
            }
            $log->store();
        }
        TTransaction::close();
    }
    
    /**
     *
     */
    public static function getStatsByDay()
    {
        TTransaction::open('log');
        // get logs by session id
        $logs = self::where('login_time', '>=', date('Y-m-01'))->where('login_time', '<=', date('Y-m-t'))->load();
        $accesses = array();
        
        if (count($logs)>0)
        {
            $accesses = array();
            foreach ($logs as $log)
            {
                $day = substr($log->login_time,8,2);
                if (isset($accesses[$day]))
                {
                    $accesses[$day] ++;
                }
                else
                {
                    $accesses[$day] = 1;
                }
            }
        }
        
        TTransaction::close();
        return $accesses;
    }
}
