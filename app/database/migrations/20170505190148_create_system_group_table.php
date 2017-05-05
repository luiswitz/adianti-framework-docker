<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemGroupTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_group');
      $table->addColumn('name', 'string', array('limit' => 100))
            ->create();

      $data = [
        ['id' => 1, 'name' => 'Admin'],
        ['id' => 2, 'name' => 'Standard'],
      ];

      $this->insert('system_group', $data);
    }
}
