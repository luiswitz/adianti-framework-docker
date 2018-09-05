<?php
namespace Adianti\Base;

use Exception;

/**
 * File Save Trait
 *
 * @version    5.0
 * @package    base
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
trait AdiantiFileSaveTrait
{
    /**
     * Save file
     * @param $input_name input field name
     * @param $target_path target file path
     * @param $object Active Record
     */
    public function saveFile($input_name, $target_path, $object)
    {
        $dados_file = json_decode(urldecode($object->$input_name));
        
        if (isset($dados_file->fileName))
        {
            $source_file   = 'tmp/'.$dados_file->fileName;
            $target_file   =  $target_path . '/'.$dados_file->fileName;
            
            $pk = $object->getPrimaryKey();
            
            $class = get_class($object);
            $obj_store = new $class;
            $obj_store->$pk = $object->$pk;
            $obj_store->$input_name = $dados_file->fileName;
            
            $delFile = null;
            
            if (isset($dados_file->delFile) AND $dados_file->delFile)
            {
                $obj_store->$input_name = '';
                $dados_file->fileName = '';
                
                if (is_file(urldecode($dados_file->delFile)))
                {
                    $delFile = urldecode($dados_file->delFile);
                }
            }
    
            if (isset($dados_file->newFile) AND $dados_file->newFile)
            {
                if (file_exists($source_file))
                {
                    if (!file_exists($target_path))
                    {
                        if (!mkdir($target_path, 0777, true))
                        {
                            throw new Exception(_t('Permission denied'). ': '. $target_path);
                        }
                    }
                    
                    // if the user uploaded a source file
                    if (file_exists($target_path))
                    {
                        // move to the target directory
                        if (! rename($source_file, $target_file))
                        {
                            throw new Exception('Não foi possível copiar o arquivo ' . $source_file . ' para o diretório de destino ' . $target_path);
                        }
                        
                        $obj_store->$input_name = $target_file;
                    }
                }
            }
            elseif ($dados_file->fileName != $delFile)
            {
                $obj_store->$input_name = $dados_file->fileName;
            }
            
            $obj_store->store();
            
            if ($obj_store->$input_name)
            {
                $dados_file->fileName = $obj_store->$input_name;
                $object->$input_name = urlencode(json_encode($dados_file));
            }
            else
            {
                $object->$input_name = '';
            }
            
            if ($delFile)
            {
                unlink($delFile);
            }
        }
    }
}
