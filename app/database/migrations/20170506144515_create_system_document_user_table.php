<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemDocumentUserTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_document_user');
      $table->addColumn('document_id', 'integer')
            ->addColumn('system_user_id', 'integer')
            ->addForeignKey('document_id', 'system_document', array('id'))
            ->addForeignKey('system_user_id', 'system_user', array('id'))
            ->create();
    }
}
