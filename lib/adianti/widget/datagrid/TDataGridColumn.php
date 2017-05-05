<?php
namespace Adianti\Widget\Datagrid;

use Adianti\Control\TAction;

/**
 * Representes a DataGrid column
 *
 * @version    4.0
 * @package    widget
 * @subpackage datagrid
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TDataGridColumn
{
    private $name;
    private $label;
    private $align;
    private $width;
    private $action;
    private $editaction;
    private $transformer;
    private $properties;
    private $totalFunction;
    
    /**
     * Class Constructor
     * @param  $name  = Name of the column in the database
     * @param  $label = Text label that will be shown in the header
     * @param  $align = Column align (left, center, right)
     * @param  $width = Column Width (pixels)
     */
    public function __construct($name, $label, $align, $width = NULL)
    {
        $this->name  = $name;
        $this->label = $label;
        $this->align = $align;
        $this->width = $width;
        $this->properties = array();
    }
    
    /**
     * Define a field property
     * @param $name  Property Name
     * @param $value Property Value
     */
    public function setProperty($name, $value)
    {
        $this->properties[$name] = $value;
    }
    
    /**
     * Return a field property
     * @param $name  Property Name
     */
    public function getProperty($name)
    {
        if (isset($this->properties[$name]))
        {
            return $this->properties[$name];
        }
    }
    
    /**
     * Return field properties
     */
    public function getProperties()
    {
        return $this->properties;
    }
    
    /**
     * Intercepts whenever someones assign a new property's value
     * @param $name     Property Name
     * @param $value    Property Value
     */
    public function __set($name, $value)
    {
        // objects and arrays are not set as properties
        if (is_scalar($value))
        {              
            // store the property's value
            $this->setProperty($name, $value);
        }
    }
    
    /**
     * Returns the database column's name
     */
    public function getName()
    {
        return $this->name;
    }
    
    /**
     * Returns the column's label
     */
    public function getLabel()
    {
        return $this->label;
    }
    
    /**
     * Set the column's label
     * @param $label column label
     */
    public function setLabel($label)
    {
        $this->label = $label;
    }
    
    /**
     * Returns the column's align
     */
    public function getAlign()
    {
        return $this->align;
    }
    
    /**
     * Returns the column's width
     */
    public function getWidth()
    {
        return $this->width;
    }
    
    /**
     * Define the action to be executed when
     * the user clicks over the column header
     * @param $action   A TAction object
     */
    public function setAction(TAction $action)
    {
        $this->action = $action;
    }
    
    /**
     * Returns the action defined by set_action() method
     * @return the action to be executed when the
     * user clicks over the column header
     */
    public function getAction()
    {
        // verify if the column has an actions
        if ($this->action)
        {
            return $this->action;
        }
    }
    
    /**
     * Define the action to be executed when
     * the user clicks do edit the column
     * @param $action   A TDataGridAction object
     */
    public function setEditAction(TDataGridAction $editaction)
    {
        $this->editaction = $editaction;
    }
    
    /**
     * Returns the action defined by setEditAction() method
     * @return the action to be executed when the
     * user clicks do edit the column
     */
    public function getEditAction()
    {
        // verify if the column has an actions
        if ($this->editaction)
        {
            return $this->editaction;
        }
    }
    
    /**
     * Define a callback function to be applyed over the column's data
     * @param $callback  A function name of a method of an object
     */
    public function setTransformer(Callable $callback)
    {
        $this->transformer = $callback;
    }

    /**
     * Returns the callback defined by the setTransformer()
     */
    public function getTransformer()
    {
        return $this->transformer;
    }
    
    /**
     * Define a callback function to totalize column
     * @param $callback  A function name of a method of an object
     */
    public function setTotalFunction(Callable $callback)
    {
        $this->totalFunction = $callback;
    }
    
    /**
     * Returns the callback defined by the setTotalFunction()
     */
    public function getTotalFunction()
    {
        return $this->totalFunction;
    }
}
