<?php
/**
 * SystemTableList
 *
 * @version    1.0
 * @package    control
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemTableList extends TPage
{
    private $datagrid;
    
    /**
     * Constructor method
     */
    public function __construct()
    {
        parent::__construct();
        
        // define the ID of target container
        $this->adianti_target_container = 'table_list_container';
        
        // create datagrid
        $this->datagrid = new BootstrapDatagridWrapper(new TQuickGrid);
        $this->datagrid->addQuickColumn('Table', 'table', 'left');
        
        // create datagrid action
        $action = new TDataGridAction(array('SystemDataBrowser', 'onLoad'));
        $action->setParameter('register_state', 'false');
        $this->datagrid->addQuickAction('View', $action, ['database', 'table'], 'fa:table');
        $this->datagrid->createModel( false );
        
        // panel group around datagrid
        $panel = new TPanelGroup(_t('Tables'));
        $panel->style = 'padding-bottom:8px';
        $panel->getBody()->style = 'overflow-y:auto';
        $panel->add($this->datagrid);
        
        parent::add($panel);
    }
    
    /**
     * Load tables into datagrid
     */
    public function onLoad($param)
    {
        try
        {
            $tables = SystemDatabaseInformationService::getDatabaseTables( $param['database'] );
            if ($tables)
            {
                foreach ($tables as $table)
                {
                    $this->datagrid->addItem( (object) ['table' => $table, 'database' => $param['database'] ]);
                }
            }
            
            // fix height
            TScript::create("$('#table_list_container .panel-body').height( ($(window).height()-260)/2 );");
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
}
