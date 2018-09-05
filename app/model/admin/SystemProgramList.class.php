<?php
/**
 * SystemProgramList
 *
 * @version    1.0
 * @package    control
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemProgramList extends TStandardList
{
    protected $form;     // registration form
    protected $datagrid; // listing
    protected $pageNavigation;
    protected $formgrid;
    protected $deleteButton;
    protected $transformCallback;
    
    /**
     * Page constructor
     */
    public function __construct()
    {
        parent::__construct();
        
        parent::setDatabase('permission');            // defines the database
        parent::setActiveRecord('SystemProgram');   // defines the active record
        parent::setDefaultOrder('id', 'asc');         // defines the default order
        // parent::setCriteria($criteria) // define a standard filter

        parent::addFilterField('id', '=', 'id'); // filterField, operator, formField
        parent::addFilterField('name', 'like', 'name'); // filterField, operator, formField
        parent::addFilterField('controller', 'like', 'controller'); // filterField, operator, formField
        
        // creates the form
        $this->form = new BootstrapFormBuilder('form_search_SystemProgram');
        $this->form->setFormTitle(_t('Programs'));
        

        // create the form fields
        $name = new TEntry('name');
        $controller = new TEntry('controller');

        // add the fields
        $this->form->addFields( [new TLabel(_t('Name'))], [$name] );
        $this->form->addFields( [new TLabel(_t('Controller'))], [$controller] );
        $name->setSize('70%');
        $controller->setSize('70%');
        
        // keep the form filled during navigation with session data
        $this->form->setData( TSession::getValue('SystemProgram_filter_data') );
        
        // add the search form actions
        $btn = $this->form->addAction(_t('Find'), new TAction(array($this, 'onSearch')), 'fa:search');
        $btn->class = 'btn btn-sm btn-primary';
        $this->form->addAction(_t('New'),  new TAction(array('SystemProgramForm', 'onEdit')), 'bs:plus-sign green');
        
        // creates a DataGrid
        $this->datagrid = new BootstrapDatagridWrapper(new TDataGrid);
        $this->datagrid->datatable = 'true';
        $this->datagrid->style = 'width: 100%';
        $this->datagrid->setHeight(320);
        
        // creates the datagrid columns
        $column_id = new TDataGridColumn('id', 'Id', 'center', 50);
        $column_name = new TDataGridColumn('name', _t('Name'), 'left');
        $column_controller = new TDataGridColumn('controller', _t('Controller'), 'left');


        // add the columns to the DataGrid
        $this->datagrid->addColumn($column_id);
        $this->datagrid->addColumn($column_name);
        $this->datagrid->addColumn($column_controller);


        // creates the datagrid column actions
        $order_id = new TAction(array($this, 'onReload'));
        $order_id->setParameter('order', 'id');
        $column_id->setAction($order_id);
        
        $order_name = new TAction(array($this, 'onReload'));
        $order_name->setParameter('order', 'name');
        $column_name->setAction($order_name);
        
        $order_controller = new TAction(array($this, 'onReload'));
        $order_controller->setParameter('order', 'controller');
        $column_controller->setAction($order_controller);
        
        // create EDIT action
        $action_edit = new TDataGridAction(array('SystemProgramForm', 'onEdit'));
        $action_edit->setButtonClass('btn btn-default');
        $action_edit->setLabel(_t('Edit'));
        $action_edit->setImage('fa:pencil-square-o blue fa-lg');
        $action_edit->setField('id');
        $this->datagrid->addAction($action_edit);
        
        // create DELETE action
        $action_del = new TDataGridAction(array($this, 'onDelete'));
        $action_del->setButtonClass('btn btn-default');
        $action_del->setLabel(_t('Delete'));
        $action_del->setImage('fa:trash-o red fa-lg');
        $action_del->setField('id');
        $this->datagrid->addAction($action_del);
        
        $ini = AdiantiApplicationConfig::get();
        
        if ((TSession::getValue('login') == 'admin') && isset($ini['general']['token']))
        {
            $action_edit_page = new TDataGridAction(array('SystemPageService', 'editPage'));
            $action_edit_page->setButtonClass('btn btn-default');
            $action_edit_page->setLabel(_t('Edit page'));
            $action_edit_page->setImage('fa:external-link green fa-lg');
            $action_edit_page->setField('controller');
            $action_edit_page->setDisplayCondition( array($this, 'displayBuilderActions') );
            $this->datagrid->addAction($action_edit_page);
            
            $action_get_page = new TDataGridAction(array('SystemPageUpdate', 'onEdit'));
            $action_get_page->setButtonClass('btn btn-default');
            $action_get_page->setLabel(_t('Update page'));
            $action_get_page->setImage('fa:download purple fa-lg');
            $action_get_page->setField('controller');
            $action_get_page->setDisplayCondition( array($this, 'displayBuilderActions') );
            $this->datagrid->addAction($action_get_page);
        }
        
        // create the datagrid model
        $this->datagrid->createModel();
        
        // create the page navigation
        $this->pageNavigation = new TPageNavigation;
        $this->pageNavigation->setAction(new TAction(array($this, 'onReload')));
        $this->pageNavigation->setWidth($this->datagrid->getWidth());
        
        $panel = new TPanelGroup;
        $panel->add($this->datagrid);
        $panel->addFooter($this->pageNavigation);

        // vertical box container
        $container = new TVBox;
        $container->style = 'width: 90%';
        $container->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
        $container->add($this->form);
        $container->add($panel);
        
        parent::add($container);
    }
    
    public function displayBuilderActions($object)
    {
        return ( (strpos($object->controller, 'System') === false) and !in_array($object->controller, ['CommonPage', 'WelcomeView']));
    }
}
