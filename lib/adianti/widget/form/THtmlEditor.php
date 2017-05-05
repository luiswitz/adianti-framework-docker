<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TField;

/**
 * Html Editor
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class THtmlEditor extends TField implements AdiantiWidgetInterface
{
    protected $id;
    protected $size;
    protected $formName;
    private   $height;
    
    /**
     * Class Constructor
     * @param $name Widet's name
     */
    public function __construct($name)
    {
        parent::__construct($name);
        $this->id = 'THtmlEditor_'.mt_rand(1000000000, 1999999999);
        
        // creates a tag
        $this->tag = new TElement('textarea');
    }
    
    /**
     * Define the widget's size
     * @param  $width   Widget's width
     * @param  $height  Widget's height
     */
    public function setSize($width, $height = NULL)
    {
        $this->size   = $width;
        if ($height)
        {
            $this->height = $height;
        }
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " thtmleditor_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " thtmleditor_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Clear the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function clearField($form_name, $field)
    {
        TScript::create( " thtmleditor_clear_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Show the widget
     */
    public function show()
    {
        $this->tag->{'id'} = $this->id;
        $this->tag->{'class'} = 'thtmleditor';       // CSS
        $this->tag-> name  = $this->name;   // tag name
        
        // add the content to the textarea
        $this->tag->add(htmlspecialchars($this->value));
        TScript::create(" thtmleditor_start( '{$this->tag->{'id'}}', '{$this->size}', '{$this->height}' ); ");
        
        // check if the field is not editable
        if (!parent::getEditable())
        {
            TScript::create( " thtmleditor_disable_field('{$this->formName}', '{$this->name}'); " );
        }
        
        // show the tag
        $this->tag->show();
    }
}
