<?php
namespace Adianti\Widget\Container;

use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;

/**
 * JQuery dialog container
 *
 * @version    5.0
 * @package    widget
 * @subpackage container
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TJQueryDialog extends TElement
{
    private $actions;
    private $width;
    private $height;
    private $top;
    private $left;
    private $modal;
    private $draggable;
    private $resizable;
    private $useOKButton;
    private $stackOrder;
    
    /**
     * Class Constructor
     * @param $name Name of the widget
     */
    public function __construct()
    {
        parent::__construct('div');
        $this->useOKButton = TRUE;
        $this->top = NULL;
        $this->left = NULL;
        $this->modal = 'true';
        $this->draggable = 'true';
        $this->resizable = 'true';
        $this->stackOrder = 2000;
        $this->{'id'} = 'jquery_dialog_'.mt_rand(1000000000, 1999999999);
        $this->{'style'}="overflow:auto";
    }
    
    /**
     * Define if will use OK Button
     * @param $bool boolean
     */
    public function setUseOKButton($bool)
    {
        $this->useOKButton = $bool;
    }
    
    /**
     * Define the dialog title
     * @param $title title
     */
    public function setTitle($title)
    {
        $this->{'title'} = $title;
    }
    
    /**
     * Turn on/off modal
     * @param $modal Boolean
     */
    public function setModal($bool)
    {
        $this->modal = $bool ? 'true' : 'false';
    }
    
    /**
     * Turn on/off resizeable
     * @param $bool Boolean
     */
    public function setResizable($bool)
    {
        $this->resizable = $bool ? 'true' : 'false';
    }
    
    /**
     * Turn on/off draggable
     * @param $bool Boolean
     */
    public function setDraggable($bool)
    {
        $this->draggable = $bool ? 'true' : 'false';
    }
    
    /**
     * Returns the element ID
     */
    public function getId()
    {
        return $this->{'id'};
    }
    
    /**
     * Define the dialog size
     * @param $width width
     * @param $height height
     */
    public function setSize($width, $height)
    {
        $this->width  = $width  < 1 ? "\$(window).width() * $width" : $width;
        
        if (is_null($height))
        {
            $this->height = "'auto'";
        }
        else
        {
            $this->height = $height < 1 ? "\$(window).height() * $height" : $height;
        }
    }
    
    /**
     * Define the dialog position
     * @param $left left
     * @param $top top
     */
    public function setPosition($left, $top)
    {
        $this->left = $left;
        $this->top  = $top;
    }
    
    /**
     * Add a JS button to the dialog
     * @param $label button label
     * @param $action JS action
     */
    public function addAction($label, $action)
    {
        $this->actions[] = array($label, $action);
    }
    
    /**
     * Define the stack order (zIndex)
     * @param $order Stack order
     */
    public function setStackOrder($order)
    {
        $this->stackOrder = $order;
    }
    
    /**
     * Shows the widget at the screen
     */
    public function show()
    {
        $action_code = '';
        if ($this->actions)
        {
            foreach ($this->actions as $action_array)
            {
                $label  = $action_array[0];
                $action = $action_array[1];
                $action_code .= "\"{$label}\": function() {  $action },";
            }
        }
        
        $ok_button = '';
        if ($this->useOKButton)
        {
            $ok_button = '  OK: function() {
                				$( this ).remove();
                			}';
        }
        
        $left = $this->left ? $this->left : 0;
        $top  = $this->top  ? $this->top  : 0;
        
        $pos_string = '';
        $id = $this->{'id'};
        parent::add(TScript::create("tjquerydialog_start( '#{$id}', {$this->modal}, {$this->draggable}, {$this->resizable}, {$this->width}, {$this->height}, {$top}, {$left}, {$this->stackOrder}, { {$action_code} {$ok_button} } ); ", FALSE));
        parent::show();
    }
    
    /**
     * Closes the dialog
     */
    public function close()
    {
        $script = new TElement('script');
        $script->{'type'} = 'text/javascript';
        $script->add( '$( "#' . $this->{'id'} . '" ).remove();');
        parent::add($script);
    }
    
    /**
     * Close all TJQueryDialog
     */
    public static function closeAll()
    {
        if (!isset($_REQUEST['ajax_lookup']) OR $_REQUEST['ajax_lookup'] !== '1')
        {
            // it has to be inline (not external function call)
            TScript::create( ' $(\'[widget="TWindow"]\').remove(); ' );
        }
    }
}
