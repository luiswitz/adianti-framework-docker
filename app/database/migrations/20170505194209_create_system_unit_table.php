<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemUnitTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_unit');
      $table->addColumn('name', 'string', array('limit' => 100))
            ->create();
    }
}
