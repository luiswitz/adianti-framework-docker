<?php
namespace Adianti\Widget\Base;

/**
 * Base class for all HTML Elements
 *
 * @version    5.0
 * @package    widget
 * @subpackage base
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TElement
{
    private $tagname;     // tag name
    private $properties;  // tag properties
    private $wrapped;
    private $useLineBreaks;
    private $useSingleQuotes;
    protected $children;
    private $voidelements;
    
    /**
     * Class Constructor
     * @param $tagname  tag name
     */
    public function __construct($tagname)
    {
        // define the element name
        $this->tagname = $tagname;
        $this->useLineBreaks = TRUE;
        $this->useSingleQuotes = FALSE;
        $this->wrapped = FALSE;
        $this->voidelements = array('area', 'base', 'br', 'col', 'command', 'embed', 'hr',
                                    'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');
    }
    
    /**
     * Create an element
     * @param $tagname Element name
     * @param $value Element value
     * @param $attributes Element attributes
     */
    public static function tag($tagname, $value, $attributes = NULL)
    {
        $object = new TElement($tagname);
        
        if (is_array($value))
        {
            foreach ($value as $element)
            {
                $object->add($element);
            }
        }
        else
        {
            $object->add($value);
        }
        
        if ($attributes)
        {
            foreach ($attributes as $att_name => $att_value)
            {
                $object->$att_name = $att_value;
            }
        }
        
        return $object;
    }
    
    /**
     * Change the element name
     * @param $tagname Element name
     */
    public function setName($tagname)
    {
        $this->tagname = $tagname;
    }
    
    /**
     * Define if the element is wrapped inside another one
     * @param @bool Boolean TRUE if is wrapped
     */
    protected function setIsWrapped($bool)
    {
        $this->wrapped = $bool;
    }
    
    /**
     * Return if the element is wrapped inside another one
     */
    public function getIsWrapped()
    {
        return $this->wrapped;
    }
    
    /**
     * Return element properties
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
            $this->properties[$name] = $value;
        }
    }
    
    /**
     * Intercepts whenever someones unset a property's value
     * @param $name     Property Name
     */
    public function __unset($name)
    {
        unset($this->properties[$name]);
    }
    
    /**
     * Returns a property's value
     * @param $name     Property Name
     */
    public function __get($name)
    {
        if (isset($this->properties[$name]))
        {              
            return $this->properties[$name];
        }
    }
    
    /**
     * Returns is a property's is set
     * @param $name     Property Name
     */
    public function __isset($name)
    {
        return isset($this->properties[$name]);
    }
    
    /**
     * Clone the object
     */
    public function __clone()
    {
        // verify if the tag has child elements
        if ($this->children)
        {
            // iterate all child elements
            foreach ($this->children as $key => $child)
            {
                if (is_object($child))
                {
                    $this->children[$key] = clone $child;
                }
                else
                {
                    $this->children[$key] = $child;
                }
            }
        }
    }
    
    /**
     * Add an child element
     * @param $child Any object that implements the show() method
     */
    public function add($child)
    {
        $this->children[] = $child;
        if ($child instanceof TElement)
        {
            $child->setIsWrapped( TRUE );
        }
    }
    
    /**
     * Insert an child element
     * @param $position Element position
     * @param $child Any object that implements the show() method
     */
    public function insert($position, $child)
    {
        array_splice( $this->children, $position, 0, array($child) );
        if ($child instanceof TElement)
        {
            $child->setIsWrapped( TRUE );
        }
    }
    
    /**
     * Set the use of linebreaks
     * @param $linebreaks boolean
     */
    public function setUseLineBreaks($linebreaks)
    {
        $this->useLineBreaks = $linebreaks;
    }
    
    /**
     * Set the use of single quotes
     * @param $singlequotes boolean
     */
    public function setUseSingleQuotes($singlequotes)
    {
        $this->useSingleQuotes = $singlequotes;
    }
    
    /**
     * Del an child element
     * @param $child Any object that implements the show() method
     */
    public function del($object)
    {
        foreach ($this->children as $key => $child)
        {
            if ($child === $object) // same instance
            {
                unset($this->children[$key]);
            }
        }
    }

    /**
     * get children
     */
    public function getChildren()
    {
        return $this->children;
    }
    
    /**
     * Get an child element
     * @param $position Element position
     */
    public function get($position)
    {
        return $this->children[$position];
    }
    
    /**
     * Opens the tag
     */
    public function open()
    {
        // exibe a tag de abertura
        echo "<{$this->tagname}";
        if ($this->properties)
        {
            // percorre as propriedades
            foreach ($this->properties as $name=>$value)
            {
                if ($this->useSingleQuotes)
                {
                    echo " {$name}='{$value}'";
                }
                else
                {
                    echo " {$name}=\"{$value}\"";
                }
            }
        }
        
        if (in_array($this->tagname, $this->voidelements))
        {
            echo '/>';
        }
        else
        {
            echo '>';
        }
    }
    
    /**
     * Shows the tag
     */
    public function show()
    {
        // open the tag
        $this->open();
        
        // verify if the tag has child elements
        if ($this->children)
        {
            if (count($this->children)>1)
            {
                if ($this->useLineBreaks)
                {
                    echo "\n";
                }
            }
            // iterate all child elements
            foreach ($this->children as $child)
            {
                // verify if the child is an object
                if (is_object($child))
                {
                    $child->show();
                }
                // otherwise, the child is a scalar
                else if ((is_string($child)) or (is_numeric($child)))
                {
                    echo $child;
                }
            }
        }
        
        if (!in_array($this->tagname, $this->voidelements))
        {
            // closes the tag
            $this->close();
        }
    }
    
    /**
     * Closes the tag
     */
    public function close()
    {
        echo "</{$this->tagname}>";
        if ($this->useLineBreaks)
        {
            echo "\n";
        }
    }
    
    /**
     * Converts the object into a string
     */
    public function __toString()
    {
        return $this->getContents();
    }
    
    /**
     * Returns the element content as a string
     */
    public function getContents()
    {
        ob_start();
        $this->show();
        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }
    
    /**
     * Clear element children
     */
    public function clearChildren()
    {
        $this->children = array();
    }
}
