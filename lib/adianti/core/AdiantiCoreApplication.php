<?php
namespace Adianti\Core;

use ReflectionMethod;
use Exception;
use ErrorException;
use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TPage;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Dialog\TMessage;
use Adianti\Widget\Util\TExceptionView;

/**
 * Basic structure to run a web application
 *
 * @version    5.0
 * @package    core
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class AdiantiCoreApplication
{
    private static $router;
    
    public static function run($debug = FALSE)
    {
        $class   = isset($_REQUEST['class'])    ? $_REQUEST['class']   : '';
        $static  = isset($_REQUEST['static'])   ? $_REQUEST['static']  : '';
        $method  = isset($_REQUEST['method'])   ? $_REQUEST['method']  : '';
        
        $content = '';
        set_error_handler(array('AdiantiCoreApplication', 'errorHandler'));
        
        if (in_array(strtolower($class), array_map('strtolower', AdiantiClassMap::getInternalClasses()) ))
        {
            ob_start();
            new TMessage( 'error', AdiantiCoreTranslator::translate('The internal class ^1 can not be executed', " <b><i><u>{$class}</u></i></b>") );
            $content = ob_get_contents();
            ob_end_clean();
        }
        else if (class_exists($class))
        {
            if ($static)
            {
                $rf = new ReflectionMethod($class, $method);
                if ($rf-> isStatic ())
                {
                    call_user_func(array($class, $method), $_REQUEST);
                }
                else
                {
                    call_user_func(array(new $class($_REQUEST), $method), $_REQUEST);
                }
            }
            else
            {
                try
                {
                    $page = new $class( $_REQUEST );
                    ob_start();
                    $page->show( $_REQUEST );
	                $content = ob_get_contents();
	                ob_end_clean();
                }
                catch(Exception $e)
                {
                    ob_start();
                    if ($debug)
                    {
                        new TExceptionView($e);
                        $content = ob_get_contents();
                    }
                    else
                    {
                        new TMessage('error', $e->getMessage());
                        $content = ob_get_contents();
                    }
                    ob_end_clean();
                }
            }
        }
        else if (function_exists($method))
        {
            call_user_func($method, $_REQUEST);
        }
        else
        {
            new TMessage('error', AdiantiCoreTranslator::translate('Class ^1 not found', " <b><i><u>{$class}</u></i></b>") . '.<br>' . AdiantiCoreTranslator::translate('Check the class name or the file name').'.');
        }
        
        if (!$static)
        {
            echo TPage::getLoadedCSS();
        }
        echo TPage::getLoadedJS();
        
        echo $content;
    }
    
    /**
     * Set router callback
     */
    public static function setRouter(Callable $callback)
    {
        self::$router = $callback;
    }
    
    /**
     * Get router callback
     */
    public static function getRouter()
    {
        return self::$router;
    }
    
    /**
     * Execute a specific method of a class with parameters
     *
     * @param $class class name
     * @param $method method name
     * @param $parameters array of parameters
     */
    public static function executeMethod($class, $method = NULL, $parameters = NULL)
    {
        self::gotoPage($class, $method, $parameters);
    }
    
    /**
     * Goto a page
     *
     * @param $class class name
     * @param $method method name
     * @param $parameters array of parameters
     */
    public static function gotoPage($class, $method = NULL, $parameters = NULL, $callback = NULL)
    {
        $query = self::buildHttpQuery($class, $method, $parameters);
        
        TScript::create("__adianti_goto_page('{$query}');");
    }
    
    /**
     * Load a page
     *
     * @param $class class name
     * @param $method method name
     * @param $parameters array of parameters
     */
    public static function loadPage($class, $method = NULL, $parameters = NULL)
    {
        $query = self::buildHttpQuery($class, $method, $parameters);
        
        TScript::create("__adianti_load_page('{$query}');");
    }
    
    /**
     * Post data
     *
     * @param $class class name
     * @param $method method name
     * @param $parameters array of parameters
     */
    public static function postData($formName, $class, $method = NULL, $parameters = NULL)
    {
        $url = array();
        $url['class']  = $class;
        $url['method'] = $method;
        unset($parameters['class']);
        unset($parameters['method']);
        $url = array_merge($url, (array) $parameters);
        
        TScript::create("__adianti_post_data('{$formName}', '".http_build_query($url)."');");
    }
    
    /**
     * Build HTTP Query
     *
     * @param $class class name
     * @param $method method name
     * @param $parameters array of parameters
     */
    public static function buildHttpQuery($class, $method = NULL, $parameters = NULL)
    {
        $url = array();
        $url['class']  = $class;
        $url['method'] = $method;
        unset($parameters['class']);
        unset($parameters['method']);
        $query = http_build_query($url);
        $callback = self::$router;
        $short_url = null;
        
        if ($callback)
        {
            $query  = $callback($query, TRUE);
        }
        else
        {
            $query = 'index.php?'.$query;
        }
        
        if (strpos($query, '?') !== FALSE)
        {
            return $query . ( count($parameters)>0 ? '&'.http_build_query($parameters) : '' );
        }
        else
        {
            return $query . ( count($parameters)>0 ? '?'.http_build_query($parameters) : '' );
        }
    }
    
    /**
     * Reload application
     */
    public static function reload()
    {
        TScript::create("__adianti_goto_page('index.php')");
    }
    
    /**
     * Register URL
     *
     * @param $page URL to be registered
     */
    public static function registerPage($page)
    {
        TScript::create("__adianti_register_state('{$page}', 'user');");
    }
    
    /**
     * Handle Catchable Errors
     */
    public static function errorHandler($errno, $errstr, $errfile, $errline)
    {
        if ( $errno === E_RECOVERABLE_ERROR )
        {
            throw new ErrorException($errstr, $errno, 0, $errfile, $errline);
        	}
        	
        	return false;
    }
}
