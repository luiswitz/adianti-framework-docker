<?php
namespace Adianti\Control;

use Adianti\Widget\Container\TJQueryDialog;

/**
 * Window Container (JQueryDialog wrapper)
 *
 * @version    5.0
 * @package    control
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TWindow extends TPage
{
    private $wrapper;
    
    public function __construct()
    {
        parent::__construct();
        $this->wrapper = new TJQueryDialog;
        $this->wrapper->setUseOKButton(FALSE);
        $this->wrapper->setTitle('');
        $this->wrapper->setSize(1000, 500);
        $this->wrapper->setModal(TRUE);
        $this->wrapper->{'widget'} = 'T'.'Window';
        parent::add($this->wrapper);
    }
    
    /**
     * Create a window
     */
    public static function create($title, $width, $height, $params = null)
    {
        $inst = new static($params);
        $inst->setIsWrapped(TRUE);
        $inst->setTitle($title);
        $inst->setSize($width, $height);
        unset($inst->wrapper->{'widget'});
        return $inst;
    }
    
    /**
     * Define the stack order (zIndex)
     * @param $order Stack order
     */
    public function setStackOrder($order)
    {
        $this->wrapper->setStackOrder($order);
    }
    
    /**
     * Define the window's title
     * @param  $title Window's title
     */
    public function setTitle($title)
    {
        $this->wrapper->setTitle($title);
    }
    
    /**
     * Turn on/off modal
     * @param $modal Boolean
     */
    public function setModal($modal)
    {
        $this->wrapper->setModal($modal);
    }
    
    /**
     * Define the window's size
     * @param  $width  Window's width
     * @param  $height Window's height
     */
    public function setSize($width, $height)
    {
        $this->wrapper->setSize($width, $height);
    }
    
    /**
     * Define the top corner positions
     * @param $x left coordinate
     * @param $y top  coordinate
     */
    public function setPosition($x, $y)
    {
        $this->wrapper->setPosition($x, $y);
    }
    
    /**
     * Define the Property value
     * @param $property Property name
     * @param $value Property value
     */
    public function setProperty($property, $value)
    {
        $this->wrapper->$property = $value;
    }
    
    /**
     * Add some content to the window
     * @param $content Any object that implements the show() method
     */
    public function add($content)
    {
        $this->wrapper->add($content);
    }
    
    /**
     * Close TJQueryDialog's
     */
    public static function closeWindow()
    {
        TJQueryDialog::closeAll();
    }
}
