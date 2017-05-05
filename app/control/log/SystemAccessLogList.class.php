<?php
/**
 * SystemAccessLogList Listing
 * @author  <your name here>
 */
class SystemAccessLogList extends TStandardList
{
    protected $form;     // registration form
    protected $datagrid; // listing
    protected $pageNavigation;
    
    /**
     * Class constructor
     * Creates the page, the form and the listing
     */
    public function __construct()
    {
        parent::__construct();
        
        parent::setDatabase('log');            // defines the database
        parent::setActiveRecord('SystemAccessLog');   // defines the active record
        parent::setDefaultOrder('id', 'asc');         // defines the default order
        parent::addFilterField('login', 'like'); // add a filter field
        parent::setLimit(20);
        
        // creates the form, with a table inside
        $this->form = new BootstrapFormBuilder('form_search_SystemAccessLog');
        $this->form->setFormTitle('Access Log');
        
        // create the form fields
        $login = new TEntry('login');

        // add the fields
        $this->form->addFields( [new TLabel(_t('Login'))], [$login] );
        $login->setSize('70%');
        
        // keep the form filled during navigation with session data
        $this->form->setData( TSession::getValue('SystemAccessLog_filter_data') );
        
        // add the search form actions
        $this->form->addAction(_t('Find'), new TAction(array($this, 'onSearch')), 'fa:search');
        
        // creates a DataGrid
        $this->datagrid = new BootstrapDatagridWrapper(new TQuickGrid);
        $this->datagrid->style = 'width: 100%';
        $this->datagrid->datatable = 'true';
        $this->datagrid->setHeight(320);
        

        // creates the datagrid columns
        $id = $this->datagrid->addQuickColumn('id', 'id', 'left');
        $sessionid = $this->datagrid->addQuickColumn('sessionid', 'sessionid', 'left');
        $login = $this->datagrid->addQuickColumn(_t('Login'), 'login', 'left');
        $login_time = $this->datagrid->addQuickColumn('login_time', 'login_time', 'left');
        $logout_time = $this->datagrid->addQuickColumn('logout_time', 'logout_time', 'left');

        
        // create the datagrid model
        $this->datagrid->createModel();
        
        // create the page navigation
        $this->pageNavigation = new TPageNavigation;
        $this->pageNavigation->setAction(new TAction(array($this, 'onReload')));
        $this->pageNavigation->setWidth($this->datagrid->getWidth());
        
        $container = new TVBox;
        $container->style = 'width: 97%';
        $container->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
        $container->add($this->form);
        $container->add(TPanelGroup::pack('', $this->datagrid));
        $container->add($this->pageNavigation);
        
        parent::add($container);
    }
}
