<?php
class PublicView extends TPage
{
    public function __construct()
    {
        parent::__construct();
        
        $html = new THtmlRenderer('app/resources/public.html');

        // replace the main section variables
        $html->enableSection('main', array());
        
        $panel = new TPanelGroup('Public!');
        $panel->add($html);
        $panel->style = 'margin: 100px';
        
        // add the template to the page
        parent::add( $panel );
    }
}
