<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemAccessLogTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_access_log');
      $table->addColumn('sessionid', 'string')
            ->addColumn('login', 'string')
            ->addColumn('login_time', 'timestamp', array('default' => 'CURRENT_TIMESTAMP'))
            ->addColumn('logout_time', 'timestamp', array('default' => 'CURRENT_TIMESTAMP'))
            ->create();
    }
}
