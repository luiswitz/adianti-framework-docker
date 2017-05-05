<?php
namespace Adianti\Core;

/**
 * Application config
 *
 * @version    4.0
 * @package    core
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class AdiantiApplicationConfig
{
    private static $config;
    
    /**
     * Load configuration from array
     */
    public static function load($config)
    {
        if (is_array($config))
        {
            self::$config = $config;
        }
    }
    
    /**
     * Export configuration
     */
    public static function get()
    {
        return self::$config;
    }
}