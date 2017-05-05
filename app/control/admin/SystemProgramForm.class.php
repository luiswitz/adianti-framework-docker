<?php
/**
 * SystemProgramForm Registration
 * @author  <your name here>
 */
class SystemProgramForm extends TStandardForm
{
    protected $form; // form
    
    /**
     * Class constructor
     * Creates the page and the registration form
     */
    function __construct()
    {
        parent::__construct();
                
        // creates the form
        
        $this->form = new BootstrapFormBuilder('form_SystemProgram');
        $this->form->setFormTitle(_t('Program'));
        
        // defines the database
        parent::setDatabase('permission');
        
        // defines the active record
        parent::setActiveRecord('SystemProgram');
        
        // create the form fields
        $id            = new TEntry('id');
        $name          = new TEntry('name');
        $controller    = new TMultiSearch('controller');
        
        $controller->addItems($this->getPrograms());
        $controller->setMaxSize(1);
        $controller->setMinLength(0);
        $id->setEditable(false);

        // add the fields
        $this->form->addFields( [new TLabel('ID')], [$id] );
        $this->form->addFields( [new TLabel(_t('Name'))], [$name] );
        $this->form->addFields( [new TLabel(_t('Controller'))], [$controller] );

        $id->setSize('30%');
        $name->setSize('70%');
        $controller->setSize('70%');
        
        // validations
        $name->addValidation(_t('Name'), new TRequiredValidator);
        $controller->addValidation(('Controller'), new TRequiredValidator);

        // add form actions
        $this->form->addAction(_t('Save'), new TAction(array($this, 'onSave')), 'fa:floppy-o');
        $this->form->addAction(_t('New'), new TAction(array($this, 'onEdit')), 'fa:eraser red');
        $this->form->addAction(_t('Back to the listing'),new TAction(array('SystemProgramList','onReload')),'fa:table blue');

        $container = new TVBox;
        $container->style = 'width: 90%';
        $container->add(new TXMLBreadCrumb('menu.xml','SystemProgramList'));
        $container->add($this->form);
        
        
        // add the container to the page
        parent::add($container);
    }
    
    /**
     * Return all the programs under app/control
     */
    public function getPrograms()
    {
        $entries = array();
        foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator('app/control'),
                                                         RecursiveIteratorIterator::CHILD_FIRST) as $arquivo)
        {
            if (substr($arquivo, -4) == '.php')
            {
                $name = $arquivo->getFileName();
                $pieces = explode('.', $name);
                $class = (string) $pieces[0];
                $entries[$class] = $class;
            }
        }
        
        ksort($entries);
        return $entries;
    }
    
    /**
     * method onEdit()
     * Executed whenever the user clicks at the edit button da datagrid
     * @param  $param An array containing the GET ($_GET) parameters
     */
    public function onEdit($param)
    {
        try
        {
            if (isset($param['key']))
            {
                $key=$param['key'];
                
                TTransaction::open($this->database);
                $class = $this->activeRecord;
                $object = new $class($key);
                $object->controller = array($object->controller => $object->controller);
                $this->form->setData($object);
                TTransaction::close();
                
                return $object;
            }
            else
            {
                $this->form->clear();
            }
        }
        catch (Exception $e) // in case of exception
        {
            new TMessage('error', $e->getMessage());
            TTransaction::rollback();
        }
    }
    
    /**
     * method onSave()
     * Executed whenever the user clicks at the save button
     */
    public function onSave()
    {
        try
        {
            TTransaction::open($this->database);
            
            $data = $this->form->getData();
            
            $object = new SystemProgram;
            $object->id = $data->id;
            $object->name = $data->name;
            $object->controller = reset($data->controller);
            
            $this->form->validate();
            $object->store();
            $data->id = $object->id;
            $this->form->setData($data);
            TTransaction::close();
            
            new TMessage('info', AdiantiCoreTranslator::translate('Record saved'));
            
            return $object;
        }
        catch (Exception $e) // in case of exception
        {
            // get the form data
            $object = $this->form->getData($this->activeRecord);
            $this->form->setData($object);
            new TMessage('error', $e->getMessage());
            TTransaction::rollback();
        }
    }
}
