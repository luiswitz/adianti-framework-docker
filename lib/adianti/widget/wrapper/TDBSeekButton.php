<?php
namespace Adianti\Widget\Wrapper;

use Adianti\Core\AdiantiApplicationConfig;
use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Widget\Form\TSeekButton;
use Adianti\Base\TStandardSeek;
use Adianti\Database\TCriteria;
use Adianti\Control\TAction;

use Exception;

/**
 * Abstract Record Lookup Widget: Creates a lookup field used to search values from associated entities
 *
 * @version    5.0
 * @package    widget
 * @subpackage wrapper
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TDBSeekButton extends TSeekButton
{
    /**
     * Class Constructor
     * @param  $name name of the form field
     * @param  $database name of the database connection
     * @param  $form name of the parent form
     * @param  $model name of the Active Record to be searched
     * @param  $display_field name of the field to be searched and shown
     * @param  $receive_key name of the form field to receive the primary key
     * @param  $receive_display_field name of the form field to receive the "display field"
     
     */
    public function __construct($name, $database, $form, $model, $display_field, $receive_key, $receive_display_field, TCriteria $criteria = NULL, $operator = 'like')
    {
        parent::__construct($name);
        
        if (empty($database))
        {
            throw new Exception(AdiantiCoreTranslator::translate('The parameter (^1) of ^2 is required', 'database', __CLASS__));
        }
        
        if (empty($model))
        {
            throw new Exception(AdiantiCoreTranslator::translate('The parameter (^1) of ^2 is required', 'model', __CLASS__));
        }
        
        if (empty($display_field))
        {
            throw new Exception(AdiantiCoreTranslator::translate('The parameter (^1) of ^2 is required', 'display_field', __CLASS__));
        }
        
        $obj = new TStandardSeek;
        $ini  = AdiantiApplicationConfig::get();
        $seed = APPLICATION_NAME . ( !empty($ini['general']['seed']) ? $ini['general']['seed'] : 's8dkld83kf73kf094' );
        
        // define the action parameters
        $action = new TAction(array($obj, 'onSetup'));
        $action->setParameter('hash',          md5("{$seed}{$database}{$model}{$display_field}"));
        $action->setParameter('database',      $database);
        $action->setParameter('parent',        $form);
        $action->setParameter('model',         $model);
        $action->setParameter('display_field', $display_field);
        $action->setParameter('receive_key',   $receive_key);
        $action->setParameter('receive_field', $receive_display_field);
        $action->setParameter('criteria',      base64_encode(serialize($criteria)));
        $action->setParameter('operator',      ($operator == 'ilike') ? 'ilike' : 'like');
        parent::setAction($action);
    }
}
