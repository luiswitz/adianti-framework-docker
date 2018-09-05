<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemGroupProgramTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_group_program');
      $table->addColumn('system_group_id', 'integer')
            ->addColumn('system_program_id', 'integer')
            ->addForeignKey('system_group_id', 'system_group', array('id'))
            ->addForeignKey('system_program_id', 'system_program', array('id'))
            ->create();

      $data = [
        ['id' => 1, 'system_group_id' => 1, 'system_program_id' => 1],
        ['id' => 2, 'system_group_id' => 1, 'system_program_id' => 2],
        ['id' => 3, 'system_group_id' => 1, 'system_program_id' => 3],
        ['id' => 4, 'system_group_id' => 1, 'system_program_id' => 4],
        ['id' => 5, 'system_group_id' => 1, 'system_program_id' => 5],
        ['id' => 6, 'system_group_id' => 1, 'system_program_id' => 6],
        ['id' => 7, 'system_group_id' => 1, 'system_program_id' => 8],
        ['id' => 8, 'system_group_id' => 1, 'system_program_id' => 9],
        ['id' => 9, 'system_group_id' => 1, 'system_program_id' => 11],
        ['id' => 10, 'system_group_id' => 1, 'system_program_id' => 14],
        ['id' => 11, 'system_group_id' => 1, 'system_program_id' => 15],
        ['id' => 12, 'system_group_id' => 2, 'system_program_id' => 10],
        ['id' => 13, 'system_group_id' => 2, 'system_program_id' => 12],
        ['id' => 14, 'system_group_id' => 2, 'system_program_id' => 13],
        ['id' => 15, 'system_group_id' => 2, 'system_program_id' => 16],
        ['id' => 16, 'system_group_id' => 2, 'system_program_id' => 17],
        ['id' => 17, 'system_group_id' => 2, 'system_program_id' => 18],
        ['id' => 18, 'system_group_id' => 2, 'system_program_id' => 19],
        ['id' => 19, 'system_group_id' => 2, 'system_program_id' => 20],
        ['id' => 20, 'system_group_id' => 1, 'system_program_id' => 21],
        ['id' => 21, 'system_group_id' => 2, 'system_program_id' => 22],
        ['id' => 22, 'system_group_id' => 2, 'system_program_id' => 23],
        ['id' => 23, 'system_group_id' => 2, 'system_program_id' => 24],
        ['id' => 24, 'system_group_id' => 2, 'system_program_id' => 25],
        ['id' => 25, 'system_group_id' => 1, 'system_program_id' => 26],
        ['id' => 26, 'system_group_id' => 1, 'system_program_id' => 27],
        ['id' => 27, 'system_group_id' => 1, 'system_program_id' => 28],
        ['id' => 28, 'system_group_id' => 1, 'system_program_id' => 29],
        ['id' => 29, 'system_group_id' => 2, 'system_program_id' => 30], 
        ['id' => 30, 'system_group_id' => 1, 'system_program_id' => 31],
        ['id' => 31, 'system_group_id' => 1, 'system_program_id' => 32],
        ['id' => 32, 'system_group_id' => 1, 'system_program_id' => 33],
        ['id' => 33, 'system_group_id' => 1, 'system_program_id' => 34]
      ];

      $this->insert('system_group_program', $data);
    }
}
