<?php
/**
 * WelcomeView
 *
 * @version    1.0
 * @package    samples
 * @subpackage tutor
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006-2012 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemAccessLogStats extends TPage
{
    /**
     * Class constructor
     * Creates the page
     */
    function __construct()
    {
        parent::__construct();
        
        $html = new THtmlRenderer('app/resources/google_bar_chart.html');
        
        $accesses = SystemAccessLog::getStatsByDay();
        
        $data = array();
        $data[] = [ _t('Day'), _t('Accesses') ];
        foreach ($accesses as $day => $access)
        {
            $data[] = [ _t('Day') . ' ' . $day, $access ];
        }
        
        $panel = new TPanelGroup(_t('Access Stats'));
        $panel->add($html);
        
        // replace the main section variables
        $html->enableSection('main', array('data' => json_encode($data),
                                           'width'  => '100%',
                                           'height'  => '300px',
                                           'title'  => 'Accesses by day',
                                           'ytitle' => 'Accesses', 
                                           'xtitle' => 'Day'));
        
        // add the template to the page
        $container = new TVBox;
        $container->style = 'width: 97%';
        $container->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
        $container->add($panel);
        parent::add($container);
    }
}
