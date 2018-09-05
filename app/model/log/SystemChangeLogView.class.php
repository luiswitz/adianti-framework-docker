<?php
/**
 * SystemChangeLogView
 *
 * @version    1.0
 * @package    control
 * @subpackage log
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemChangeLogView extends TStandardList
{
    protected $form;      // formulário de cadastro
    protected $datagrid;  // listagem
    protected $loaded;
    protected $pageNavigation;  // pagination component
    protected $activeRecord;
    protected $formgrid;
    protected $formfields;
    protected $delAction;
    
    /*
     * método construtor
     * Cria a página, o formulário e a listagem
     */
    public function __construct()
    {
        parent::__construct();
        
        parent::setDatabase('log');
        parent::setActiveRecord('SystemChangeLog');
        parent::addFilterField('tablename');
        parent::addFilterField('login');
        parent::setLimit(20);

        $this->form = new BootstrapFormBuilder('form_table_logger');
        $this->form->setFormTitle('Table change log');
        
        // cria os campos do formulário
        $tablename = new TEntry('tablename');
        $login     = new TEntry('login');
        
        $this->form->addFields( [new TLabel(_t('Table'))], [$tablename]);
        $this->form->addFields( [new TLabel('Login')], [$login]);
        
        $tablename->setSize('80%');
        $login->setSize('80%');
        
        $btn = $this->form->addAction(_t('Search'), new TAction(array($this, 'onSearch')), 'fa:search');
        $btn->class = 'btn btn-sm btn-primary';
        
        $this->formgrid = new TForm;
        
        // instancia objeto DataGrid
        $this->datagrid = new BootstrapDatagridWrapper(new TDataGrid);
        $this->datagrid->style = 'width: 100%';
        $this->datagrid->datatable = 'true';
        $this->datagrid->setHeight(320);
        parent::setTransformer(array($this, 'onBeforeLoad'));
        
        // datagrid inside form
        $this->formgrid->add($this->datagrid);
        
        // instancia as colunas da DataGrid
        $id        = new TDataGridColumn('pkvalue',    'PK',     'center');
        $date      = new TDataGridColumn('logdate',    _t('Date'),   'center');
        $login     = new TDataGridColumn('login',      'Login',   'center');
        $name      = new TDataGridColumn('tablename',  _t('Table'),  'left');
        $column    = new TDataGridColumn('columnname', _t('Column'), 'left');
        $operation = new TDataGridColumn('operation',  _t('Operation'), 'left');
        $oldvalue  = new TDataGridColumn('oldvalue',   _t('Old value'), 'left');
        $newvalue  = new TDataGridColumn('newvalue',   _t('New value'), 'left');
        
        $operation->setTransformer( function($value, $object, $row) {
            if ($value == 'created')
                return "<span style='color:green'>{$value}</span>";
            else if ($value == 'deleted')
                return "<span style='color:red'>{$value}</span>";
            else if ($value == 'changed')
                return "<span style='color:blue'>{$value}</span>";
            
            return $value;
        });
        
        $order1= new TAction(array($this, 'onReload'));
        $order2= new TAction(array($this, 'onReload'));
        $order3= new TAction(array($this, 'onReload'));
        $order4= new TAction(array($this, 'onReload'));
        $order5= new TAction(array($this, 'onReload'));
        
        $order1->setParameter('order', 'pkvalue');
        $order2->setParameter('order', 'logdate');
        $order3->setParameter('order', 'login');
        $order4->setParameter('order', 'tablename');
        $order5->setParameter('order', 'columnname');
        
        $id->setAction($order1);
        $date->setAction($order2);
        $login->setAction($order3);
        $name->setAction($order4);
        $column->setAction($order5);
        
        // adiciona as colunas à DataGrid
        $this->datagrid->addColumn($id);
        $this->datagrid->addColumn($date);
        $this->datagrid->addColumn($login);
        $this->datagrid->addColumn($name);
        $this->datagrid->addColumn($column);
        $this->datagrid->addColumn($operation);
        $this->datagrid->addColumn($oldvalue);
        $this->datagrid->addColumn($newvalue);
        
        // cria o modelo da DataGrid, montando sua estrutura
        $this->datagrid->createModel();
        
        // cria o paginador
        $this->pageNavigation = new TPageNavigation;
        $this->pageNavigation->setAction(new TAction(array($this, 'onReload')));
        $this->pageNavigation->setWidth($this->datagrid->getWidth());
        
        $panel = new TPanelGroup;
        $panel->add($this->datagrid);
        $panel->addFooter($this->pageNavigation);
        
        $container = new TVBox;
        $container->style = 'width: 97%';
        $container->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
        $container->add($this->form);
        $container->add($panel);
        
        parent::add($container);
    }
}
