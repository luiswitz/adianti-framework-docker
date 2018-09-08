<?php
/**
 * SystemMenuUpdate
 *
 * @version    1.0
 * @package    control
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemMenuUpdate extends TPage
{
    /**
     * Constructor method
     */
    public function __construct()
    {
        parent::__construct();
        
        if (TSession::getValue('login') !== 'admin')
        {
            new TMessage('error',  _t('Permission denied') );
            return;
        }
    }
    
    /**
     * Ask for Update menu
     */
    public function onAskUpdate()
    {
        try
        {
            if (!file_exists('menu-dist.xml'))
            {
                throw new Exception(_t('File not found') . ':<br> menu-dist.xml');
            }
            
            $action = new TAction(array($this, 'onUpdateMenu'));
            new TQuestion(_t('Update menu overwriting existing file?'), $action);
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
    
    /**
     * Update menu
     */
    public static function onUpdateMenu($param)
    {
        try
        {
            if (file_exists('menu.xml') AND is_writable('menu.xml'))
            {
                copy('menu-dist.xml', 'menu.xml');
                $menu = new TMenuParser('menu.xml');
                
                $pages = SystemPageService::getPages(false);
                $pages_rev = array_reverse($pages['data']);
                
                // append modules
                if ($pages_rev)
                {
                    foreach ($pages_rev as $page)
                    {
                        if ($page->on_menu)
                        {
                            if (!$menu->moduleExists( $page->module ))
                            {
                                $menu->appendModule( $page->module, $page->module_icon, false );
                            }
                        }
                    }
                }
                
                // append pages
                if ($pages)
                {
                    foreach ($pages['data'] as $page)
                    {
                        if ($page->on_menu)
                        {
                            $class_name  = str_replace('.php', '', $page->controller);
                            
                            if(isset($page->icon) && $page->icon)
                            {
                                $pageIcon = $page->icon;
                            }
                            
                            $menu->appendPage( $page->module, $page->name, $class_name, $pageIcon );
                        }
                    }
                }
                                
                new TMessage('info', _t('Menu updated successfully'));
                TScript::create('setTimeout(function(){ location.reload(); },1000)');
            }
            else
            {
                throw new Exception(_t('Permission denied') . ':<br> menu.xml');
            }
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
}
