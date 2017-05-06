<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemPreferenceTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_preference', array('id' => false, 'primary_key' => 'id'));
      $table->addColumn('id', 'string', array('null' => false))
            ->addColumn('value', 'string', array('null' => false))
            ->create();
    }
}
