<?php
/**
 * SystemUnitForm Registration
 * @author  <your name here>
 */
class SystemUnitForm extends TStandardForm
{
    protected $form; // form
    
    /**
     * Class constructor
     * Creates the page and the registration form
     */
    function __construct()
    {
        parent::__construct();
        
        $this->setDatabase('permission');              // defines the database
        $this->setActiveRecord('SystemUnit');     // defines the active record
        
        // creates the form
        $this->form = new BootstrapFormBuilder('form_SystemUnit');
        $this->form->setFormTitle(_t('Unit'));
        
        // create the form fields
        $id = new TEntry('id');
        $name = new TEntry('name');
        
        // add the fields
        $this->form->addFields( [new TLabel('Id')], [$id] );
        $this->form->addFields( [new TLabel(_t('Name'))], [$name] );
        $id->setEditable(FALSE);
        $id->setSize('30%');
        $name->setSize('70%');
        $name->addValidation( _t('Name'), new TRequiredValidator );
        
        // create the form actions
        $this->form->addAction(_t('Save'), new TAction(array($this, 'onSave')), 'fa:floppy-o');
        $this->form->addAction(_t('New'),  new TAction(array($this, 'onEdit')), 'fa:eraser red');
        $this->form->addAction(_t('Back to the listing'),new TAction(array('SystemUnitList','onReload')),'fa:table blue');
        
        // vertical box container
        $container = new TVBox;
        $container->style = 'width: 90%';
        $container->add(new TXMLBreadCrumb('menu.xml', 'SystemUnitList'));
        $container->add($this->form);
        
        parent::add($container);
    }
}
