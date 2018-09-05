<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Form\TField;

/**
 * Hidden field
 *
 * @version    5.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class THidden extends TField implements AdiantiWidgetInterface
{
    /**
     * Show the widget at the screen
     */
    public function show()
    {
        // set the tag properties
        $this->tag->{'id'}     = 'thidden_' . mt_rand(1000000000, 1999999999);
        $this->tag->{'name'}   = $this->name;  // tag name
        $this->tag->{'value'}  = $this->value; // tag value
        $this->tag->{'type'}   = 'hidden';     // input type
        $this->tag->{'widget'} = 'thidden';
        $this->tag->{'style'}  = "width:{$this->size}";
        
        // shows the widget
        $this->tag->show();
    }
}