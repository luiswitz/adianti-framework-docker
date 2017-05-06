<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemDocumentGroupTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_document_group');
      $table->addColumn('document_id', 'integer')
            ->addColumn('system_group_id', 'integer')
            ->addForeignKey('document_id', 'system_document', array('id'))
            ->addForeignKey('system_group_id', 'system_group', array('id'))
            ->create();
    }
}
