<?php
/**
 * SystemDatabaseExplorer
 *
 * @version    1.0
 * @package    control
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemDatabaseExplorer extends TPage
{
    private $datagrid;
    
    /**
     * Constructor method
     */
    public function __construct()
    {
        parent::__construct();
        
        $panel = new TPanelGroup(_t('Database'));
        $panel->style = 'padding-bottom:8px';
        $panel->getBody()->style = 'overflow-y:auto;';
        
        // create datagrid
        $this->datagrid = new BootstrapDatagridWrapper(new TQuickGrid);
        $db_col = $this->datagrid->addQuickColumn('Database', 'database', 'left');
        
        // create action
        $action = new TDataGridAction(array('SystemTableList', 'onLoad'));
        $action->setParameter('register_state', 'false');
        $this->datagrid->addQuickAction('View', $action, 'database', 'fa:database');
        
        $this->datagrid->createModel( false );
        $panel->add($this->datagrid);
        
        // transformer to format database name
        $db_col->setTransformer( function ($value, $object) {
            return $value . ' (<i>'.$object->type.'</i>)';
        });
        
        // load database connections into datagrid
        $list = scandir('app/config');
        $options = array();
        foreach ($list as $entry)
        {
            if (substr($entry, -4) == '.ini')
            {
                $ini = parse_ini_file('app/config/'.$entry);
                if (!empty($ini['type']) && in_array($ini['type'], ['pgsql', 'mysql', 'sqlite', 'oracle', 'mssql']))
                {
                    $options[ substr($entry,0,-4) ] = str_replace('.ini', '', $entry);
                    $this->datagrid->addItem( (object) ['database' => str_replace('.ini', '', $entry), 'type' => $ini['type']]);
                }
            }
        }
        
        // render html
        $replaces['database_browser'] = $panel;
        $html = new THtmlRenderer('app/resources/system_database_browser.html');
        $html->enableSection('main', $replaces);
        
        $vbox = new TVBox;
        $vbox->style = 'width: 100%';
        $vbox->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
        $vbox->add($html);
        
        // fix height
        TScript::create("$('#database_browser_container .panel-body').height( (($(window).height()-260)/2)-100);");
        parent::add($vbox);
    }
}
