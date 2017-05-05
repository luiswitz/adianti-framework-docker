<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemUserTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_user');
      $table->addColumn('name', 'string', array('limit' => 100))
            ->addColumn('login', 'string', array('limit' => 100))
            ->addColumn('password', 'string', array('limit' => 100))
            ->addColumn('email', 'string', array('limit' => 100))
            ->addColumn('frontpage_id', 'integer')
            ->addColumn('system_unit_id', 'integer', array('null' => true))
            ->addColumn('active', 'string', array('limit' => 1))
            ->addForeignKey('system_unit_id', 'system_unit', array('id'))
            ->addForeignKey('frontpage_id', 'system_program', array('id'))
            ->create();

      $data = [
        ['id' => 1, 'name' => 'Administrator', 'login' => 'admin', 'password' => '21232f297a57a5a743894a0e4a801fc3', 'email' => 'admin@admin.net', 'frontpage_id' => 10, 'system_unit_id' => null, 'active' => 'Y'],
        ['id' => 2, 'name' => 'User', 'login' => 'user', 'password' => 'ee11cbb19052e40b07aac0ca060c23ee', 'email' => 'user@user.net', 'frontpage_id' => 7, 'system_unit_id' => null, 'active' => 'Y']
      ];

      $this->insert('system_user', $data);
    }
}
