<?php
namespace Adianti\Service;

use Adianti\Core\AdiantiApplicationConfig;
use Adianti\Database\TTransaction;
use Adianti\Database\TRepository;
use Adianti\Database\TCriteria;
use Adianti\Database\TFilter;
use Adianti\Database\TExpression;

use StdClass;
use Exception;

/**
 * MultiSearch backend
 *
 * @version    4.0
 * @package    service
 * @author     Pablo Dall'Oglio
 * @author     Matheus Agnes Dias
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class AdiantiMultiSearchService
{
    /**
     * Search by the given word inside a model
     */
	public static function onSearch($param = null)
	{
        $key  = $param['key'];
        $ini  = AdiantiApplicationConfig::get();
        $seed = APPLICATION_NAME . ( !empty($ini['general']['seed']) ? $ini['general']['seed'] : 's8dkld83kf73kf094' );
        $hash = md5("{$seed}{$param['database']}{$param['key']}{$param['column']}{$param['model']}");
        $operator = $param['operator'] ? $param['operator'] : 'like';
        $mask = $param['mask'];
        
        if ($hash == $param['hash'])
        {
            try
            {
                TTransaction::open($param['database']);
                $repository = new TRepository($param['model']);
                $criteria = new TCriteria;
                if ($param['criteria'])
                {
                    $criteria = unserialize( base64_decode(str_replace(array('-', '_'), array('+', '/'), $param['criteria'])) );
                }
    
                $column = $param['column'];
                if (stristr(strtolower($operator),'like') !== FALSE)
                {
                    $filter = new TFilter($column, $operator, "NOESC:'%{$param['value']}%'");
                }
                else
                {
                    $filter = new TFilter($column, $operator, "NOESC:'{$param['value']}'");
                }
                
                $id = (int) $param['value'];
                $filter2 = new TFilter($key, '=', "NOESC:'{$id}'");
                $criteria->add($filter);
                $criteria->add($filter2, TExpression::OR_OPERATOR);
                $criteria->setProperty('order', $param['orderColumn']);
                $criteria->setProperty('limit', 1000);
                $collection = $repository->load($criteria, FALSE);
                $items = array();
                
                if ($collection)
                {
                    foreach ($collection as $object)
                    {
                        $k = $object->$key;
                        $array_object = $object->toArray();
                        $maskvalues = $mask;
                        
                        $maskvalues = self::replace($maskvalues, $object);
                        
                        // replace methods
                        $methods = get_class_methods($object);
                        if ($methods)
                        {
                            foreach ($methods as $method)
                            {
                                if (stristr($maskvalues, "{$method}()") !== FALSE)
                                {
                                    $maskvalues = str_replace('{'.$method.'()}', $object->$method(), $maskvalues);
                                }
                            }
                        }
                        
                        $c = $maskvalues;
                    	if($k != null && $c != null )
                    	{
                            if (utf8_encode(utf8_decode($c)) !== $c ) // SE NÃO UTF8
                            {
                                $c = utf8_encode($c);
                            }
                            if (!empty($k) && !empty($c))
                            {
                                $items[] = "{$k}::{$c}";
                            }
                        }
                    }
                }
                
                $ret = array();
                $ret['result'] = $items;
                echo json_encode($ret);
                TTransaction::close();
            }
            catch (Exception $e)
            {
        		$ret = array();
            	$ret['result'] = array("1::".$e->getMessage());
            	
                echo json_encode($ret);
            }
        }
	}
	
    /**
     * Replace a string with object properties within {pattern}
     * @param $content String with pattern
     * @param $object  Any object
     */
    private static function replace($content, $object)
    {
        if (preg_match_all('/\{(.*?)\}/', $content, $matches) )
        {
            foreach ($matches[0] as $match)
            {
                $property = substr($match, 1, -1);
                $value    = $object->$property;
                $content  = str_replace($match, $value, $content);
            }
        }
        
        return $content;
    }
}
