<?php
class SystemModulesCheckView extends TPage
{
    function __construct()
    {
        parent::__construct();
        
        try 
        {
            $extensions = ['general' =>
                            ['mbstring' => 'MBString',
                             'curl' => 'CURL',
                             'dom' => 'DOM',
                             'xml' => 'XML',
                             'zip' => 'ZIP',
                             'json' => 'JSON',
                             'libxml' => 'LibXML',
                             'openssl' => 'OpenSSL',
                             'zip' => 'ZIP',
                             'SimpleXML' => 'SimpleXML'],
                          'database' =>
                            ['PDO' => 'PDO',
                             'pdo_sqlite' => 'PDO SQLite',
                             'pdo_mysql' => 'PDO MySql',
                             'pdo_pgsql' => 'PDO PostgreSQL',
                             'pdo_oci' => 'PDO Oracle',
                             'pdo_dblib' => 'PDO Sql Server via dblib',
                             'pdo_sqlsrv' => 'PDO Sql Server via sqlsrv',
                             'firebird' => 'PDO Firebird',
                             'odbc' => 'PDO ODBC']];
            
            $framework_extensions = array_keys( array_merge( $extensions['general'], $extensions['database'] ));
            
            $panel1 = new TPanelGroup('PHP Directives');
            $panel1->add(new TAlert('info', _t('The php.ini current location is <b>^1</b>', php_ini_loaded_file())));
            
            $this->datagrid = new BootstrapDatagridWrapper(new TQuickGrid);
            $this->datagrid->width = '100%';
            
            // add the columns
            $this->datagrid->addQuickColumn('directive',    'directive',   'center', '25%');
            $this->datagrid->addQuickColumn('current',      'current',     'center', '25%');
            $this->datagrid->addQuickColumn('development',  'development', 'center', '25%');
            $this->datagrid->addQuickColumn('production',   'production',  'center', '25%');
            $this->datagrid->createModel();
            
            $item = new stdClass;
            $item->directive   = 'error_reporting';
            $item->current     = ini_get($item->directive) == E_ALL ?
                                '<span class="blue"><b>E_ALL</b></span>' :
                                '<span class="blue"><b>'.ini_get($item->directive).'</b></span>';
            $item->development = ini_get($item->directive) == E_ALL ?
                                '<span class="green"><b>E_ALL</b></span>' :
                                '<span class="red"><b>E_ALL</b></span>';
            $item->production  = ini_get($item->directive) == E_ALL - E_DEPRECATED - E_STRICT ?
                                '<span class="green"><b>E_ALL & ~E_DEPRECATED & ~E_STRICT</b></span>' :
                                '<span class="red"><b> E_ALL & ~E_DEPRECATED & ~E_STRICT </b></span>';
            $this->datagrid->addItem($item);
            
            $item = new stdClass;
            $item->directive   = 'display_errors';
            $item->current     = '<span class="blue"><b>' . (ini_get($item->directive) ? 'On' : 'Off' ) . '</b></span>';
            $item->development = ini_get($item->directive) ?
                                 '<span class="green"><b>On</b></span>' :
                                 '<span class="red"><b>On</b></span>';
            $item->production  = !ini_get($item->directive) ?
                                 '<span class="green"><b>Off</b></span>' :
                                 '<span class="red"><b>Off</b></span>';
            $this->datagrid->addItem($item);
            
            $item = new stdClass;
            $item->directive   = 'log_errors';
            $item->current     = '<span class="blue"><b>' . (ini_get($item->directive) ? 'On' : 'Off' ) . '</b></span>';
            $item->development = ini_get($item->directive) ? '<span class="green"><b>On</b></span>' : 'On';
            $item->production  = ini_get($item->directive) ? '<span class="green"><b>On</b></span>' : 'On';;
            $this->datagrid->addItem($item);
            
            $item = new stdClass;
            $item->directive   = 'output_buffering';
            $item->current     = '<span class="blue"><b>' . ini_get($item->directive) . '</b></span>';
            $item->development = ini_get($item->directive) == '4096' ? '<span class="green"><b>4096</b></span>' : 4096;
            $item->production  = ini_get($item->directive) == '4096'  ? '<span class="green"><b>4096</b></span>' : 4096;
            $this->datagrid->addItem($item);
            
            $panel1->add($this->datagrid);
            
            $panel2 = new TPanelGroup('PHP Modules');
            $panel2->add(new TAlert('info', _t('The php.ini current location is <b>^1</b>', php_ini_loaded_file())));
            
            foreach ($extensions as $type => $modules)
            {
                $module_block = new TElement('div');
                $module_block->style = 'font-size:17px; padding-left: 20px';
                $module_block->class = 'col-sm-6';
                $module_block->add(strtoupper($type));
                
                foreach ($modules as $extension => $name) 
                {
                    if (extension_loaded($extension))
                    {
                        $element = new TElement('div');
                        $element->style = 'font-size:17px; padding: 5px';
                        $element->add( TElement::tag('i', '', ['class' => 'fa fa-check green fa-fw']) );
                        $element->add("{$name} ({$extension})");
                    }
                    else
                    {
                        $element = new TElement('div');
                        $element->style = 'font-size:17px; padding: 5px';
                        $element->add( TElement::tag('i', '', ['class' => 'fa fa-times red fa-fw']) );
                        $element->add("{$name} ({$extension})");
                    }
                    
                    $module_block->add($element);
                }
                $panel2->add($module_block);
            }
            
            $panel3 = new TPanelGroup('Another Modules');
            $panel3->add(new TAlert('info', _t('The php.ini current location is <b>^1</b>', php_ini_loaded_file())));
            
            $extensions = get_loaded_extensions();
            $another_ext = array_diff($extensions, $framework_extensions);
            $another_ext = array_unique(array_merge($another_ext, ['session', 'date', 'zlib', 'gd', 'Phar']));
            natcasesort($another_ext);
            
            foreach ($another_ext as $extension)
            {
                if (extension_loaded($extension))
                {
                    $element = new TElement('div');
                    $element->style = 'font-size:17px; padding: 5px';
                    $element->class = 'col-sm-3';
                    $element->add( TElement::tag('i', '', ['class' => 'fa fa-check green fa-fw']) );
                    $element->add("{$extension}");
                }
                else
                {
                    $element = new TElement('div');
                    $element->style = 'font-size:17px; padding: 5px';
                    $element->class = 'col-sm-3';
                    $element->add( TElement::tag('i', '', ['class' => 'fa fa-times red fa-fw']) );
                    $element->add("{$extension}");
                }
                
                $panel3->add($element);
            }
            $container = new TVBox;
            $container->style = 'width: 90%';
            if (TSession::getValue('login'))
            {
                $container->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
            }
            $container->add($panel1);
            $container->add($panel2);
            $container->add($panel3);
            
            parent::add($container);
        }
        catch (Exception $e) 
        {
            new TMessage('error', $e->getMessage());
        }
    }
}
