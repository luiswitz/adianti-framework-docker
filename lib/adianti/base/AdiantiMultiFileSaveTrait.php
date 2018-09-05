<?php
namespace Adianti\Base;

use Exception;

/**
 * Multi File Save Trait
 *
 * @version    5.0
 * @package    base
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
trait AdiantiMultiFileSaveTrait
{
    /**
     * Save files
     * @param $input_name input field name
     * @param $foreign_key Foreign key name
     * @param $field_field
     * @param $target_path
     * @param $object
     * @param $modelFiles
     */
    public function saveFiles($input_name, $foreign_key, $file_field, $target_path, $object, $modelFiles)
    {
        $source_path = 'tmp';
        
        $pk = $object->getPrimaryKey();
        
        $delFiles = [];
        $files_form = [];
        
        if (isset($object->$input_name) AND $object->$input_name)
        {
            foreach ($object->$input_name as $key => $info_file)
            {            
                $dados_file = json_decode(urldecode($info_file));
                
                $source_file = $source_path . '/' . $dados_file->fileName;
                $target_file = $target_path . '/' . $dados_file->fileName;
                
                $file_form = [];
                
                if (isset($dados_file->idFile) AND $dados_file->idFile)
                {
                    $file_form['idFile'] = $dados_file->idFile;
                }
                $file_form['fileName'] = $dados_file->fileName;
                
                if (isset($dados_file->newFile) && $dados_file->newFile)
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
                                throw new Exception('Não foi possível copiar o arquivo ' . $source_file . ' para o diretório de destino ' . $target_path);
                                
                            $model_file = new $modelFiles;
                            $model_file->$file_field = $target_file;
                            $model_file->$foreign_key = $object->$pk;
                            
                            $model_file->store();
                            
                            $pk_detail = $model_file->getPrimaryKey();
                            $file_form['idFile'] = $model_file->$pk_detail;
                            $file_form['fileName'] = $target_file;
                        }
                    }
                }
                
                if (isset($dados_file->delFile) && $dados_file->delFile)
                {
                    $file_form['delFile'] = 1;
                    if (isset($dados_file->idFile) && $dados_file->idFile)
                    {
                        $file = $modelFiles::find($dados_file->idFile);
                        if ($file)
                        {
                            if ($file->$file_field AND is_file($file->$file_field))
                            {
                                $delFiles[] = $file->$file_field;
                            }
                            $file->delete();
                        }
                    }
                }
                
                if ($file_form)
                {
                    $files_form[] = $file_form;
                }
            }
            
            foreach ($delFiles as $file)
            {
                unlink($file);
                
                foreach ($files_form as $key => $ff)
                {
                    if ($ff['fileName'] == $file)
                        unset($files_form[$key]);
                }
            }
            
            $object->$input_name = $files_form;
        }
    }
}
