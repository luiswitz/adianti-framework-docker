<?php
namespace Adianti\Database;

use Adianti\Core\AdiantiCoreTranslator;
use PDO;
use Exception;

/**
 * Singleton manager for database connections
 *
 * @version    5.0
 * @package    database
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
final class TConnection
{
    /**
     * Class Constructor
     * There'll be no instances of this class
     */
    private function __construct() {}
    
    /**
     * Opens a database connection
     * 
     * @param $database Name of the database (an INI file).
     * @return          A PDO object if the $database exist,
     *                  otherwise, throws an exception
     * @exception       Exception
     *                  if the $database is not found
     */
    public static function open($database)
    {
        $dbinfo = self::getDatabaseInfo($database);
        
        if (!$dbinfo)
        {
            // if the database doesn't exists, throws an exception
            throw new Exception(AdiantiCoreTranslator::translate('File not found') . ': ' ."'{$database}.ini'");
        }
        
        return self::openArray( $dbinfo );
    }
    
    /**
     * Opens a database connection from array with db info
     * 
     * @param $db Array with database info
     * @return          A PDO object
     */
    public static function openArray($db)
    {
        // read the database properties
        $user  = isset($db['user']) ? $db['user'] : NULL;
        $pass  = isset($db['pass']) ? $db['pass'] : NULL;
        $name  = isset($db['name']) ? $db['name'] : NULL;
        $host  = isset($db['host']) ? $db['host'] : NULL;
        $type  = isset($db['type']) ? $db['type'] : NULL;
        $port  = isset($db['port']) ? $db['port'] : NULL;
        $char  = isset($db['char']) ? $db['char'] : NULL;
        $flow  = isset($db['flow']) ? $db['flow'] : NULL;
        $type  = strtolower($type);
        
        // each database driver has a different instantiation process
        switch ($type)
        {
            case 'pgsql':
                $port = $port ? $port : '5432';
                $conn = new PDO("pgsql:dbname={$name};user={$user}; password={$pass};host=$host;port={$port}");
                if(!empty($char))
                {
                    $conn->exec("SET CLIENT_ENCODING TO '{$char}';");
                }
                break;
            case 'mysql':
                $port = $port ? $port : '3306';
                if ($char == 'ISO')
                {
                    $conn = new PDO("mysql:host={$host};port={$port};dbname={$name}", $user, $pass);
                }
                else
                {
                    $conn = new PDO("mysql:host={$host};port={$port};dbname={$name}", $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
                }
                break;
            case 'sqlite':
                $conn = new PDO("sqlite:{$name}");
                $conn->query('PRAGMA foreign_keys = ON'); // referential integrity must be enabled
                break;
            case 'ibase':
            case 'fbird':
                $db_string = empty($port) ? "{$host}:{$name}" : "{$host}/{$port}:{$name}";
                $charset = $char ? ";charset={$char}" : '';
                $conn = new PDO("firebird:dbname={$db_string}{$charset}", $user, $pass);
                break;
            case 'oracle':
                $port    = $port ? $port : '1521';
                $charset = $char ? ";charset={$char}" : '';
                $conn = new PDO("oci:dbname={$host}:{$port}/{$name}{$charset}", $user, $pass);
                if (isset($db['date']))
                {
                    $date = $db['date'];
                    $conn->query("ALTER SESSION SET NLS_DATE_FORMAT = '{$date}'");
                }
                if (isset($db['time']))
                {
                    $time = $db['time'];
                    $conn->query("ALTER SESSION SET NLS_TIMESTAMP_FORMAT = '{$time}'");
                }
                if (isset($db['nsep']))
                {
                    $nsep = $db['nsep'];
                    $conn->query("ALTER SESSION SET NLS_NUMERIC_CHARACTERS = '{$nsep}'");
                }
                break;
            case 'mssql':
                if (OS == 'WIN')
                {
                    $conn = new PDO("sqlsrv:Server={$host};Database={$name}", $user, $pass);
                }
                else
                {
                    if ($port)
                    {
                        $conn = new PDO("dblib:host={$host}:{$port};dbname={$name}", $user, $pass);
                    }
                    else
                    {
                        $conn = new PDO("dblib:host={$host};dbname={$name}", $user, $pass);
                    }
                }
                break;
            case 'dblib':
                $port = $port ? $port : '1433';
                $conn = new PDO("dblib:host={$host},{$port};dbname={$name}", $user, $pass);
                break;
            default:
                throw new Exception(AdiantiCoreTranslator::translate('Driver not found') . ': ' . $type);
                break;
        }
        
        // define wich way will be used to report errors (EXCEPTION)
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        if ($flow == '1')
        {
            $conn->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);
        }
        
        // return the PDO object
        return $conn;
    }
    
    /**
     * Returns the database information as an array
     * @param $database INI File
     */
    public static function getDatabaseInfo($database)
    {
        // check if the database configuration file exists
        if (file_exists("app/config/{$database}.ini"))
        {
            // read the INI and retuns an array
            return parse_ini_file("app/config/{$database}.ini");
        }
        else
        {
            return FALSE;
        }
    }
}
