<?php
/**
 * SystemPageUpdate
 *
 * @version    1.0
 * @package    control
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemPageUpdate extends TWindow
{
    private $form;
    private $source;
    
    /**
     * Constructor method
     */
    public function __construct()
    {
        parent::__construct();
        parent::setProperty('class', 'window_modal');
        parent::setSize(0.8, 600);
        parent::setTitle('Page update');
        
        if (TSession::getValue('login') !== 'admin')
        {
            new TMessage('error',  _t('Permission denied') );
            return;
        }
        
        $this->form = new BootstrapFormBuilder;
        
        $index = new THidden('index');
        $name = new THidden('name');
        $type = new TEntry('type');
        $module_dir = new TEntry('module_dir');
        $controller = new TEntry('controller');
        $code = new THidden('code');
        $on_menu = new THidden('on_menu');
        $module = new THidden('module');
        
        ini_set('highlight.comment', "#808080");
        ini_set('highlight.default', "#FFFFFF");
        ini_set('highlight.html',    "#C0C0C0");
        ini_set('highlight.keyword', "#62d3ea");
        ini_set('highlight.string',  "#FFC472");
        
        // scroll to put the source inside
        $wrapper = new TElement('div');
        $wrapper->class = 'sourcecodewrapper';
        $wrapper->style = 'height: 340px; overflow-y: auto';
        $this->source = new TSourceCode;
        $wrapper->add($this->source);
        
        $type->setSize('100%');
        $module_dir->setSize('100%');
        $controller->setSize('100%');
        $type->setEditable(FALSE);
        $module_dir->setEditable(FALSE);
        $controller->setEditable(FALSE);
        
        $this->form->addFields( [$index] );
        $this->form->addFields( [$name] );
        $this->form->addFields( [new TLabel(_t('Type'))], [$type] );
        $this->form->addFields( [new TLabel(_t('Directory'))], [$module_dir] );
        $this->form->addFields( [new TLabel(_t('Page'))], [$controller] );
        $this->form->addContent( [new TLabel(_t('Source code'))], [$wrapper] );
        $this->form->addFields( [$code] );
        $this->form->addFields( [$on_menu] );
        $this->form->addFields( [$module] );
        
        $this->form->addAction(_t('Save'), new TAction([$this, 'onSave']), 'fa:save')->addStyleClass('btn-primary');
        
        parent::add($this->form);
    }
    
    /**
     * Start editing
     */
    public function onEdit($param)
    {
        try
        {
            $page_data = SystemPageService::getPageCode($param);
            
            $index     = isset($param['index']) ? $param['index'] : 0;
            
            $obj = new stdClass;
            $obj->controller = $page_data['data'][$index]->controller;
            $obj->code       = $page_data['data'][$index]->code;
            $obj->module_dir = $page_data['data'][$index]->module_dir;
            $obj->type       = $page_data['data'][$index]->type;
            $obj->name       = $page_data['data'][$index]->name;
            $obj->module     = $page_data['data'][$index]->module;
            $obj->on_menu    = (string) $page_data['data'][$index]->on_menu;
            
            $this->source->loadString( base64_decode( $page_data['data'][$index]->code ) );
            
            if (isset($page_data['data'][$index +1]))
            {
                $obj->index = $index +1;
            }
            
            $this->form->setData($obj);
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
            parent::closeWindow();
        }
    }
    
    /**
     * Save page updates
     */
    public static function onSave($param)
    {
        try
        {
            $first_level = $param['type'] == 'document' ? 'documents' : $param['type'];
            $path        = 'app/'.$first_level.'/' . $param['module_dir'];
            $file_path   = 'app/'.$first_level.'/' . $param['module_dir'] . '/' . $param['controller'];
            $class_name  = str_replace('.php', '', $param['controller']);
            
            if ($param['type'] !== 'control')
            {
                $path      = str_replace('/'.$param['module_dir'], '', $path);
                $file_path = str_replace('/'.$param['module_dir'], '', $file_path);
            }
            
            if ( (file_exists($file_path) AND is_writable($file_path)) OR (!file_exists($file_path) AND is_writable($path)) )
            {
                TTransaction::open('permission');
                if (($param['type'] == 'control') && !SystemProgram::findByController($class_name))
                {
                    $program = new SystemProgram;
                    $program->name = $param['name'];
                    $program->controller = $class_name;
                    $program->store();
                    
                    $admin = SystemGroup::find(1);
                    $admin->addSystemProgram($program);
                }
                TTransaction::close();
                
                file_put_contents($file_path, base64_decode($param['code']));
                
                if ($param['on_menu'] == '1')
                {
                    if (file_exists('menu.xml') AND is_writable('menu.xml'))
                    {
                        $menu = new TMenuParser('menu.xml');
                        $menu->appendPage( $param['module'], $param['name'], $class_name, 'fa:circle-o fa-fw' );
                    }
                    else
                    {
                        throw new Exception(_t('Permission denied') . ':<br> menu.xml');
                    }
                }
                
                $pos_action = null;
                if (!empty($param['index']))
                {
                    $pos_action = new TAction( ['SystemPageUpdate', 'onEdit'] );
                    $pos_action->setParameter('controller', $class_name);
                    $pos_action->setParameter('index', $param['index']);
                }
                else
                {
                    parent::closeWindow();
                }
                
                new TMessage('info', _t('File saved'), $pos_action);
            }
            else
            {
                throw new Exception(_t('Permission denied') . ':<br>' . $file_path);
            }
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
}
