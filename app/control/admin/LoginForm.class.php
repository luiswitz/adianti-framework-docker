<?php
/**
 * LoginForm Registration
 * @author  <your name here>
 */
class LoginForm extends TPage
{
    protected $form; // form
    
    /**
     * Class constructor
     * Creates the page and the registration form
     */
    function __construct($param)
    {
        parent::__construct();

        $table = new TTable;
        $table->width = '100%';
        // creates the form
        $this->form = new TForm('form_login');
        $this->form->class = 'tform';
        $this->form->style = 'max-width: 450px; margin:auto; margin-top:120px;';

        // add the notebook inside the form
        $this->form->add($table);

        // create the form fields
        $login = new TEntry('login');
        $password = new TPassword('password');
        
        // define the sizes
        $login->setSize('70%', 40);
        $password->setSize('70%', 40);

        $login->style = 'height:35px; font-size:14px;float:left;border-bottom-left-radius: 0;border-top-left-radius: 0;';
        $password->style = 'height:35px;margin-bottom: 15px;font-size:14px;float:left;border-bottom-left-radius: 0;border-top-left-radius: 0;';

        $row=$table->addRow();
        $row->addCell( new TLabel('Log in') )->colspan = 2;
        $row->class='tformtitle';

        $login->placeholder = _t('User');
        $password->placeholder = _t('Password');

        $user = '<span style="float:left;width:35px;margin-left:45px;height:35px;" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>';
        $locker = '<span style="float:left;width:35px;margin-left:45px;height:35px;" class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>';

        $container1 = new TElement('div');
        $container1->add($user);
        $container1->add($login);

        $container2 = new TElement('div');
        $container2->add($locker);
        $container2->add($password);

        $row=$table->addRow();
        $row->addCell($container1)->colspan = 2;

        // add a row for the field password
        $row=$table->addRow();        
        $row->addCell($container2)->colspan = 2;
        
        // create an action button (save)
        $save_button=new TButton('save');
        // define the button action
        $save_button->setAction(new TAction(array($this, 'onLogin')), _t('Log in'));
        $save_button->class = 'btn btn-success';
        $save_button->style = 'font-size:18px;width:90%;padding:10px';

        $row=$table->addRow();
        $row->class = 'tformaction';
        $cell = $row->addCell( $save_button );
        $cell->colspan = 2;
        $cell->style = 'text-align:center';

        $this->form->setFields(array($login, $password, $save_button));

        // add the form to the page
        parent::add($this->form);
    }

    /**
     * Authenticate the User
     */
    public function onLogin()
    {
        try
        {
            TTransaction::open('permission');
            $data = $this->form->getData('StdClass');
            $this->form->validate();
            $user = SystemUser::authenticate( $data->login, $data->password );
            if ($user)
            {
                TSession::regenerate();
                $programs = $user->getPrograms();
                $programs['LoginForm'] = TRUE;
                
                TSession::setValue('logged', TRUE);
                TSession::setValue('login', $data->login);
                TSession::setValue('userid', $user->id);
                TSession::setValue('usergroupids', $user->getSystemUserGroupIds());
                TSession::setValue('username', $user->name);
                TSession::setValue('frontpage', '');
                TSession::setValue('programs',$programs);
                
                if (!empty($user->unit))
                {
                    TSession::setValue('userunitid',$user->unit->id);
                }
                
                $frontpage = $user->frontpage;
                SystemAccessLog::registerLogin();
                if ($frontpage instanceof SystemProgram AND $frontpage->controller)
                {
                    AdiantiCoreApplication::gotoPage($frontpage->controller); // reload
                    TSession::setValue('frontpage', $frontpage->controller);
                }
                else
                {
                    AdiantiCoreApplication::gotoPage('EmptyPage'); // reload
                    TSession::setValue('frontpage', 'EmptyPage');
                }
            }
            TTransaction::close();
        }
        catch (Exception $e)
        {
            new TMessage('error',$e->getMessage());
            TSession::setValue('logged', FALSE);
            TTransaction::rollback();
        }
    }
    
    /** 
     * Reload permissions
     */
    public static function reloadPermissions()
    {
        try
        {
            TTransaction::open('permission');
            $user = SystemUser::newFromLogin( TSession::getValue('login') );
            if ($user)
            {
                $programs = $user->getPrograms();
                $programs['LoginForm'] = TRUE;
                TSession::setValue('programs', $programs);
                
                $frontpage = $user->frontpage;
                if ($frontpage instanceof SystemProgram AND $frontpage->controller)
                {
                    TApplication::gotoPage($frontpage->controller); // reload
                }
                else
                {
                    TApplication::gotoPage('EmptyPage'); // reload
                }
            }
            TTransaction::close();
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
    
    /**
     * Logout
     */
    public static function onLogout()
    {
        SystemAccessLog::registerLogout();
        TSession::freeSession();
        AdiantiCoreApplication::gotoPage('LoginForm', '');
    }
}
