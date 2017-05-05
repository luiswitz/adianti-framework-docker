<?php

use Phinx\Migration\AbstractMigration;

class CreateSystemProgramTable extends AbstractMigration
{
    public function change()
    {
      $table = $this->table('system_program');
      $table->addColumn('name', 'string', array('limit' => 100))
            ->addColumn('controller', 'string', array('limit' => 100))
            ->create();

      $data = [
        ['id' => 1, 'name' => 'System Group Form','controller' => 'SystemGroupForm'],
        ['id' => 2, 'name' => 'System Group List','controller' => 'SystemGroupList'],
        ['id' => 3, 'name' => 'System Program Form','controller' => 'SystemProgramForm'],
        ['id' => 4, 'name' => 'System Program List','controller' => 'SystemProgramList'],
        ['id' => 5, 'name' => 'System User Form','controller' => 'SystemUserForm'],
        ['id' => 6, 'name' => 'System User List','controller' => 'SystemUserList'],
        ['id' => 7, 'name' => 'Common Page','controller' => 'CommonPage'],
        ['id' => 8, 'name' => 'System PHP Info','controller' => 'SystemPHPInfoView'],
        ['id' => 9, 'name' => 'System ChangeLog View','controller' => 'SystemChangeLogView'],
        ['id' => 10, 'name' => 'Welcome View','controller' => 'WelcomeView'],
        ['id' => 11, 'name' => 'System Sql Log','controller' => 'SystemSqlLogList'],
        ['id' => 12, 'name' => 'System Profile View','controller' => 'SystemProfileView'],
        ['id' => 13, 'name' => 'System Profile Form','controller' => 'SystemProfileForm'],
        ['id' => 14, 'name' => 'System SQL Panel','controller' => 'SystemSQLPanel'],
        ['id' => 15, 'name' => 'System Access Log','controller' => 'SystemAccessLogList'],
        ['id' => 16, 'name' => 'System Message Form','controller' => 'SystemMessageForm'],
        ['id' => 17, 'name' => 'System Message List','controller' => 'SystemMessageList'],
        ['id' => 18, 'name' => 'System Message Form View','controller' => 'SystemMessageFormView'],
        ['id' => 19, 'name' => 'System Notification List','controller' => 'SystemNotificationList'],
        ['id' => 20, 'name' => 'System Notification Form View','controller' => 'SystemNotificationFormView'],
        ['id' => 21, 'name' => 'System Document Category List','controller' => 'SystemDocumentCategoryFormList'],
        ['id' => 22, 'name' => 'System Document Form','controller' => 'SystemDocumentForm'],
        ['id' => 23, 'name' => 'System Document Upload Form','controller' => 'SystemDocumentUploadForm'],
        ['id' => 24, 'name' => 'System Document List','controller' => 'SystemDocumentList'],
        ['id' => 25, 'name' => 'System Shared Document List','controller' => 'SystemSharedDocumentList'],
        ['id' => 26, 'name' => 'System Unit Form','controller' => 'SystemUnitForm'],
        ['id' => 27, 'name' => 'System Unit List','controller' => 'SystemUnitList'],
        ['id' => 28, 'name' => 'System Access stats','controller' => 'SystemAccessLogStats'],
        ['id' => 29, 'name' => 'System Preference form','controller' => 'SystemPreferenceForm'],
        ['id' => 30, 'name' => 'System Support form','controller' => 'SystemSupportForm']
      ];

      $this->insert('system_program', $data);
    }
}
