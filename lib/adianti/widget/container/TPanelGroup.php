<?php
namespace Adianti\Widget\Container;

use Adianti\Wrapper\BootstrapFormWrapper;
use Adianti\Widget\Base\TElement;

/**
 * Bootstrap native panel for Adianti Framework
 *
 * @version    4.0
 * @package    widget
 * @subpackage container
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TPanelGroup extends TElement
{
    private $head;
    private $body;
    private $footer;
    
    /**
     * Static creator for panels
     * @param $title Panel title
     * @param $element Panel content
     */
    public static function pack($title, $element)
    {
        $panel = new self($title);
        $panel->add($element);
        
        return $panel;
    }
    
    /**
     * Constructor method
     * @param $title  Panel Title
     * @param $footer Panel Footer
     */
    public function __construct($title = NULL)
    {
        parent::__construct('div');
        $this->{'class'} = 'panel panel-default';
        
        $this->head = new TElement('div');
        $this->head->{'class'} = 'panel-heading';
        
        if ($title)
        {
            $panel_title = new TElement('div');
            $panel_title->{'class'} = 'panel-title';
            $panel_title->add( $title );
            $this->head->add($panel_title);
            parent::add($this->head);
        }
        
        $this->body = new TElement('div');
        $this->body->{'class'} = 'panel-body';
        parent::add($this->body);
        
        $this->footer = new TElement('div');
        $this->footer->{'class'} = 'panel-footer';
    }
    
    /**
     * Add the panel content
     */
    public function add($content)
    {
        $this->body->add($content);
        
        if ($content instanceof BootstrapFormWrapper)
        {
            $buttons = $content->detachActionButtons();
            if ($buttons)
            {
                foreach ($buttons as $button)
                {
                    $this->footer->add( $button );
                }
                parent::add($this->footer);
            }
        }
    }
    
    /**
     * Add footer
     */
    public function addFooter($footer)
    {
        $this->footer->add( $footer );
        parent::add($this->footer);
    }
}
