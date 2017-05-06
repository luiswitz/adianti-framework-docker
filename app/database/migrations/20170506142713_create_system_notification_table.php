<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemNotificationTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_notification');
      $table->addColumn('system_user_id', 'integer')
            ->addColumn('system_user_to_id', 'integer')
            ->addColumn('subject', 'text', array('null' => false))
            ->addColumn('message', 'text', array('null' => false))
            ->addColumn('dt_message', 'text')
            ->addColumn('action_url', 'text')
            ->addColumn('action_label', 'text')
            ->addColumn('icon', 'text')
            ->addColumn('checked', 'string', array('limit' => 1))
            ->addForeignKey('system_user_id', 'system_user', array('id'))
            ->addForeignKey('system_user_to_id', 'system_user', array('id'))
            ->create();
    }
}
