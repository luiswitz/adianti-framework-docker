<?php
namespace Adianti\Widget\Util;

use Adianti\Widget\Base\TElement;

/**
 * SourceCode View
 *
 * @version    5.0
 * @package    widget
 * @subpackage util
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TSourceCode
{
    private $content;
    
    /**
     * Load a PHP file
     * @param $file Path to the PHP file
     */
    public function loadFile($file)
    {
        if (!file_exists($file))
        {
            return FALSE;
        }
        
        $this->content = file_get_contents($file);
        if (utf8_encode(utf8_decode($this->content)) !== $this->content ) // NOT UTF
        {
            $this->content = utf8_encode($this->content);
        }
        return TRUE;
    }
    
    /**
     * Load from string
     */
    public function loadString($content)
    {
        $this->content = $content;
        
        if (utf8_encode(utf8_decode($content)) !== $content ) // NOT UTF
        {
            $this->content = utf8_encode($content);
        }
    }
    
    /**
     * Show the highlighted source code
     */
    public function show()
    {
        $span = new TElement('span');
        $span->{'style'} = 'font-size:10pt';
        $span->{'class'} = 'tsourcecode';
        $span->add(highlight_string($this->content, TRUE));
        $span->show();
    }
}
