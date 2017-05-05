<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Form\TForm;
use Adianti\Widget\Form\TLabel;
use Adianti\Widget\Form\TField;
use Adianti\Widget\Form\TRadioButton;

use Exception;

/**
 * A group of RadioButton's
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TRadioGroup extends TField implements AdiantiWidgetInterface
{
    private $layout = 'vertical';
    private $changeAction;
    private $items;
    private $breakItems;
    private $buttons;
    private $labels;
    private $appearance;
    protected $formName;
    protected $labelClass;
    protected $useButton;
    
    /**
     * Class Constructor
     * @param  $name name of the field
     */
    public function __construct($name)
    {
        parent::__construct($name);
        parent::setSize(NULL);
        $this->labelClass = 'tcheckgroup_label ';
        $this->useButton  = FALSE;
    }

    /**
     * Define the direction of the options
     * @param $direction String (vertical, horizontal)
     */
    public function setLayout($dir)
    {
        $this->layout = $dir;
    }
    
    /**
     * Get the direction (vertical or horizontal)
     */
    public function getLayout()
    {
        return $this->layout;
    }
    
    /**
     * Define after how much items, it will break
     */
    public function setBreakItems($breakItems)
    {
        $this->breakItems = $breakItems;
    }
    
    /**
     * Show as button
     */
    public function setUseButton()
    {
       $this->labelClass = 'btn btn-default ';
       $this->useButton  = TRUE;
    }
    
    /**
     * Add items to the radio group
     * @param $items An indexed array containing the options
     */
    public function addItems($items)
    {
        if (is_array($items))
        {
            $this->items = $items;
            $this->buttons = array();
            $this->labels  = array();

            foreach ($items as $key => $value)
            {
                $button = new TRadioButton($this->name);
                $button->setValue($key);

                $obj = new TLabel($value);
                $this->buttons[$key] = $button;
                $this->labels[$key] = $obj;
            }
        }
    }
    
    /**
     * Return the option buttons
     */
    public function getButtons()
    {
        return $this->buttons;
    }

    /**
     * Return the option labels
     */
    public function getLabels()
    {
        return $this->labels;
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
     * Enable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function enableField($form_name, $field)
    {
        TScript::create( " tradiogroup_enable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Disable the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function disableField($form_name, $field)
    {
        TScript::create( " tradiogroup_disable_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * clear the field
     * @param $form_name Form name
     * @param $field Field name
     */
    public static function clearField($form_name, $field)
    {
        TScript::create( " tradiogroup_clear_field('{$form_name}', '{$field}'); " );
    }
    
    /**
     * Show the widget at the screen
     */
    public function show()
    {
        if ($this->useButton)
        {
            echo '<div data-toggle="buttons">';
            echo '<div class="btn-group" style="clear:both;float:left">';
        }
        
        if ($this->items)
        {
            // iterate the RadioButton options
            $i = 0;
            foreach ($this->items as $index => $label)
            {
                $button = $this->buttons[$index];
                $button->setName($this->name);
                $active = FALSE;
                
                // check if contains any value
                if ($this->value == $index)
                {
                    // mark as checked
                    $button->setProperty('checked', '1');
                    $active = TRUE;
                }
                
                // create the label for the button
                $obj = $this->labels[$index];
                $obj->{'class'} = $this->labelClass. ($active?'active':'');
                
                if ($this->getSize() AND isset($this->breakItems))
                {
                    $obj->setSize($this->getSize());
                }
                
                // check whether the widget is non-editable
                if (parent::getEditable())
                {
                    if (isset($this->changeAction))
                    {
                        if (!TForm::getFormByName($this->formName) instanceof TForm)
                        {
                            throw new Exception(AdiantiCoreTranslator::translate('You must pass the ^1 (^2) as a parameter to ^3', __CLASS__, $this->name, 'TForm::setFields()') );
                        }
                        $string_action = $this->changeAction->serialize(FALSE);
                        
                        $button->setProperty('changeaction', "__adianti_post_lookup('{$this->formName}', '{$string_action}', this, 'callback')");
                        $button->setProperty('onChange', $button->getProperty('changeaction'), FALSE);
                    }
                }
                else
                {
                    $button->setEditable(FALSE);
                    $obj->setFontColor('gray');
                }
                
                $obj->add($button);
                $obj->show();
                $i ++;
                
                if ($this->layout == 'vertical' OR ($this->breakItems == $i))
                {
                    $i = 0;
                    if ($this->useButton)
                    {
                       echo '</div>';
                       echo '<div class="btn-group" style="clear:both;float:left">';
                    }
                    else
                    {
                        // shows a line break
                        $br = new TElement('br');
                        $br->show();
                    }
                }
                echo "\n";
            }
        }
        
        if ($this->useButton)
        {
            echo '</div>';
            echo '</div>';
        }
    }
}
