<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TField;
use Adianti\Widget\Form\THidden;

use Adianti\Control\TAction;
use Adianti\Core\AdiantiCoreTranslator;
use Exception;

/**
 * FileChooser widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Nataniel Rabaioli
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TMultiFile extends TField implements AdiantiWidgetInterface
{
    protected $id;
    protected $height;
    protected $completeAction;
    protected $uploaderClass;
    
    public function __construct($name)
    {
        parent::__construct($name);
        $this->id = $this->name . '_' . mt_rand(1000000000, 1999999999);
        $this->height = 25;
        $this->uploaderClass = 'AdiantiUploaderService';
    }
    
    public function setService($service)
    {
        $this->uploaderClass = $service;
    }
    
    public function setSize($width, $height = NULL)
    {
        $this->size   = $width;
    }
    
    public function setHeight($height)
    {
        $this->height = $height;
    }
    
    /**
     * Show the widget at the screen
     */
    public function show()
    {
        // define the tag properties
        $this->tag-> id    = $this->id;
        $this->tag-> name  = 'file_' . $this->name.'[]';  // tag name
        $this->tag-> receiver  = $this->name;  // tag name
        $this->tag-> value = $this->value; // tag value
        $this->tag-> type  = 'file';       // input type
        $this->tag-> multiple = '1';
        
        if (strstr($this->size, '%') !== FALSE)
        {
            $this->setProperty('style', "width:{$this->size};height:{$this->height}", false); //aggregate style info
        }
        else
        {
            $this->setProperty('style', "width:{$this->size}px;height:{$this->height}px", false); //aggregate style info
        }
        
        $complete_action = "'undefined'";
        
        // verify if the widget is editable
        if (parent::getEditable())
        {
            if (isset($this->completeAction))
            {
                if (!TForm::getFormByName($this->formName) instanceof TForm)
                {
                    throw new Exception(AdiantiCoreTranslator::translate('You must pass the ^1 (^2) as a parameter to ^3', __CLASS__, $this->name, 'TForm::setFields()') );
                }
                $string_action = $this->completeAction->serialize(FALSE);
                
                $complete_action = "function() { __adianti_post_lookup('{$this->formName}', '{$string_action}', this, 'callback'); }";
            }
        }
        else
        {
            // make the field read-only
            $this->tag-> readonly = "1";
            $this->tag-> type = 'text';
            $this->tag->{'class'} = 'tfield_disabled'; // CSS
        }
        
        $id_div = mt_rand(1000000000, 1999999999);
        
        $div = new TElement('div');
        $div-> style="width:{$this->size}px;";
        $div-> id = 'div_file_'.$id_div;
        
        $divParciais = new TElement('div');
        $divParciais-> style = 'width:100%;';
        $divParciais-> id = 'div_parciais_'.$id_div;
        
        foreach( (array)$this->value as $val )
        {
            $hdFileName = new THidden($this->name.'[]');
            $hdFileName->setValue( $val );
            
            $div->add( $hdFileName );
        }
                
        $div->add( $this->tag );
        $div->add( $divParciais );
        $div->show();
        
        $action = "engine.php?class={$this->uploaderClass}";
        
        TScript::create(" tmultifile_start( '{$this->tag-> id}', '{$action}', '{$divParciais-> id}', {$complete_action});");
    }
    
    /**
     * Define the action to be executed when the user leaves the form field
     * @param $action TAction object
     */
    function setCompleteAction(TAction $action)
    {
        if ($action->isStatic())
        {
            $this->completeAction = $action;
        }
        else
        {
            $string_action = $action->toString();
            throw new Exception(AdiantiCoreTranslator::translate('Action (^1) must be static to be used in ^2', $string_action, __METHOD__));
        }
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tmultifile_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tmultifile_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Clear the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function clearField($form_name, $field)
    {
        TScript::create( " tmultifile_clear_field('{$form_name}', '{$field}'); " );
    }
}
