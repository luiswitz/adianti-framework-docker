<?php
namespace Adianti\Widget\Form;

use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TStyle;
use Adianti\Widget\Form\TField;

/**
 * Label Widget
 *
 * @version    4.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TLabel extends TField implements AdiantiWidgetInterface
{
    private $fontStyle;
    private $embedStyle;
    protected $value;
    protected $size;
    protected $id;
    
    /**
     * Class Constructor
     * @param  $value text label
     */
    public function __construct($value, $color = null, $size = null, $decoration = null)
    {
        $this->id = mt_rand(1000000000, 1999999999);
        $stylename = 'tlabel_'.$this->id;
        
        // set the label's content
        $this->setValue($value);
        
        $this->embedStyle = new TStyle($stylename);
        
        if (!empty($color))
        {
            $this->setFontColor($color);
        }
        
        if (!empty($size))
        {
            $this->setFontSize($size);
        }
        
        if (!empty($decoration))
        {
            $this->setFontStyle($decoration);
        }
        
        // create a new element
        $this->tag = new TElement('label');
    }
    
    /**
     * Clone the object
     */
    public function __clone()
    {
        parent::__clone();
        $this->embedStyle = clone $this->embedStyle;
    }
    
    /**
     * Define the font size
     * @param $size Font size in pixels
     */
    public function setFontSize($size)
    {
        $this->embedStyle->{'font_size'}    = $size.'pt';
    }
    
    /**
     * Define the style
     * @param  $decoration text decorations (b=bold, i=italic, u=underline)
     */
    public function setFontStyle($decoration)
    {
        if (strpos(strtolower($decoration), 'b') !== FALSE)
        {
            $this->embedStyle->{'font-weight'} = 'bold';
        }
        
        if (strpos(strtolower($decoration), 'i') !== FALSE)
        {
            $this->embedStyle->{'font-style'} = 'italic';
        }
        
        if (strpos(strtolower($decoration), 'u') !== FALSE)
        {
            $this->embedStyle->{'text-decoration'} = 'underline';
        }
    }
    
    /**
     * Define the font face
     * @param $font Font Family Name
     */
    public function setFontFace($font)
    {
        $this->embedStyle->{'font_family'} = $font;
    }
    
    /**
     * Define the font color
     * @param $color Font Color
     */
    public function setFontColor($color)
    {
        $this->embedStyle->{'color'} = $color;
    }
    
    /**
     * Add a content inside the label
     * @param $content
     */
    function add($content)
    {
        $this->tag->add($content);
        
        if (is_string($content))
        {
            $this->value .= $content;
        }
    }
    
    /**
     * Get value
     */
    public function getValue()
    {
        return $this->value;
    }
    
    /**
     * Shows the widget at the screen
     */
    public function show()
    {
        if ($this->size)
        {
            $this->embedStyle->{'width'} = $this->size . 'px';
        }
        
        // if the embed style has any content
        if ($this->embedStyle->hasContent())
        {
            $this->setProperty('style', $this->embedStyle->getInline() . $this->getProperty('style'), TRUE);
        }
        
        // add content to the tag
        $this->tag->add($this->value);
        
        // show the tag
        $this->tag->show();
    }
}
