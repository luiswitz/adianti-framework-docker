<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TField;
use Adianti\Widget\Form\TLabel;
use Adianti\Widget\Util\TImage;

use Exception;

/**
 * Button Widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TButton extends TField implements AdiantiWidgetInterface
{
    private $action;
    private $image;
    private $properties;
    private $functions;
    protected $label;
    protected $formName;
    
    /**
     * Create a button with icon and action
     */
    public static function create($name, $callback, $label, $image)
    {
        $button = new TButton( $name );
        $button->setAction(new TAction( $callback ), $label);
        $button->setImage( $image );
        return $button;
    }
    
    /**
     * Define the action of the button
     * @param  $action TAction object
     * @param  $label  Button's label
     */
    public function setAction(TAction $action, $label = NULL)
    {
        $this->action = $action;
        $this->label  = $label;
    }
    
    /**
     * Returns the buttona action
     */
    public function getAction()
    {
        return $this->action;
    }
    
    /**
     * Define the icon of the button
     * @param  $image  image path
     */
    public function setImage($image)
    {
        $this->image = $image;
    }
    
    /**
     * Define the label of the button
     * @param  $label button label
     */
    public function setLabel($label)
    {
        $this->label = $label;
    }
    
    /**
     * Returns the button label
     */
    public function getLabel()
    {
        return $this->label;
    }
    
    /**
     * Add a JavaScript function to be executed by the button
     * @param $function A piece of JavaScript code
     * @ignore-autocomplete on
     */
    public function addFunction($function)
    {
        if ($function)
        {
            $this->functions = $function.';';
        }
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
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tbutton_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tbutton_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Show the widget at the screen
     */
    public function show()
    {
        if ($this->action)
        {
            if (empty($this->formName))
            {
                $label = ($this->label instanceof TLabel) ? $this->label->getValue() : $this->label;
                throw new Exception(AdiantiCoreTranslator::translate('You must pass the ^1 (^2) as a parameter to ^3', __CLASS__, $label, 'TForm::setFields()') );
            }
            
            // get the action as URL
            $url = $this->action->serialize(FALSE);
            if ($this->action->isStatic())
            {
                $url .= '&static=1';
            }
            $wait_message = AdiantiCoreTranslator::translate('Loading');
            // define the button's action (ajax post)
            $action = "Adianti.waitMessage = '$wait_message';";
            $action.= "{$this->functions}";
            $action.= "__adianti_post_data('{$this->formName}', '{$url}');";
            $action.= "return false;";
                        
            $button = new TElement('button');
            $button->{'id'}      = 'tbutton_'.$this->name;
            $button->{'name'}    = $this->name;
            $button->{'class'}   = 'btn btn-sm btn-default';
            $button->{'onclick'} = $action;
            $action = '';
        }
        else
        {
            $action = $this->functions;
            // creates the button using a div
            $button = new TElement('div');
            $button->{'id'}      = 'tbutton_'.$this->name;
            $button->{'name'}    = $this->name;
            $button->{'class'}   = 'btn btn-default btn-sm';
            $button->{'onclick'} = $action;
        }
        
        if ($this->properties)
        {
            foreach ($this->properties as $property => $value)
            {
                $button->$property = $value;
            }
        }

        $span = new TElement('span');
        if ($this->image)
        {
            $image = new TElement('span');
            $image->{'style'} = 'padding-right:4px';
            
            if (substr($this->image,0,3) == 'bs:')
            {
                $image = new TElement('i');
                $image->{'style'} = 'padding-right:4px';
                $image->{'class'} = 'glyphicon glyphicon-'.substr($this->image,3);
            }
            else if (substr($this->image,0,3) == 'fa:')
            {
                $fa_class = substr($this->image,3);
                if (strstr($this->image, '#') !== FALSE)
                {
                    $pieces = explode('#', $fa_class);
                    $fa_class = $pieces[0];
                    $fa_color = $pieces[1];
                }
                $image = new TElement('i');
                $image->{'style'} = 'padding-right:4px';
                $image->{'class'} = 'fa fa-'.$fa_class;
                if (isset($fa_color))
                {
                    $image->{'style'} .= "; color: #{$fa_color}";
                }
            }
            else if (file_exists('app/images/'.$this->image))
            {
                $image = new TImage('app/images/'.$this->image);
                $image->{'style'} = 'padding-right:4px';
            }
            else if (file_exists('lib/adianti/images/'.$this->image))
            {
                $image = new TImage('lib/adianti/images/'.$this->image);
                $image->{'style'} = 'padding-right:4px';
            }
            
            $span->add($image);
        }
        
        if ($this->label)
        {
            $span->add($this->label);
        }
        $button->add($span);
        $button->show();
    }
}
