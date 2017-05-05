<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TEntry;

/**
 * Color Widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TColor extends TEntry implements AdiantiWidgetInterface
{
    private $mask;
    protected $id;
    protected $size;
    protected $changeFunction;
    
    /**
     * Class Constructor
     * @param $name Name of the widget
     */
    public function __construct($name)
    {
        parent::__construct($name);
        $this->id = 'tcolor_'.mt_rand(1000000000, 1999999999);
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tcolor_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tcolor_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Set change function
     */
    public function setChangeFunction($function)
    {
        $this->changeFunction = $function;
    }
    
    /**
     * Shows the widget at the screen
     */
    public function show()
    {
        $wrapper = new TElement('div');
        $wrapper->{'class'} = 'input-group color-div';
        $wrapper->{'style'} = 'float:inherit';
        
        $span = new TElement('span');
        $span->{'class'} = 'input-group-addon tcolor';
        
        if (parent::getEditable())
        {
            $outer_size = 'undefined';
            if (strstr($this->size, '%') !== FALSE)
            {
                $outer_size = $this->size;
                $this->size = '100%';
            }
            TScript::create(" tcolor_start('{$this->id}', '{$outer_size}', function(color) { {$this->changeFunction} }); ");
        }
        
        $i = new TElement('i');
        $i->{'class'} = 'tcolor-icon';
        $span->add($i);
        ob_start();
        parent::show();
        $child = ob_get_contents();
        ob_end_clean();
        $wrapper->add($child);
        $wrapper->add($span);
        $wrapper->show();
    }
}
