<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemUserUnit extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_user_unit');
      $table->addColumn('system_user_id', 'integer', array('null' => true))
            ->addColumn('system_unit_id', 'integer', array('null' => true))
            ->addForeignKey('system_user_id', 'system_user', array('id'))
            ->addForeignKey('system_unit_id', 'system_unit', array('id'))
            ->create();
    }
}
