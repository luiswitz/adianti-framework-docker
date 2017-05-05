<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Control\TPage;
use Adianti\Control\TAction;
use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TField;
use Exception;

/**
 * Multi Search Widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Matheus Agnes Dias
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TMultiSearch extends TField implements AdiantiWidgetInterface
{
    protected $id;
    protected $items;
    protected $size;
    protected $height;
    protected $minLength;
    protected $maxSize;
    protected $editable;
    protected $initialItems;
    protected $rawPostData;
    protected $changeAction;
    
    /**
     * Class Constructor
     * @param  $name Widget's name
     */
    public function __construct($name)
    {
        // executes the parent class constructor
        parent::__construct($name);
        $this->id   = 'tmultisearch_'.mt_rand(1000000000, 1999999999);

        $this->height = 100;
        $this->minLength = 5;
        $this->maxSize = 0;
        $this->rawPostData = FALSE;
        
        if (LANG !== 'en')
        {
            TPage::include_js('lib/adianti/include/tmultisearch/select2_locale_'.LANG.'.js');
        }
        
        // creates a <select> tag
        $this->tag = new TElement('input');
        $this->tag->{'type'} = 'hidden';
        $this->tag->{'component'} = 'multisearch';
        $this->tag->{'widget'} = 'tmultisearch';
    }
    
    /**
     * Define the action to be executed when the user changes the combo
     * @param $action TAction object
     */
    public function setChangeAction(TAction $action)
    {
        if ($action->isStatic())
        {
            $this->changeAction = $action;
        }
        else
        {
            $string_action = $action->toString();
            throw new Exception(AdiantiCoreTranslator::translate('Action (^1) must be static to be used in ^2', $string_action, __METHOD__));
        }
    }
    
    /**
     * Define to use raw post data
     */
    public function useRawPostData($bool)
    {
        $this->rawPostData = $bool;
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
     * Define the minimum length for search
     */
    public function setMinLength($length)
    {
        $this->minLength = $length;
    }

    /**
     * Define the maximum number of items that can be selected
     */
    public function setMaxSize($maxsize)
    {
        $this->maxSize = $maxsize;
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
     * Return the post data
     */
    public function getPostData()
    {
        if (isset($_POST[$this->name]))
        {
            $val = $_POST[$this->name];
            
            if ($this->rawPostData)
            {
                return $val;
            }
            
            if ($val)
            {
                return $this->treatData($val);
            }
            return '';
        }
        else
        {
            return '';
        }
    }
    
    /**
     * Treat string post data and return as indexed array
     */
    public function treatData($val)
    {
        $rows = explode('||', $val);
        $data = array();

        if (is_array($rows))
        {
            foreach ($rows as $row)
            {
                $columns = explode('::', $row);
                
                if (is_array($columns))
                {
                    $data[ $columns[0] ] = $columns[1];
                }
            }
        }
        return $data;
    }
    
    /**
     * Encode array data as a string
     */
    private function encodeData($data)
    {
        $return = '';
        if (is_array($data))
        {
            foreach ($data as $key => $value)
            {
                $return .= "{$key}::{$value}||";
            }
            $return = substr($return, 0, -2);
        }
        
        return $return;
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tmultisearch_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tmultisearch_disable_field('{$form_name}', '{$field}'); " );
    }

    /**
     * Define the field's value
     * @param $value An array the field's values
     */
    public function setValue($value)
    {
        if (!empty($value) AND is_string($value))
        {
            $value = $this->treatData($value);
        }
        $this->initialItems = $value;
        $this->value = $value;
    }
    /**
     * Shows the widget
     */
    public function show()
    {
        // define the tag properties
        $this->tag-> name  = $this->name;    // tag name
        $this->tag-> id  = $this->id;    // tag name
        
        if (strstr($this->size, '%') !== FALSE)
        {
            $this->setProperty('style', "width:{$this->size};", false); //aggregate style info
            $size  = "{$this->size}";
        }
        else
        {
            $this->setProperty('style', "width:{$this->size}px;", false); //aggregate style info
            $size  = "{$this->size}px";
        }
        
        $multiple = $this->maxSize == 1 ? 'false' : 'true';
        
        $load_items = 'undefined';
        
        if ($this->initialItems)
        {
            $new_items = array();
            foreach ($this->initialItems as $key => $item)
            {
                $new_item = array('id' => $key, 'text' => $item);
                $new_items[] = $new_item;
            }
            
            if ($multiple == 'true')
            {
                $load_items = json_encode($new_items);
            }
            else
            {
                $load_items = json_encode($new_item);
            }
        }

        $preitems_json = 'undefined';
        if ($this->items)
        {
            $preitems = array();
            foreach ($this->items as $key => $item)
            {
                $new_item = array('id' => $key, 'text' => $item);
                $preitems[] = $new_item;
            }
            $preitems_json = json_encode($preitems);
        }
        
        $search_word = AdiantiCoreTranslator::translate('Search');
        $change_action = 'function() {}';
        
        if ($this->editable)
        {
            if (isset($this->changeAction))
            {
                if (!TForm::getFormByName($this->formName) instanceof TForm)
                {
                    throw new Exception(AdiantiCoreTranslator::translate('You must pass the ^1 (^2) as a parameter to ^3', __CLASS__, $this->name, 'TForm::setFields()') );
                }
                
                $string_action = $this->changeAction->serialize(FALSE);
                $change_action = "function() { serialform=tmultisearch_get_form_data('{$this->formName}', '{$this->name}', '{$this->id}');
                                             __adianti_ajax_lookup('$string_action&'+serialform, this); }";
            }
            
            TScript::create(" tmultisearch_start( '{$this->id}', '{$this->minLength}', '{$this->maxSize}', '{$search_word}', $multiple, {$preitems_json}, '{$size}', '{$this->height}px', {$load_items}, $change_action ); ");
        }
        else
        {
            TScript::create(" tmultisearch_start( '{$this->id}', '{$this->minLength}', '{$this->maxSize}', '{$search_word}', $multiple, {$preitems_json}, '{$size}', '{$this->height}px', {$load_items}, $change_action ); ");
            TScript::create(" tmultisearch_disable_field( '{$this->formName}', '{$this->name}'); ");
        }
        
        $this->tag->show();
    }
}
