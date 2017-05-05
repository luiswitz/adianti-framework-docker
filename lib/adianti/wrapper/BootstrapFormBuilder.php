<?php
namespace Adianti\Wrapper;

use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TForm;
use Adianti\Widget\Form\TLabel;
use Adianti\Widget\Form\TButton;
use Adianti\Widget\Form\THidden; 
use Adianti\Widget\Form\AdiantiFormInterface;
use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Form\TSeekButton;

use stdClass;
use Exception;

/**
 * Bootstrap form builder for Adianti Framework
 *
 * @version    4.0
 * @package    wrapper
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class BootstrapFormBuilder implements AdiantiFormInterface
{
    private $decorated;
    private $tabcontent;
    private $tabcurrent;
    private $current_page;
    private $properties;
    private $actions;
    private $title;
    
    /**
     * Constructor method
     * @param $name form name
     */
    public function __construct($name = 'my_form')
    {
        $this->decorated    = new TForm($name);
        $this->tabcurrent   = NULL;
        $this->current_page = 0;
        $this->actions      = array();
    }
    
    /**
     * Add a form title
     * @param $title Form title
     */
    public function setFormTitle($title)
    {
        $this->title = $title;
    }
    
    /**
     * Define the current page to be shown
     * @param $i An integer representing the page number (start at 0)
     */
    public function setCurrentPage($i)
    {
        $this->current_page = $i;
    }
    
    /**
     * Redirect calls to decorated object
     */
    public function __call($method, $parameters)
    {
        return call_user_func_array(array($this->decorated, $method),$parameters);
    }
    
    /**
     * Redirect assigns to decorated object
     */
    public function __set($property, $value)
    {
        return $this->decorated->$property = $value;
    }
    
    /**
     * Define a field property
     * @param $name  Property Name
     * @param $value Property Value
     */
    public function setProperty($name, $value, $replace = TRUE)
    {
        $this->properties[$name] = $value;
    }
    
    /**
     * Set form name
     * @param $name Form name
     */
    public function setName($name)
    {
        return $this->decorated->setName($name);
    }
    
    /**
     * Get form name
     */
    public function getName()
    {
        return $this->decorated->getName();
    }
    
    /**
     * Add form field
     * @param $field Form field
     */
    public function addField(AdiantiWidgetInterface $field)
    {
        return $this->decorated->addField($field);
    }
    
    /**
     * Del form field
     * @param $field Form field
     */
    public function delField(AdiantiWidgetInterface $field)
    {
        return $this->decorated->delField($field);
    }
    
    /**
     * Set form fields
     * @param $fields Array of Form fields
     */
    public function setFields($fields)
    {
        return $this->decorated->setFields($fields);
    }
    
    /**
     * Return form field
     * @param $name Field name
     */
    public function getField($name)
    {
        return $this->decorated->getField($name);
    }
    
    /**
     * Return form fields
     */
    public function getFields()
    {
        return $this->decorated->getFields();
    }
    
    /**
     * Clear form
     */
    public function clear()
    {
        return $this->decorated->clear();
    }
    
    /**
     * Set form data
     * @param $object Data object
     */
    public function setData($object)
    {
        return $this->decorated->setData($object);
    }
    
    /**
     * Get form data
     * @param $class Object type of return data
     */
    public function getData($class = 'StdClass')
    {
        return $this->decorated->getData($class);
    }
    
    /**
     * Validate form data
     */
    public function validate()
    {
        return $this->decorated->validate();
    }
    
    /**
     * Append a notebook page
     * @param $title Tab title
     */
    public function appendPage($title)
    {
        $this->tabcurrent = $title;
        $this->tabcontent[$title] = array();
    }
    
    /**
     * Add form fields
     * @param mixed $fields,... Form fields
     */
    public function addFields()
    {
        $args = func_get_args();
        
        $this->validateInlineArguments($args, 'addFields');
        
        // object that represents a row
        $row = new stdClass;
        $row->{'content'} = $args;
        $row->{'type'}    = 'fields';
        
        if ($args)
        {
            $this->tabcontent[$this->tabcurrent][] = $row;
            
            foreach ($args as $slot)
            {
                foreach ($slot as $field)
                {
                    if ($field instanceof AdiantiWidgetInterface)
                    {
                        $this->decorated->addField($field);
                    }
                }
            }
        }
        
        // return, because the user may fill aditional attributes
        return $row;
    }
    
    /**
     * Add a form content
     * @param mixed $content,... Form content
     */
    public function addContent()
    {
        $args = func_get_args();
        
        $this->validateInlineArguments($args, 'addContent');
        
        // object that represents a row
        $row = new stdClass;
        $row->{'content'} = $args;
        $row->{'type'}    = 'content';
        
        if ($args)
        {
            $this->tabcontent[$this->tabcurrent][] = $row;
        }
        
        // return, because the user may fill aditional attributes
        return $row;
    }
    
    /**
     * Validate argument type
     * @param $args Array of arguments
     * @param $method Generator method
     */
    public function validateInlineArguments($args, $method)
    {
        if ($args)
        {
            foreach ($args as $arg)
            {
                if (!is_array($arg))
                {
                    throw new Exception(AdiantiCoreTranslator::translate('Method ^1 must receive a parameter of type ^2', $method, 'Array'));
                }
            }
        }
    }
    
    /**
     * Add a form action
     * @param $label Button label
     * @param $action Button action
     * @param $icon Button icon
     */
    public function addAction($label, TAction $action, $icon = 'fa:save')
    {
        $label_info = ($label instanceof TLabel) ? $label->getValue() : $label;
        $name   = strtolower(str_replace(' ', '_', $label_info));
        $button = new TButton($name);
        if (strstr($icon, '#') !== FALSE)
        {
            $pieces = explode('#', $icon);
            $color = $pieces[1];
            $button->{'style'} = "color: #{$color}";
        }
        
        $this->decorated->addField($button);
        
        // define the button action
        $button->setAction($action, $label);
        $button->setImage($icon);
        
        $this->actions[] = $button;
        return $button;
    }
    
    /**
     * Add a form button
     * @param $label Button label
     * @param $action JS Button action
     * @param $icon Button icon
     */
    public function addButton($label, $action, $icon = 'fa:save')
    {
        $label_info = ($label instanceof TLabel) ? $label->getValue() : $label;
        $name   = strtolower(str_replace(' ', '_', $label_info));
        $button = new TButton($name);
        if (strstr($icon, '#') !== FALSE)
        {
            $pieces = explode('#', $icon);
            $color = $pieces[1];
            $button->{'style'} = "color: #{$color}";
        }
        
        // define the button action
        $button->addFunction($action);
        $button->setLabel($label);
        $button->setImage($icon);
        
        $this->actions[] = $button;
        return $button;
    }
    
    /**
     * Render form
     */
    public function show()
    {
        $field_classes = array();
        $field_classes[1] = ['col-sm-12'];
        $field_classes[2] = ['col-sm-2', 'col-sm-10'];
        $field_classes[3] = ['col-sm-2', 'col-sm-4','col-sm-2'];
        $field_classes[4] = ['col-sm-2', 'col-sm-4','col-sm-2', 'col-sm-4'];
        
        $this->decorated->{'class'} = 'form-horizontal';
        
        $panel = new TElement('div');
        $panel->{'class'} = 'panel panel-default';
        $panel->{'style'} = 'width: 100%';
        
        if ($this->properties)
        {
            foreach ($this->properties as $property => $value)
            {
                $panel->$property = $value;
            }
        }
        
        $heading = new TElement('div');
        $heading->{'class'} = 'panel-heading';
        $heading->{'style'} = 'width: 100%';
        $heading->add(TElement::tag('div', $this->title, ['class'=>'panel-title']));
        
        $body = new TElement('div');
        $body->{'class'} = 'panel-body';
        $body->{'style'} = 'width: 100%';
         
        $panel->add($heading);
        $panel->add($this->decorated);
        $this->decorated->add($body);
        
        if ($this->tabcurrent !== null)
        {
            $tabs = new TElement('ul');
            $tabs->{'class'} = 'nav nav-tabs';
            $tabs->{'role'}  = 'tablist';
            
            $tab_counter = 0;
            foreach ($this->tabcontent as $tab => $rows)
            {
                $tab_li = new TElement('li');
                $tab_li->{'role'}  = 'presentation';
                $tab_li->{'class'} = ($tab_counter == $this->current_page) ? 'active' : '';
                
                $tab_link = new TElement('a');
                $tab_link->{'href'} = '#tab_'.$tab_counter;
                $tab_link->{'aria-controls'} = 'tab_0';
                $tab_link->{'role'} = 'tab';
                $tab_link->{'data-toggle'} = 'tab';
                $tab_link->{'aria-expanded'} = 'true';
                $tab_li->add($tab_link);
                $tab_link->add( TElement::tag('span', $tab, ['class'=>'tab-name'])); 
                
                $tabs->add($tab_li);
                $tab_counter ++;
            }
            
            $body->add($tabs);
        }
        
        $content = new TElement('div');
        $content->{'class'} = 'tab-content';
        $body->add($content);
        
        $tab_counter = 0;
        foreach ($this->tabcontent as $tab => $rows)
        {
            $tabpanel = new TElement('div');
            $tabpanel->{'role'}  = 'tabpanel';
            $tabpanel->{'class'} = 'tab-pane ' . ( ($tab_counter == $this->current_page) ? 'active' : '' );
            $tabpanel->{'style'} = 'padding:10px; margin-top: -1px;';
            if ($tab)
            {
                $tabpanel->{'style'} .= 'border: 1px solid #DDDDDD';
            }
            $tabpanel->{'id'}    = 'tab_'.$tab_counter;
            
            $content->add($tabpanel);
            
            if ($rows)
            {
                foreach ($rows as $row)
                {
                    $slots = $row->{'content'};
                    $type  = $row->{'type'};
                    
                    $form_group = new TElement('div');
                    $form_group->{'class'} = 'form-group tformrow';
                    $tabpanel->add($form_group);
                    
                    if (isset($row->{'style'}))
                    {
                        $form_group->{'style'} = $row->{'style'};
                    }
                    
                    $slot_counter  = count($slots);
                    $row_counter = 0;
                    
                    foreach ($slots as $slot)
                    {
                        $label_css = ((count($slot)==1) AND $slot[0] instanceof TLabel) ? 'control-label' : '';
                         
                        $slot_wrapper = new TElement('div');
                        $slot_wrapper->{'class'} = $field_classes[$slot_counter][$row_counter] . ' fb-field-container '.$label_css;
                        $slot_wrapper->{'style'} = 'min-height:26px';
                        $form_group->add($slot_wrapper);
                        
                        // one field per slot do not need to be wrapped
                        if (count($slot)==1)
                        {
                            foreach ($slot as $field)
                            {
                                $slot_wrapper->add($field);
                            }
                        }
                        else // more fields must be wrapped
                        {
                            $field_counter = 0;
                            foreach ($slot as $field)
                            {
                                $field_size = method_exists($field, 'getSize') ? $field->getSize() : null;
                                $field_wrapper = new TElement('div');
                                $field_wrapper->{'class'} = 'fb-inline-field-container';
                                $field_wrapper->{'style'} = 'float: left;display: inline-block;';
                                
                                if ($field_counter+1 < count($slot)) // padding less last element
                                {
                                    $field_wrapper->{'style'} .= 'padding-right: 10px;';
                                } 
                                
                                if (strpos($field_size, '%') !== FALSE)
                                {
                                    $field_wrapper->{'style'} .= 'width: '.$field_size;
                                }
                                else
                                {
                                    $field_wrapper->{'style'} .= 'width: '.$field_size.'px';
                                }
                                
                                $slot_wrapper->add($field_wrapper);
                                $field_wrapper->add($field);
                                
                                if ($field instanceof TLabel)
                                {
                                    $field->{'style'} = 'margin-top:3px';
                                }
                                else if (method_exists($field, 'setSize'))
                                {
                                    if ($field instanceof TSeekButton)
                                    {
                                        $field->setSize('calc(100% - 24px)');
                                    }
                                    else
                                    {
                                        $field->setSize('100%');
                                    }
                                }
                                
                                $field_counter ++;
                            }
                        }
                        
                        $row_counter ++;
                    }
                }
            }
            $tab_counter ++;
        }
        
        $footer = new TElement('div');
        $footer->{'class'} = 'panel-footer';
        $footer->{'style'} = 'width: 100%';
        $this->decorated->add($footer);
        
        $footer_span = new TElement('span');
        $footer_span->{'class'} = 'btn btn-sm btn-default';
        
        if ($this->actions)
        {
            foreach ($this->actions as $action_button)
            {
                $footer->add($action_button);
            }
        }
        
        $panel->show();
    }
    
    /**
     *
     */
    public static function showField($form, $field)
    {
        TScript::create("tform_show_field('{$form}', '{$field}')");
    }
    
    /**
     *
     */
    public static function hideField($form, $field)
    {
        TScript::create("tform_hide_field('{$form}', '{$field}')");
    }
}
