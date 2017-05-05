<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Form\TField;

/**
 * RadioButton Widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TRadioButton extends TField implements AdiantiWidgetInterface
{
    private $checked;
   
    /**
     * Show the widget at the screen
     */
    public function show()
    {
        // define the tag properties
        $this->tag->{'name'}  = $this->name;
        $this->tag->{'value'} = $this->value;
        $this->tag->{'type'}  = 'radio';
        $this->tag->{'class'} = '';
        
        // verify if the field is not editable
        if (!parent::getEditable())
        {
            // make the widget read-only
            //$this->tag-> disabled   = "1"; // the value don't post
            $this->tag->{'onclick'} = "return false;";
            $this->tag->{'style'}   = 'pointer-events:none';
        }
        // show the tag
        $this->tag->show();
    }
}
