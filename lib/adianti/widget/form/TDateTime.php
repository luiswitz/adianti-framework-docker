<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TEntry;

use DateTime;

/**
 * DatTimePicker Widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TDateTime extends TEntry implements AdiantiWidgetInterface
{
    private $mask;
    private $dbmask;
    protected $id;
    protected $size;
    protected $value;
    
    /**
     * Class Constructor
     * @param $name Name of the widget
     */
    public function __construct($name)
    {
        parent::__construct($name);
        $this->id   = 'tdatetime_' . mt_rand(1000000000, 1999999999);
        $this->mask = 'yyyy-mm-dd hh:ii';
        $this->dbmask = null;
    }
    
    /**
     * Store the value inside the object
     */
    public function setValue($value)
    {
        if (!empty($this->dbmask) and ($this->mask !== $this->dbmask) )
        {
            return parent::setValue( self::convertToMask($value, $this->dbmask, $this->mask) );
        }
        else
        {
            return parent::setValue($value);
        }
    }
    
    /**
     * Return the post data
     */
    public function getPostData()
    {
        $value = parent::getPostData();
        
        if (!empty($this->dbmask) and ($this->mask !== $this->dbmask) )
        {
            return self::convertToMask($value, $this->mask, $this->dbmask);
        }
        else
        {
            return $value;
        }
    }
    
    /**
     * Convert from one mask to another
     * @param $value original date
     * @param $fromMask source mask
     * @param $toMask target mask
     */
    public static function convertToMask($value, $fromMask, $toMask)
    {
        if ($value)
        {
            $value = substr($value,0,strlen($fromMask));
            
            $phpFromMask = str_replace( ['dd','mm', 'yyyy', 'hh', 'ii'], ['d','m','Y', 'H', 'i'], $fromMask);
            $phpToMask   = str_replace( ['dd','mm', 'yyyy', 'hh', 'ii'], ['d','m','Y', 'H', 'i'], $toMask);
            
            $date = DateTime::createFromFormat($phpFromMask, $value);
            if ($date)
            {
                return $date->format($phpToMask);
            }
        }
        
        return $value;
    }
    
    /**
     * Define the field's mask
     * @param $mask  Mask for the field (dd-mm-yyyy)
     */
    public function setMask($mask)
    {
        $this->mask = $mask;
    }
    
    /**
     *
     */
    public function setDatabaseMask($mask)
    {
        $this->dbmask = $mask;
    }
    
    /**
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tdate_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tdate_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Shows the widget at the screen
     */
    public function show()
    {
        $this->{'readonly'} = '1';
        $wrapper = new TElement('div');
        $wrapper->{'class'} = 'tdate-group tdatetimepicker input-append date ';
        $wrapper->{'id'} = $this->id.'_wrapper';
        $wrapper->{'data-date'} = $this->value;
        $wrapper->{'data-date-format'} = $this->mask;
        
        if (strstr($this->size, '%') !== FALSE)
        {
            $wrapper->{'style'} = "width: {$this->size}";
            $this->size = '100%';
        }
        
        $span = new TElement('span');
        $span->{'class'} = 'add-on btn btn-default tdate-group-addon';
        
        $i = new TElement('i');
        $i->{'class'} = 'fa fa-clock-o icon-th';
        $span->add($i);
        ob_start();
        parent::show();
        $child = ob_get_contents();
        ob_end_clean();
        $wrapper->add($child);
        
        if (parent::getEditable())
        {
            $wrapper->add($span);
            TScript::create( "tdatetime_start( '#{$this->id}_wrapper' );");
        }
        
        $wrapper->show();
    }
}
