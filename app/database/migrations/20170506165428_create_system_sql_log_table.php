<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemSqlLogTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_sql_log');
      $table->addColumn('logdate', 'timestamp', array('default' => 'CURRENT_TIMESTAMP'))
            ->addColumn('login', 'string')
            ->addColumn('database_name', 'string')
            ->addColumn('sql_command', 'text')
            ->addColumn('statement_type', 'string')
            ->create();
    }
}
