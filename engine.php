<?php
require_once 'init.php';

class TApplication extends AdiantiCoreApplication
{
    static public function run($debug = FALSE)
    {
        new TSession;
        
        if ($_REQUEST)
        {
            $ini    = AdiantiApplicationConfig::get();
            $class  = isset($_REQUEST['class']) ? $_REQUEST['class'] : '';
            $public = in_array($class, $ini['permission']['public_classes']);
            
            if (TSession::getValue('logged')) // logged
            {
                $programs = (array) TSession::getValue('programs'); // programs with permission
                $programs = array_merge($programs, array('Adianti\Base\TStandardSeek' => TRUE,
                                                         'LoginForm' => TRUE,
                                                         'AdiantiMultiSearchService' => TRUE,
                                                         'AdiantiUploaderService' => TRUE,
                                                         'AdiantiAutocompleteService' => TRUE,
                                                         'EmptyPage' => TRUE,
                                                         'MessageList' => TRUE,
                                                         'SystemDocumentUploaderService' => TRUE,
                                                         'NotificationList' => TRUE,
                                                         'SearchBox' => TRUE,
                                                         'SearchInputBox' => TRUE,
                                                         'SystemPageService' => TRUE,
                                                         'SystemPageBatchUpdate' => TRUE,
                                                         'SystemPageUpdate' => TRUE));
                
                if( isset($programs[$class]) OR $public )
                {
                    parent::run($debug);
                }
                else
                {
                    new TMessage('error', _t('Permission denied') );
                }
            }
            else if ($class == 'LoginForm' OR $public )
            {
                parent::run($debug);
            }
            else
            {
                new TMessage('error', _t('Permission denied'), new TAction(array('LoginForm','onLogout')) );
            }
        }
    }
}

TApplication::run(TRUE);
