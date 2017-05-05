<?php
namespace Adianti\Widget\Util;

use Adianti\Widget\Util\TBreadCrumb;
use Adianti\Core\AdiantiCoreTranslator;
use SimpleXMLElement;
use Exception;

/**
 * XMLBreadCrumb
 *
 * @version    4.0
 * @package    widget
 * @subpackage util
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TXMLBreadCrumb extends TBreadCrumb
{
    protected static $homeController;
    protected $container;
    private $paths;
    
    /**
     * Handle paths from a XML file
     * @param $xml_file path for the file
     */
    public function __construct($xml_file, $controller)
    {
        parent::__construct();
        
        $path = array();
        if (file_exists($xml_file))
        {
            $menu_string = file_get_contents($xml_file);
            if (utf8_encode(utf8_decode($menu_string)) == $menu_string ) // SE UTF8
            {
                $xml = new SimpleXMLElement($menu_string);
            }
            else
            {
                $xml = new SimpleXMLElement(utf8_encode($menu_string));
            }
            
            foreach ($xml as $xmlElement)
            {
                $atts   = $xmlElement->attributes();
                $label  = (string) $atts['label'];
                $action = (string) $xmlElement-> action;
                $icon   = (string) $xmlElement-> icon;
                
                if (substr($label, 0, 3) == '_t{')
                {
                    $label = _t(substr($label,3,-1), 3, -1);
                }
                $this->parse($xmlElement-> menu-> menuitem, array($label));
            }
            
            if (isset($this->paths[$controller]) AND $this->paths[$controller])
            {
                $total = count($this->paths[$controller]);
                parent::addHome($path);
                
                $count = 1;
                foreach ($this->paths[$controller] as $path)
                {
                    parent::addItem($path, $count == $total);
                    $count++;
                }
            }
            else
            {
                throw new Exception(AdiantiCoreTranslator::translate('Class ^1 not found in ^2', $controller, $xml_file));
            }
        }
        else
        {
            throw new Exception(AdiantiCoreTranslator::translate('File not found') . ': ' . $xml_file);
        }
    }
    
    /**
     * Parse a XMLElement reading menu entries
     * @param $xml A SimpleXMLElement Object
     */
    public function parse($xml, $path)
    {
        $i = 0;
        if ($xml)
        {
            foreach ($xml as $xmlElement)
            {
                $atts   = $xmlElement->attributes();
                $label  = (string) $atts['label'];
                $action = (string) $xmlElement-> action;
                
                if (substr($label, 0, 3) == '_t{')
                {
                    $label = _t(substr($label,3,-1), 3, -1);
                }
                
                if (strpos($action, '#') !== FALSE)
                {
                    list($action, $method) = explode('#', $action);
                }
                $icon   = (string) $xmlElement-> icon;
                
                if ($xmlElement->menu)
                {
                    $this->parse($xmlElement-> menu-> menuitem, array_merge($path, array($label)));
                }
                
                // just child nodes have actions
                if ($action)
                {
                    $this->paths[$action] = array_merge($path, array($label));
                }
            }
        }
    }
}
