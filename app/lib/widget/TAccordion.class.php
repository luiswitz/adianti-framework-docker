<?php
/**
 * TAccordion Container
 * Copyright (c) 2006-2010 Pablo Dall'Oglio
 * @author  Pablo Dall'Oglio <pablo [at] adianti.com.br>
 * @version 2.0, 2007-08-01
 */
class TAccordion extends TElement
{
    protected $elements;
    
    /**
     * Class Constructor
     */
    public function __construct()
    {
        parent::__construct('div');
        $this->id = 'taccordion_' . uniqid();
        $this->elements = array();
    }
    
    /**
     * Add an object to the accordion
     * @param $title  Title
     * @param $objeto Content
     */
    public function appendPage($title, $object)
    {
        $this->elements[] = array($title, $object);
    }
    
    /**
     * Shows the widget at the screen
     */
    public function show()
    {
        foreach ($this->elements as $child)
        {
            $title = new TElement('h3');
            $title->add($child[0]);
            
            $content = new TElement('div');
            $content->add($child[1]);
            
            parent::add($title);
            parent::add($content);
        }
        
        TScript::create('$(document).ready( function() {
                            $( "#'.$this->id.'" ).accordion();
                        });');
        parent::show();
    }
}
