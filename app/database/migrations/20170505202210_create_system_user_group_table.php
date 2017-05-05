<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemUserGroupTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_user_group');
      $table->addColumn('system_user_id', 'integer')
            ->addColumn('system_group_id', 'integer')
            ->addForeignKey('system_user_id', 'system_user', array('id'))
            ->addForeignKey('system_group_id', 'system_group', array('id'))
            ->create();

      $data = [
        ['id' => 1, 'system_user_id' => 1, 'system_group_id' => 1],
        ['id' => 2, 'system_user_id' => 2, 'system_group_id' => 2],
        ['id' => 3, 'system_user_id' => 1, 'system_group_id' => 2]
      ];
    }
}
