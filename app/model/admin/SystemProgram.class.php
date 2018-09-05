<?php
/**
 * SystemProgram
 *
 * @version    1.0
 * @package    model
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemProgram extends TRecord
{
    const TABLENAME = 'system_program';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    // use SystemChangeLogTrait;
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL)
    {
        parent::__construct($id);
        parent::addAttribute('name');
        parent::addAttribute('controller');
    }
    
    /**
     * Find program by controller
     */
    public static function findByController($controller)
    {
        $objects = SystemProgram::where('controller', '=', $controller)->load();
        if (count($objects)>0)
        {
            return $objects[0];
        }
    }
}
