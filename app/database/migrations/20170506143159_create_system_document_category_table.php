<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemDocumentCategoryTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_document_category');
      $table->addColumn('name', 'string', array('null' => false))
            ->create();
    }
}
