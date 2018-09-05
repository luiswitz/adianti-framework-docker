<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Form\TField;

/**
 * CheckButton widget
 *
 * @version    5.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TCheckButton extends TField implements AdiantiWidgetInterface
{
    private $indexValue;
    
    /**
     * Define the index value for check button
     * @index Index value
     */
    public function setIndexValue($index)
    {        
        $this->indexValue = $index;
    }
    
    /**
     * Shows the widget at the screen
     */
    public function show()
    {
        // define the tag properties for the checkbutton
        $this->tag->{'name'}  = $this->name;    // tag name
        $this->tag->{'type'}  = 'checkbox';     // input type
        $this->tag->{'value'} = $this->indexValue;   // value
        $this->tag->{'class'} = '';
        
        // compare current value with indexValue
        if ($this->indexValue == $this->value)
        {
            $this->tag->{'checked'} = '1';
        }
        
        // check whether the widget is non-editable
        if (!parent::getEditable())
        {
            // make the widget read-only
            //$this->tag-> disabled   = "1"; // the value don't post
            $this->tag->{'onclick'} = "return false;";
            $this->tag->{'style'}   = 'pointer-events:none';
        }
        
        // shows the tag
        $this->tag->show();
    }
}
