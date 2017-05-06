<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemDocumentTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_document');
      $table->addColumn('system_user_id', 'integer')
            ->addColumn('title', 'string', array('null' => false))
            ->addColumn('description', 'text', array('null' => false))
            ->addColumn('category_id', 'integer')
            ->addColumn('submission_date', 'date')
            ->addColumn('archive_date', 'date')
            ->addColumn('filename', 'text')
            ->addForeignKey('system_user_id', 'system_user', array('id'))
            ->addForeignKey('category_id', 'system_document_category', array('id'))
            ->create();
    }
}
