<?php
namespace Adianti\Validator;

use Adianti\Validator\TFieldValidator;
use Adianti\Core\AdiantiCoreTranslator;
use Exception;

/**
 * Required field validation
 *
 * @version    4.0
 * @package    validator
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TRequiredValidator extends TFieldValidator
{
    /**
     * Validate a given value
     * @param $label Identifies the value to be validated in case of exception
     * @param $value Value to be validated
     * @param $parameters aditional parameters for validation
     */
    public function validate($label, $value, $parameters = NULL)
    {
        if ( (is_null($value)) OR (is_scalar($value) AND trim($value)=='') OR (is_array($value) AND count($value)==1 AND isset($value[0]) AND empty($value[0])) OR (is_array($value) AND empty($value)) )
        {
            throw new Exception(AdiantiCoreTranslator::translate('The field ^1 is required', $label));
        }
    }
}
