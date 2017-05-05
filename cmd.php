<?php
if (PHP_SAPI !== 'cli')
{
    die ('Access denied');
}

chdir(dirname(__FILE__));
require_once 'init.php';

parse_str($argv[1], $_REQUEST);
$class   = isset($_REQUEST['class'])    ? $_REQUEST['class']   : '';
$static  = isset($_REQUEST['static'])   ? $_REQUEST['static']  : '';
$method  = isset($_REQUEST['method'])   ? $_REQUEST['method']  : '';

try
{
    if (class_exists($class))
    {
        if (method_exists($class, $method))
        {
            if ($static)
            {
                $rf = new ReflectionMethod($class, $method);
                if ($rf->isStatic())
                {
                    call_user_func(array($class, $method),$_REQUEST);
                }
                else
                {
                    call_user_func(array(new $class($_GET), $method),$_REQUEST);
                }
            }
            else
            {
                call_user_func(array(new $class($_GET), $method),$_REQUEST);
            }
        }
        else
        {
            echo 'Error: ' . TAdiantiCoreTranslator::translate('Method ^1 not found', "$class::$method")."\n";
        }
    }
    else
    {
        echo 'Error: ' . TAdiantiCoreTranslator::translate('Class ^1 not found', $class)."\n";
    }
}
catch (Exception $e)
{
    echo 'Error: ' . $e->getMessage();
}
