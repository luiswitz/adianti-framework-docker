<?php
/**
 * SystemGroup
 *
 * @version    1.0
 * @package    model
 * @subpackage admin
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class SystemGroup extends TRecord
{
    const TABLENAME = 'system_group';
    const PRIMARYKEY= 'id';
    const IDPOLICY =  'max'; // {max, serial}
    
    
    private $system_programs = array();

    /**
     * Constructor method
     */
    public function __construct($id = NULL)
    {
        parent::__construct($id);
        parent::addAttribute('name');
    }

    /**
     * Method addSystem_program
     * Add a System_program to the System_group
     * @param $object Instance of System_program
     */
    public function addSystemProgram(SystemProgram $systemprogram)
    {
        $object = new SystemGroupProgram;
        $object->system_program_id = $systemprogram->id;
        $object->system_group_id = $this->id;
        $object->store();
    }
    
    /**
     * Method getSystem_programs
     * Return the System_group' System_program's
     * @return Collection of System_program
     */
    public function getSystemPrograms()
    {
        $system_programs = array();
        
        // load the related System_program objects
        $repository = new TRepository('SystemGroupProgram');
        $criteria = new TCriteria;
        $criteria->add(new TFilter('system_group_id', '=', $this->id));
        $system_group_system_programs = $repository->load($criteria);
        if ($system_group_system_programs)
        {
            foreach ($system_group_system_programs as $system_group_system_program)
            {
                $system_programs[] = new SystemProgram( $system_group_system_program->system_program_id );
            }
        }
        
        return $system_programs;
    }

    /**
     * Reset aggregates
     */
    public function clearParts()
    {
        // delete the related System_groupSystem_program objects
        $criteria = new TCriteria;
        $criteria->add(new TFilter('system_group_id', '=', $this->id));
        $repository = new TRepository('SystemGroupProgram');
        $repository->delete($criteria);
    }
    
    /**
     * Delete the object and its aggregates
     * @param $id object ID
     */
    public function delete($id = NULL)
    {
        // delete the related System_groupSystem_program objects
        $id = isset($id) ? $id : $this->id;
        $repository = new TRepository('SystemGroupProgram');
        $criteria = new TCriteria;
        $criteria->add(new TFilter('system_group_id', '=', $id));
        $repository->delete($criteria);
        
        // delete the object itself
        parent::delete($id);
    }
}
