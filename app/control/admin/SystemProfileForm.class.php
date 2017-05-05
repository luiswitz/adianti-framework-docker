<?php
class SystemProfileForm extends TPage
{
    private $form;
    
    public function __construct()
    {
        parent::__construct();
        
        $this->form = new TQuickForm;
        $this->form->class = 'tform';
        $this->form->setFormTitle(_t('Profile'));
        
        $name  = new TEntry('name');
        $login = new TEntry('login');
        $email = new TEntry('email');
        $password1 = new TPassword('password1');
        $password2 = new TPassword('password2');
        $login->setEditable(FALSE);
        
        $this->form->addQuickField( _t('Name'), $name, '80%', new TRequiredValidator );
        $this->form->addQuickField( _t('Login'), $login, '80%', new TRequiredValidator );
        $this->form->addQuickField( _t('Email'), $email, '80%', new TRequiredValidator );
        
        $table = $this->form->getContainer();
        $row = $table->addRow();
        $row->style = 'background: #FFFBCB;';
        $cell = $row->addCell( new TLabel(_t('Change password') . ' ('. _t('Leave empty to keep old password') . ')') );
        $cell->colspan = 2;
        
        $this->form->addQuickField( _t('Password'), $password1, '80%' );
        $this->form->addQuickField( _t('Password confirmation'), $password2, '80%' );
        
        $this->form->addQuickAction(_t('Save'), new TAction(array($this, 'onSave')), 'fa:save');
        
        $bc = new TBreadCrumb();
        $bc->addHome();
        $bc->addItem('Profile');
        
        $container = TVBox::pack($bc, $this->form);
        $container->style = 'width:90%';
        parent::add($container);
    }
    
    public function onEdit($param)
    {
        try
        {
            TTransaction::open('permission');
            $login = SystemUser::newFromLogin( TSession::getValue('login') );
            $this->form->setData($login);
            TTransaction::close();
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
    
    public function onSave($param)
    {
        try
        {
            $this->form->validate();
            
            $object = $this->form->getData();
            
            TTransaction::open('permission');
            $user = SystemUser::newFromLogin( TSession::getValue('login') );
            $user->name = $object->name;
            $user->email = $object->email;
            
            if( $object->password1 )
            {
                if( $object->password1 != $object->password2 )
                {
                    throw new Exception(_t('The passwords do not match'));
                }
                
                $user->password = md5($object->password1);
            }
            else
            {
                unset($user->password);
            }
            
            $user->store();
            
            $this->form->setData($object);
            
            new TMessage('info', TAdiantiCoreTranslator::translate('Record saved'));
            
            TTransaction::close();
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
}