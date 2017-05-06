<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemUserProgramTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_user_program');
      $table->addColumn('system_user_id', 'integer')
            ->addColumn('system_program_id', 'integer')
            ->addForeignKey('system_user_id', 'system_user', array('id'))
            ->addForeignKey('system_program_id', 'system_program', array('id'))
            ->create();

      $data = ['id' => 1, 'system_user_id' => 2, 'system_program_id' => 7];

      $this->insert('system_user_program', $data);
    }
}
