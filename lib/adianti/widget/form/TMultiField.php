<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TField;
use Adianti\Widget\Form\TLabel;
use Adianti\Widget\Form\TButton;
use Adianti\Widget\Form\TComboCombined;
use Adianti\Widget\Wrapper\TDBMultiSearch;
use Adianti\Widget\Container\TTable;
use Adianti\Widget\Container\TTableRow;
use Adianti\Widget\Container\THBox;

use StdClass;

/**
 * MultiField Widget: Takes a group of input fields and gives them the possibility to register many occurrences
 *
 * @version    5.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TMultiField extends TField implements AdiantiWidgetInterface
{
    private $fields;
    private $objects;
    private $height;
    private $width;
    private $className;
    private $orientation;
    protected $id;
    protected $name;
    protected $formName;
    
    /**
     * Class Constructor
     * @param $name Name of the widget
     */
    public function __construct($name)
    {
        // define some default properties
        self::setEditable(TRUE);
        self::setName($name);
        self::setId("tmultifield_" . mt_rand(1000000000, 1999999999));
        $this->orientation = 'vertical';
        $this->fields = array();
        $this->height = 100;
    }

    /**
     * Define form orientation
     * @param $orientation (vertical, horizontal)
     */
    public function setOrientation($orientation)
    {
        $this->orientation = $orientation;
    }
    
    /**
     * Define the name of the form to wich the multifield is attached
     * @param $name    A string containing the name of the form
     * @ignore-autocomplete on
     */
    public function setFormName($name)
    {
        parent::setFormName($name);
        
        if ($this->fields)
        {
            foreach($this->fields as $name => $field)
            {
                $obj = $field->{'field'};
                $obj->setFormName($this->formName);
            }
        }
    }
    
    /**
     * Add a field to the MultiField
     * @param $name      Widget's name
     * @param $text      Widget's label
     * @param $object    Widget
     * @param $size      Widget's size
     * @param $mandatory Mandatory field
     */
    public function addField($name, $text, TField $object, $size, $mandatory = FALSE)
    {
        $obj = new StdClass;
        $obj-> name      = $name;
        $obj-> text      = $text;
        $obj-> field     = $object;
        $obj-> size      = $size;
        $obj-> mandatory = (int) $mandatory;
        $this->width   += $size;
        $this->fields[$name] = $obj;
        
        if ($object instanceof TComboCombined)
        {
            $this->width += 20;
        }
    }
    
    /**
     * Define the class for the Active Records returned by this component
     * @param $class Class Name
     */
    public function setClass($class)
    {
        $this->className = $class;
    }
    
    /**
     * Returns the class defined by the setClass() method
     * @return the class for the Active Records returned by this component
     */
    public function getClass()
    {
        return $this->className;
    }
    
    /**
     * Define the MultiField content
     * @param $objects A Collection of Active Records
     */
    public function setValue($objects)
    {
        $this->objects = $objects;
        
        // This block is executed just to call the
        // getters like get_virtual_property()
        // inside the transaction (when the attribute)
        // is set, and not after all (during the show())
        if ($objects)
        {
            foreach ($this->objects as $object)
            {
                if ($this->fields)
                {
                    foreach($this->fields as $name => $obj)
                    {
                        $object->$name; // regular attribute
                        if ($obj-> field instanceof TComboCombined)
                        {
                            $attribute = $obj-> field->getTextName();
                            $object->$attribute; // auxiliar attribute
                        }
                        if ($obj-> field instanceof TDBMultiSearch)
                        {
                            if (is_array($object->$name))
                            {
                                $content = array();
                                foreach ($object->$name as $id => $value)
                                {
                                    $position = new StdClass;
                                    $position->{'id'} = $id;
                                    $position->{'text'} = $value;
                                    $content[] = $position;
                                }
                                $object->$name = json_encode($content);
                            }
                        }
                    }
                }
            }
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
            $className = $this->getClass() ? $this->getClass() : 'stdClass';
            $decoded   = JSON_decode(stripslashes($val));
            unset($items);
            unset($obj_item);
            $items = array();
            if (is_array($decoded))
            {
                foreach ($decoded as $std_object)
                {
                    $obj_item = new $className;
                    foreach ($std_object as $subkey => $value)
                    {
                        // substitui pq o ttable gera com quebra de linha no multifield
                        $obj_item->$subkey = utf8_encode(str_replace("\n",'',URLdecode($value)));
                        // verifica se é um json
                        if (is_array(json_decode($obj_item->$subkey)))
                        {
                            $content = json_decode($obj_item->$subkey);
                            $return = array();
                            foreach ($content as $position)
                            {
                                $return[ $position->{'id'} ] = $position->{'text'};
                            }
                            
                            $obj_item->$subkey = $return;
                        }
                    }
                    $items[] = $obj_item;
                }
            }
            return $items;
        }
        else
        {
            return '';
        }
    }
    
    /**
     * Define the MultiField height
     * @param $height Height in pixels
     */
    public function setHeight($height)
    {
        $this->height = $height;
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tmultifield_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tmultifield_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Clear the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function clearField($form_name, $field)
    {
        TScript::create( " tmultifield_clear_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Show the widget at the screen
     */
    public function show()
    {
        $wrapper = new TElement('div');
        $wrapper->{'mtf_name'} = $this->getName();
        // include the needed libraries and styles
        if ($this->fields)
        {
            $table = new TTable;
            
            $mandatories = array(); // mandatory
            $fields = array();
            $i=0;
            
            if ($this->orientation == 'horizontal')
            {
                $row_label = $table->addRow();
                $row_field = $table->addRow();
            }
            
            foreach($this->fields as $name => $obj)
            {
                if ($this->orientation == 'vertical')
                {
                    $row = $table->addRow();
                    $row_label = $row;
                    $row_field = $row;
                }
                
                $label = new TLabel($obj-> text);
                if ($obj-> mandatory)
                {
                    $label->setFontColor('red');
                }
                
                $row_label->addCell($label);
                $row_field->addCell($obj-> field);
                
                $mandatories[] = $obj->mandatory;
                $fields[] = $name;
                $post_fields[$name] = 1;
                $sizes[$name] = $obj-> size;
                
                $obj-> field->setName($this->name.'_'.$name);
                if (in_array(get_class($obj-> field), array('TComboCombined', 'Adianti\Widget\Form\TComboCombined')))
                {
                    $aux_name = $obj-> field->getTextName();
                    $aux_full_name = $this->name.'_'.$aux_name;
                    
                    $mandatories[] = 0;
                    $obj-> field->setTextName($aux_full_name);
                    
                    $fields[] = $aux_name;
                    $post_fields[$aux_name] = 1;
                    
                    // invert sizes
                    $sizes[$aux_name] = $obj-> size;
                    $sizes[$name] = 20;
                    $i++;
                }
                $i++;
            }
            $wrapper->add($table);
        }
        // check whether the widget is non-editable
        if (parent::getEditable())
        {
            // create three buttons to control the MultiField
            $add = new TButton("{$this->id}btnStore");
            $add->setLabel(AdiantiCoreTranslator::translate('Register'));
            $add->setImage('fa:angle-double-down');
            $add->addFunction("multifields['{$this->id}'].addRowFromFormFields()");
            
            $del = new TButton("{$this->id}btnDelete");
            $del->setLabel(AdiantiCoreTranslator::translate('Delete'));
            $del->setImage('fa:trash');
            
            $can = new TButton("{$this->id}btnCancel");
            $can->setLabel(AdiantiCoreTranslator::translate('Cancel'));
            $can->setImage('fa:times-circle');
            
            $hbox_buttons = new THBox;
            $hbox_buttons->{'style'} = 'margin-top:3px;margin-bottom:3px';
            $hbox_buttons->add($add);
            $hbox_buttons->add($del);
            $hbox_buttons->add($can);
            $wrapper->add($hbox_buttons);
        }
        
        // create the MultiField Panel
        $panel = new TElement('div');
        $panel->{'class'} = "multifieldDiv";
        
        $input = new THidden($this->name);
        $panel->add($input);
        
        // create the MultiField DataGrid Header
        $table = new TTable;
        $table->{'class'} = 'multifield';
        $table->{'name'} = 'tmultifield_'.$this->name;
        $table->{'id'} = $this->getId();
        $head = new TElement('thead');
        $table->add($head);
        $row = new TTableRow;
        $head->add($row);
        
        // fill the MultiField DataGrid
        if ($this->fields)
        {
            foreach ($this->fields as $obj)
            {
                $c = $obj-> text;
                if (in_array(get_class($obj-> field), array('TComboCombined', 'Adianti\Widget\Form\TComboCombined')))
                {
                    $cell=$row->addCell('ID');
                    $cell->{'width'} = '20px';
                    $cell->{'class'} = 'multifield_header';
                }
                $cell = $row->addCell($c);
                $cell->{'width'} = $obj-> size.'px';
                $cell->{'class'} = 'multifield_header';
            }
        }
        $body_height = $this->height - 34;
        $body = new TElement('tbody');
        $body->{'style'} = "height: {$body_height}px";
        $body->{'class'} = 'tmultifield_scrolling';
        $table->add($body);
        
        if ($this->objects)
        {
            foreach($this->objects as $obj)
            {
                if (isset($obj-> id))
                {
                    $row = new TTableRow;
                    $row-> dbId=$obj-> id;
                    $body->add($row);
                }
                else
                {
                    $row = new TTableRow;
                    $body->add($row);
                }
                if ($fields)
                {
                    foreach($fields as $name)
                    {
                        $cellValue = is_null($obj->$name) ? '' : $obj->$name;
                        $original = $cellValue;
                        if (is_array(json_decode($cellValue))) // se json
                        {
                            $content = json_decode($cellValue);
                            
                            $rows = array();
                            foreach ($content as $_row)
                            {
                                $rows[] = implode(':', array_values(get_object_vars($_row)));
                            }
                            $cellValue = implode(',', $rows);
                            $cell = $row->addCell($cellValue);
                            $cell->{'data'} = htmlspecialchars($original);
                        }
                        else
                        {
                            $cell = $row->addCell($cellValue);
                            $cell->{'data'} = $cellValue;
                        }

                        
                        if (isset($sizes[$name]))
                        {
                            $cell-> style='width:'.$sizes[$name].'px;';
                        }
                    }
                }
            }
        }
        $panel->add($table);
        $wrapper->add($panel);
        $wrapper->show();
        
        $fields_json = json_encode($fields);
        $mandatories_json = json_encode($mandatories);
        
        $objid = $this->getId();
        TScript::create(" tmultifield_start( '{$objid}', $fields_json, $mandatories_json, {$this->width},{$this->height} ) ");
    }
}
