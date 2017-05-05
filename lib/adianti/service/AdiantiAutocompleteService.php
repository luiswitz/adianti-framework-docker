<?php
namespace Adianti\Service;

use Adianti\Database\TTransaction;
use Adianti\Database\TRepository;
use Adianti\Database\TCriteria;
use Adianti\Database\TFilter;

use StdClass;
use Exception;

/**
 * Autocomplete backend
 *
 * @version    4.0
 * @package    service
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class AdiantiAutocompleteService
{
    /**
     * Search by the given word inside a model
     */
	public static function onSearch($param = null)
	{
        $seed = APPLICATION_NAME.'s8dkld83kf73kf094';
        $hash = md5("{$seed}{$param['database']}{$param['column']}{$param['model']}");
        $operator = $param['operator'] ? $param['operator'] : 'like';
        
        if ($hash == $param['hash'])
        {
            try
            {
                TTransaction::open($param['database']);
                $repository = new TRepository($param['model']);
                $criteria = new TCriteria;
                if ($param['criteria'])
                {
                    $criteria = unserialize(base64_decode($param['criteria']));
                }
    
                $column = $param['column'];
                if (stristr(strtolower($operator),'like') !== FALSE)
                {
                    $filter = new TFilter($column, $operator, "NOESC:'%{$param['query']}%'");
                }
                else
                {
                    $filter = new TFilter($column, $operator, "NOESC:'{$param['query']}'");
                }
                
                $criteria->add($filter);
                $criteria->setProperty('order', $param['orderColumn']);
                $criteria->setProperty('limit', 1000);
                $collection = $repository->load($criteria, FALSE);
                
                $items = array();
                
                if ($collection)
                {
                    foreach ($collection as $object)
                    {
                    	$c = $object->$column;
                    	if($c != null )
                    	{
                            if (utf8_encode(utf8_decode($c)) !== $c ) // SE NÃO UTF8
                        	{
                            	$c = utf8_encode($c);
                        	}
                            if (!empty($c))
                            {
                        	   $items[] = $c;
                            }
                    	}
                    }
                }
                
        		$ret = array();
            	$ret['query'] = 'Unit';
            	$ret['suggestions'] = $items;
        		
            	echo json_encode($ret);
                TTransaction::close();
            }
            catch (Exception $e)
            {
        		$ret = array();
            	$ret['query'] = 'Unit';
            	$ret['suggestions'] = array($e->getMessage());
                
                echo json_encode($ret);
            }
        }
        else
        {
    		$ret = array();
        	$ret['query'] = 'Unit';
        	$ret['suggestions'] = NULL;
            echo json_encode($ret);
        }
	}
}
