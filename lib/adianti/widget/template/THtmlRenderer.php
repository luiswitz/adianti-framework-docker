<?php
namespace Adianti\Widget\Template;

use Adianti\Core\AdiantiCoreTranslator;
use Exception;
use ApplicationTranslator;

use Math\Parser;

/**
 * Html Renderer
 *
 * @version    5.5
 * @package    widget
 * @subpackage template
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class THtmlRenderer
{
    private $path;
    private $buffer;
    private $template;
    private $sections;
    private $replacements;
    private $enabledSections;
    private $repeatSection;
    private $enabledTranslation;
    
    /**
     * Constructor method
     * 
     * @param $path  HTML resource path
     */
    public function __construct($path)
    {
        if (!file_exists($path))
        {
            throw new Exception(AdiantiCoreTranslator::translate('File not found').': ' . $path);
        }
        $this->enabledSections = array();
        $this->enabledTranslation = FALSE;
        $this->buffer = array();
        
        if (file_exists($path))
        {
            $this->template = file_get_contents($path);
        }
    }
    
    /**
     * Enable translation inside template
     */
    public function enableTranslation()
    {
        $this->enabledTranslation = TRUE;
    }
    
    /**
     * Enable a HTML section to show
     * 
     * @param $sectionName Section name
     * @param $replacements Array of replacements for this section
     * @param $repeat Define if the section is repeatable
     */
    public function enableSection($sectionName, $replacements = NULL, $repeat = FALSE)
    {
        $this->enabledSections[] = $sectionName;
        $this->replacements[$sectionName] = $replacements;
        $this->repeatSection[$sectionName] = $repeat;
    }
    
    /**
     * Replace the content with array of replacements
     * 
     * @param $replacements array of replacements
     * @param $content content to be replaced
     */
    private function replace(&$replacements, $content)
    {
        if (is_array($replacements))
        {
            foreach ($replacements as $variable => $value)
            {
                if (is_scalar($value))
                {
                    $content = str_replace('{$'.$variable.'}',  $value, $content);
                    $content = str_replace('{{'.$variable.'}}', $value, $content);
                }
                else if (is_object($value))
                {
                    if (method_exists($value, 'show'))
                    {
                        ob_start();
                        $value->show();
                        $output = ob_get_contents();
                        ob_end_clean();
                        $content = str_replace('{$'.$variable.'}',  $output, $content);
                        $content = str_replace('{{'.$variable.'}}', $output, $content);
                        $replacements[$variable] = $output;
                    }
                    
                    if (method_exists($value, 'getAttributes'))
                    {
                        $vars = $value->getAttributes();
                        $vars[] = $value->getPrimaryKey();
                    }
                    else if (!$value instanceof self)
                    {
                        $vars = array_keys(get_object_vars($value));
                    }
                    
                    if (isset($vars))
                    {
                        foreach ($vars as $propname)
                        {
                            $content = str_replace('{$'.$variable.'->'.$propname.'}',   $value->$propname, $content);
                            $content = str_replace('{{'.$variable.'->'.$propname.'}}',  $value->$propname, $content);
                        }
                    }
                }
                else if (is_null($value))
                {
                    $content = str_replace('{$'.$variable.'}',  '', $content);
                    $content = str_replace('{{'.$variable.'}}', '', $content);
                }
                else if (is_array($value)) // embedded repeated section
                {
                    // there is a template for this variable
                    if (isset($this->buffer[$variable]))
                    {
                        $tpl = $this->buffer[$variable];
                        $agg = '';
                        foreach ($value as $replace)
                        {
                            $agg .= $this->replace($replace, $tpl);
                        }
                        $content = str_replace('{{'.$variable.'}}', $agg, $content);
                    }
                }
            }
        }
        
        // replace some php functions
        $content = self::replaceFunctions($content);
        
        return $content;
    }
    
    /**
     * replace some php functions
     */
    public static function replaceFunctions($content)
    {
        preg_match_all('/date_format\(([0-9]{4}-[0-9]{2}-[0-9]{2}),\s*\'([A-z_\/\-0-9\s\:]*)\'\)/', $content, $matches1);
        
        if (count($matches1)>0)
        {
            foreach ($matches1[0] as $key => $value)
            {
                $raw    = $matches1[0][$key];
                $date   = $matches1[1][$key];
                $mask   = $matches1[2][$key];
                $content = str_replace($raw, date_format(date_create($date), $mask), $content);
            }
        }
        
        preg_match_all('/date_format\(([0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}),\s*\'([A-z_\/\-0-9\s\:]*)\'\)/', $content, $matches1);
        
        if (count($matches1)>0)
        {
            foreach ($matches1[0] as $key => $value)
            {
                $raw    = $matches1[0][$key];
                $date   = $matches1[1][$key];
                $mask   = $matches1[2][$key];
                $content = str_replace($raw, date_format(date_create($date), $mask), $content);
            }
        }
        
        preg_match_all('/number_format\(([\d+\.\d]*),\s*([0-9])+,\s*\'(\,*\.*)\',\s*\'(\,*\.*)\'\)/', $content, $matches2);
        
        if (count($matches2)>0)
        {
            foreach ($matches2[0] as $key => $value)
            {
                $raw      = $matches2[0][$key];
                $number   = $matches2[1][$key];
                $decimals = $matches2[2][$key];
                $dec_sep  = $matches2[3][$key];
                $tho_sep  = $matches2[4][$key];
                $content  = str_replace($raw, number_format($number, $decimals, $dec_sep, $tho_sep), $content);
            }
        }
        
        preg_match_all('/evaluate\(([-+\/\d\s\(\))*]*)\)/', $content, $matches3);
        
        if (count($matches3)>0)
        {
            $parser = new Parser;
            foreach ($matches3[0] as $key => $value)
            {
                $raw        = $matches3[0][$key];
                $expression = $matches3[1][$key];
                
                $expression = str_replace('+', ' + ', $expression);
                $expression = str_replace('-', ' - ', $expression);
                $expression = str_replace('*', ' * ', $expression);
                $expression = str_replace('/', ' / ', $expression);
                $expression = str_replace('(', ' ( ', $expression);
                $expression = str_replace(')', ' ) ', $expression);
                
                $result = $parser->evaluate($expression);
                
                $content = str_replace($raw, $result, $content);
            }
        }
        
        return $content;
    }
    
    /**
     * Show the HTML and the enabled sections
     */
    public function show()
    {
        $opened_sections = array();
        $sections_stack = array('main');
        $array_content = array();
        
        if ($this->template)
        {
            $content = $this->template;
            if ($this->enabledTranslation)
            {
                $content  = ApplicationTranslator::translateTemplate($content);
            }
            
            $array_content = preg_split('/\n|\r\n?/', $content);
            $sectionName = null;
            
            // iterate line by line
            foreach ($array_content as $line)
            {
                $line_clear = trim($line);
                $line_clear = str_replace("\n", '', $line_clear);
                $line_clear = str_replace("\r", '', $line_clear);
                $delimiter  = FALSE;
                
                // detect section start
                if ( (substr($line_clear, 0,5)=='<!--[') AND (substr($line_clear, -4) == ']-->') AND (substr($line_clear, 0,6)!=='<!--[/') )
                {
                    $previousSection = $sectionName;
                    $sectionName = substr($line_clear, 5, strpos($line_clear, ']-->')-5);
                    $sections_stack[] = $sectionName;
                    $this->buffer[$sectionName] = '';
                    $opened_sections[$sectionName] = TRUE;
                    $delimiter  = TRUE;
                    
                    $found = self::recursiveKeyArraySearch($previousSection, $this->replacements);
                    
                    // turns section repeatable if it occurs inside parent section
                    if (isset($this->replacements[$previousSection][$sectionName]) OR
                        isset($this->replacements[$previousSection][0][$sectionName]) OR
                        isset($found[$sectionName]) OR
                        isset($found[0][$sectionName]) )
                    {
                        $this->repeatSection[$sectionName] = TRUE;
                    }
                    
                    // section inherits replacements from parent session
                    if (isset($this->replacements[$previousSection][$sectionName]))
                    {
                        $this->replacements[$sectionName] = $this->replacements[$previousSection][$sectionName];
                    }
                }
                // detect section end
                else if ( (substr($line_clear, 0,6)=='<!--[/') )
                {
                    $delimiter  = TRUE;
                    $sectionName = substr($line_clear, 6, strpos($line_clear, ']-->')-6);
                    $opened_sections[$sectionName] = FALSE;
                    
                    array_pop($sections_stack);
                    $previousSection = end($sections_stack);
                    
                    // embbed current section as a variable inside the parent section
                    if (isset($this->repeatSection[$previousSection]) AND $this->repeatSection[$previousSection])
                    {
                        $this->buffer[$previousSection] .= '{{'.$sectionName.'}}';
                    }
                    else
                    {
                        // if the section is repeatable and the parent is not (else), process replaces recursively
                        if ((isset($this->repeatSection[$sectionName]) AND $this->repeatSection[$sectionName]))
                        {
                            $processed = '';
                            // if the section is repeatable, repeat the content according to its replacements
                            if (isset($this->replacements[$sectionName]))
                            {
                                foreach ($this->replacements[$sectionName] as $iteration_replacement)
                                { 
                                    $processed .= $this->replace($iteration_replacement,
                                                                 $this->buffer[$sectionName]);
                                }
                                print $processed;
                                $processed = '';
                            }
                        }
                    }
                    
                    $sectionName = end($sections_stack);
                }
                else if (in_array($sectionName, $this->enabledSections)) // if the section is enabled
                {
                    if (!$this->repeatSection[$sectionName]) // not repeatable, just echo
                    {
                        // print the line with the replacements
                        if (isset($this->replacements[$sectionName]))
                        {
                            print $this->replace($this->replacements[$sectionName], $line . "\n");
                        }
                        else
                        {
                            print $line . "\n";
                        }
                    }

                }
                
                if (!$delimiter)
                {
                    if (!isset($sectionName))
                    {
                        $sectionName = 'main';
                        if (empty($this->buffer[$sectionName]))
                        {
                            $this->buffer[$sectionName] = '';
                        }
                    }
                    
                    $this->buffer[$sectionName] .= $line . "\n";
                }
            }
        }
        
        // check for unclosed sections
        if ($opened_sections)
        {
            foreach ($opened_sections as $section => $opened)
            {
                if ($opened)
                {
                    throw new Exception(AdiantiCoreTranslator::translate('The section (^1) was not closed properly', $section));
                }
            }
        }
    }
    
    /**
     * Static search in memory structure
     */
    public static function recursiveKeyArraySearch($needle,$haystack)
    {
        if ($haystack)
        {
            foreach($haystack as $key=>$value)
            {
                if($needle === $key)
                {
                    return $value;
                }
                else if (is_array($value) && self::recursiveKeyArraySearch($needle,$value) !== false)
                {
                    return self::recursiveKeyArraySearch($needle,$value);
                }
            }
        }
        return false;
    }
    
    /**
     * Returns the HTML content as a string
     */
    public function getContents()
    {
        ob_start();
        $this->show();
        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }
}
