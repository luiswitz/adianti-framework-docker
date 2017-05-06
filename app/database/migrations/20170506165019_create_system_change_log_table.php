<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemChangeLogTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_change_log');
      $table->addColumn('logdate', 'timestamp', array('default' => 'CURRENT_TIMESTAMP'))
            ->addColumn('login', 'string')
            ->addColumn('tablename', 'string')
            ->addColumn('primarykey', 'string')
            ->addColumn('pkvalue', 'string')
            ->addColumn('operation', 'string')
            ->addColumn('columnname', 'string')
            ->addColumn('oldvalue', 'string')
            ->addColumn('newvalue', 'string')
            ->create();
    }
}
