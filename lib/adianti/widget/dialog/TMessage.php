<?php
namespace Adianti\Widget\Dialog;

use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Base\TScript;

/**
 * Message Dialog
 *
 * @version    5.0
 * @package    widget
 * @subpackage dialog
 * @author     Pablo Dall'Oglio
 * @author     Victor Feitoza <vfeitoza [at] gmail.com> (process action after OK)
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TMessage
{
    /**
     * Class Constructor
     * @param $type    Type of the message (info, error)
     * @param $message Message to be shown
     * @param $action  Action to be processed when closing the dialog
     * @param $title_msg  Dialog Title
     */
    public function __construct($type, $message, TAction $action = NULL, $title_msg = '')
    {
        $title    = $title_msg ? $title_msg : ( $type == 'info' ? AdiantiCoreTranslator::translate('Information') : AdiantiCoreTranslator::translate('Error'));
        $callback = "function () {}";
        
        if ($action)
        {
            $callback = "function () { __adianti_load_page('{$action->serialize()}') }";
        }
        
        $title = addslashes($title);
        $message = addslashes($message);
        
        if ($type == 'info')
        {
            TScript::create("__adianti_message('{$title}', '{$message}', $callback)");
        }
        else
        {
            TScript::create("__adianti_error('{$title}', '{$message}', $callback)");
        }
    }
}
