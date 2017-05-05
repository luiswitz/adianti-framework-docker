<?php
trait SystemChangeLogTrait
{
    public function onAfterDelete( $object )
    {
        SystemChangeLog::register($this, $object, array());
    }
    
    public function onBeforeStore($object)
    {
        $pk = $this->getPrimaryKey();
        $this->lastState = array();
        if (isset($object->$pk) and self::exists($object->$pk))
        {
            $this->lastState = parent::load($object->$pk)->toArray();
        }
    }
    
    public function onAfterStore($object)
    {
        SystemChangeLog::register($this, $this->lastState, (array) $object);
    }
}
