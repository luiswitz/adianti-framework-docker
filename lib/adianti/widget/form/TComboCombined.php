<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Form\TField;
use Adianti\Widget\Form\TEntry;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Base\TStyle;

/**
 * ComboBox Widget with an entry
 *
 * @version    5.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TComboCombined extends TField implements AdiantiWidgetInterface
{
    private $items; // array containing the combobox options
    private $text_name;
    
    /**
     * Class Constructor
     * @param  $name widget's name
     * @param  $text widget's name
     */
    public function __construct($name, $text_name)
    {
        // executes the parent class constructor
        parent::__construct($name);
        $this->text_name = $text_name;
        
        // creates the default field style
        $style1 = new TStyle('tcombo');
        $style1-> height          = '24px';
        $style1-> z_index         = '1';
        $style1->show();
        
        // creates a <select> tag
        $this->tag = new TElement('select');
        $this->tag->{'class'} = 'tcombo'; // CSS
    }
    
    /**
     * Returns the text widget's name
     */
    public function getTextName()
    {
        return $this->text_name;
    }
    
    /**
     * Define the text widget's name
     * @param $name A string containing the text widget's name
     */
    public function setTextName($name)
    {
        $this->text_name = $name;
    }
    
    /**
     * Add items to the combo box
     * @param $items An indexed array containing the combo options
     */
    public function addItems($items)
    {
        if (is_array($items))
        {
            $this->items = $items;
        }
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tcombocombined_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tcombocombined_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Clear the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function clearField($form_name, $field)
    {
        TScript::create( " tcombocombined_clear_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Shows the widget
     */
    public function show()
    {
        $tag = new TEntry($this->name);
        $tag->setEditable(FALSE);
        $tag->setProperty('id', $this->name);
        $tag->setSize(40);
        $tag->setProperty('onchange', "aux = document.getElementsByName('{$this->text_name}'); aux[0].value = this.value;");
        $tag->show();
        
        // define the tag properties
        $this->tag-> name  = $this->text_name;
        $this->tag-> onchange = "aux_entry = document.getElementById('{$this->name}'); aux_entry.value = this.value;";
        $this->setProperty('style', "width:{$this->size}px", FALSE); //aggregate style info
        $this->tag-> auxiliar = 1;
        
        // creates an empty <option> tag
        $option = new TElement('option');
        $option->add('');
        $option-> value = '0';   // valor da TAG
        // add the option tag to the combo
        $this->tag->add($option);
        
        if ($this->items)
        {
            // iterate the combobox items
            foreach ($this->items as $chave => $item)
            {
                // creates an <option> tag
                $option = new TElement('option');
                $option-> value = $chave;  // define the index
                $option->add($item);      // add the item label
                
                // verify if this option is selected
                if ($chave == $this->value)
                {
                    // mark as selected
                    $option-> selected = 1;
                }
                // add the option to the combo
                $this->tag->add($option);
            }
        }
        
        // verify whether the widget is editable
        if (!parent::getEditable())
        {
            // make the widget read-only
            $this->tag-> readonly = "1";
            $this->tag->{'class'} = 'tfield_disabled'; // CSS
        }
        // shows the combobox
        $this->tag->show();
    }
}
