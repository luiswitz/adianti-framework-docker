<?php
namespace Adianti\Widget\Form;

use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Container\TTable;
use Adianti\Widget\Form\TLabel;
use Adianti\Widget\Form\THidden;
use Adianti\Widget\Util\TImage;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Exception;

/**
 * Create a field list
 *
 * @version    5.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TFieldList extends TTable
{
    private $fields;
    private $body_created;
    private $detail_row;
    private $remove_function;
    private $clone_function;
    private $sort_action;
    private $sorting;
    
    /**
     * Class Constructor
     */
    public function __construct()
    {
        parent::__construct();
        $this->id     = 'tfieldlist_' . mt_rand(1000000000, 1999999999);
        $this->class  = 'tfieldlist';
        
        $this->fields = [];
        $this->body_created = false;
        $this->detail_row = 0;
        $this->sorting = false;
        $this->remove_function = 'ttable_remove_row(this)';
        $this->clone_function  = 'ttable_clone_previous_row(this)';
    }
    
    /**
     * Enable sorting
     */
    public function enableSorting()
    {
        $this->sorting = true;
    }
    
    /**
     * Define the action to be executed when the user sort rows
     * @param $action TAction object
     */
    public function setSortAction(TAction $action)
    {
        if ($action->isStatic())
        {
            $this->sort_action = $action;
        }
        else
        {
            $string_action = $action->toString();
            throw new Exception(AdiantiCoreTranslator::translate('Action (^1) must be static to be used in ^2', $string_action, __METHOD__));
        }
    }
    
    /**
     * Set the remove javascript action
     */
    public function setRemoveFunction($action)
    {
        $this->remove_function = $action;
    }
    
    /**
     * Set the clone javascript action
     */
    public function setCloneFunction($action)
    {
        $this->clone_function = $action;
    }
    
    /**
     * Add a field
     * @param $label  Field Label
     * @param $object Field Object
     */
    public function addField($label, AdiantiWidgetInterface $field)
    {
        if ($field instanceof TField)
        {
            $name = $field->getName();
            
            if (isset($this->fields[$name]) AND substr($name,-2) !== '[]')
            {
                throw new Exception(AdiantiCoreTranslator::translate('You have already added a field called "^1" inside the form', $name));
            }
            
            if ($name)
            {
                $this->fields[$name] = $field;
            }
            
            if ($label instanceof TLabel)
            {
                $label_field = $label;
                $label_value = $label->getValue();
            }
            else
            {
                $label_field = new TLabel($label);
                $label_value = $label;
            }
            
            $field->setLabel($label_value);
        }
    }
    
    /**
     * Add table header
     */
    public function addHeader()
    {
        $section = parent::addSection('thead');
        
        if ($this->fields)
        {
            $row = parent::addRow();
            
            if ($this->sorting)
            {
                $row->addCell( '' );
            }
            
            foreach ($this->fields as $field)
            {
                if ($field instanceof THidden)
                {
                    $row->addCell( '' );
                }
                else
                {
                    $row->addCell( new TLabel( $field->getLabel() ) );
                }
            }
        }
        
        return $section;
    }
    
    /**
     * Add detail row
     * @param $item Data object
     */
    public function addDetail( $item )
    {
        $uniqid = mt_rand(1000000, 9999999);
        
        if (!$this->body_created)
        {
            parent::addSection('tbody');
            $this->body_created = true;
        }
        
        if ($this->fields)
        {
            $row = parent::addRow();
            
            if ($this->sorting)
            {
                $move = new TImage('fa:arrows gray');
                $move->{'class'} .= ' handle';
                $move->{'style'} .= ';font-size:100%;cursor:move';
                $row->addCell( $move );
            }
            
            foreach ($this->fields as $field)
            {
                if ($this->detail_row == 0)
                {
                    $clone = $field;
                }
                else
                {
                    $clone = clone $field;
                }
                
                $name  = str_replace( ['[', ']'], ['', ''], $field->getName());
                $clone->setId($name.'_'.$uniqid);
                $clone->{'data-row'} = $this->detail_row;
                
                $row->addCell( $clone );
                
                if (!empty($item->$name) OR (isset($item->$name) AND $item->$name == '0'))
                {
                    $clone->setValue( $item->$name );
                }
                else
                {
                    $clone->setValue( null );
                }
            }
            
            $del = new TElement('div');
            $del->{'class'} = 'btn btn-default btn-sm';
            $del->{'style'} = 'padding:3px 7px';
            $del->{'onclick'} = $this->remove_function;
            $del->add('<i class="fa fa-times red"></i>');
            
            $row->addCell( $del );
        }
        $this->detail_row ++;
        
        return $row;
    }
    
    /**
     * Add clone action
     */
    public function addCloneAction()
    {
        parent::addSection('tfoot');
        
        $row = parent::addRow();
        
        if ($this->sorting)
        {
            $row->addCell( '' );
        }
        
        if ($this->fields)
        {
            foreach ($this->fields as $field)
            {
                $row->addCell('');
            }
        }
        
        $add = new TElement('div');
        $add->{'class'} = 'btn btn-default btn-sm';
        $add->{'style'} = 'padding:3px 7px';
        $add->{'onclick'} = $this->clone_function;
        $add->add('<i class="fa fa-plus green"></i>');
        
        // add buttons in table
        $row->addCell($add);
    }
    
    public function show()
    {
        parent::show();
        
        if ($this->sorting)
        {
            if (empty($this->sort_action))
            {
                TScript::create("ttable_sortable_rows('{$this->id}', '.handle')");
            }
            else
            {
                if (!empty($this->fields))
                {
                    $first_field = array_values($this->fields)[0];
                    $this->sort_action->setParameter('static', '1');
                    $form_name   = $first_field->getFormName();
                    $string_action = $this->sort_action->serialize(FALSE);
                    $sort_action = "function() { __adianti_post_data('{$form_name}', '{$string_action}'); }";
                    TScript::create("ttable_sortable_rows('{$this->id}', '.handle', $sort_action)");
                }
            }
        }
    }
}
