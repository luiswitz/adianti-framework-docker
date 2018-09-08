<?php
class SystemPageService
{
    /**
     * Edit the current page
     */
    public static function editPage($param)
    {
        $ini = AdiantiApplicationConfig::get();
        $token = $ini['general']['token'];
        $controller = $param['controller'];
        $url = "http://manager.adiantibuilder.com.br/ws.php?method=editPage&controller={$controller}&token={$token}";
        if (self::checkExternalUrl($url) !== 200)
        {
            new TMessage('error', _t('Connection failed'));
        }
        else
        {
            TScript::create("__adianti_open_page('{$url}')");
        }
    }
    
    /**
     * Get the current page code
     */
    public static function getPageCode($param)
    {
        $ini = AdiantiApplicationConfig::get();
        $token = $ini['general']['token'];
        
        $controller = $param['controller'];
        $url = "http://manager.adiantibuilder.com.br/ws.php?method=getPages&controller={$controller}&token={$token}";
        
        if (self::checkExternalUrl($url) !== 200)
        {
            throw new Exception(_t('Connection failed'));
        }
        
        $content = file_get_contents($url);
        $page_data = (array) json_decode($content);
        
        if (json_last_error() == JSON_ERROR_NONE)
        {
            if ($page_data['status'] == 'error')
            {
                throw new Exception('Builder: '. $page_data['message']);
            }
        }
        else
        {
            throw new Exception(_t('Invalid return'));
        }
        
        return $page_data;
    }
    
    /**
     * Get page code from all pages except the informed
     */
    public static function getPageCodes()
    {
        $ini = AdiantiApplicationConfig::get();
        $token = $ini['general']['token'];
        $url = "http://manager.adiantibuilder.com.br/ws.php?method=getPages&token={$token}";
        
        if (self::checkExternalUrl($url) !== 200)
        {
            throw new Exception(_t('Connection failed'));
        }
        
        $programs = self::getLocalPrograms();
        if ($programs)
        {
            foreach ($programs as $program)
            {
                $url .= '&controllers[]=' . $program;
            }
        }
        
        $content = file_get_contents($url);
        $page_info = (array) json_decode($content);
        
        if (json_last_error() == JSON_ERROR_NONE)
        {
            if ($page_info['status'] == 'error')
            {
                throw new Exception('Builder: '. $page_info['message']);
            }
        }
        else
        {
            throw new Exception(_t('Invalid return'));
        }
        
        return $page_info;
    }
    
    /**
     * Return all the programs under app/control
     */
    public static function getLocalPrograms()
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
     * Check if the URL is Ok
     */
    public static function checkExternalUrl($url)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_NOBODY, true);
        curl_exec($ch);
        $retCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    
        return $retCode;
    }
}
