CREATE TABLE system_group (
    id INTEGER PRIMARY KEY NOT NULL,
    name varchar(100));
INSERT INTO system_group VALUES(1,'Admin');
INSERT INTO system_group VALUES(2,'Standard');
CREATE TABLE system_program (
    id INTEGER PRIMARY KEY NOT NULL,
    name varchar(100),
    controller varchar(100));
CREATE TABLE system_unit (
    id INTEGER PRIMARY KEY NOT NULL,
    name varchar(100));
INSERT INTO system_program VALUES(1,'System Group Form','SystemGroupForm');
INSERT INTO system_program VALUES(2,'System Group List','SystemGroupList');
INSERT INTO system_program VALUES(3,'System Program Form','SystemProgramForm');
INSERT INTO system_program VALUES(4,'System Program List','SystemProgramList');
INSERT INTO system_program VALUES(5,'System User Form','SystemUserForm');
INSERT INTO system_program VALUES(6,'System User List','SystemUserList');
INSERT INTO system_program VALUES(7,'Common Page','CommonPage');
INSERT INTO system_program VALUES(8,'System PHP Info','SystemPHPInfoView');
INSERT INTO system_program VALUES(9,'System ChangeLog View','SystemChangeLogView');
INSERT INTO system_program VALUES(10,'Welcome View','WelcomeView');
INSERT INTO system_program VALUES(11,'System Sql Log','SystemSqlLogList');
INSERT INTO system_program VALUES(12,'System Profile View','SystemProfileView');
INSERT INTO system_program VALUES(13,'System Profile Form','SystemProfileForm');
INSERT INTO system_program VALUES(14,'System SQL Panel','SystemSQLPanel');
INSERT INTO system_program VALUES(15,'System Access Log','SystemAccessLogList');
INSERT INTO system_program VALUES(16,'System Message Form','SystemMessageForm');
INSERT INTO system_program VALUES(17,'System Message List','SystemMessageList');
INSERT INTO system_program VALUES(18,'System Message Form View','SystemMessageFormView');
INSERT INTO system_program VALUES(19,'System Notification List','SystemNotificationList');
INSERT INTO system_program VALUES(20,'System Notification Form View','SystemNotificationFormView');
INSERT INTO system_program VALUES(21,'System Document Category List','SystemDocumentCategoryFormList');
INSERT INTO system_program VALUES(22,'System Document Form','SystemDocumentForm');
INSERT INTO system_program VALUES(23,'System Document Upload Form','SystemDocumentUploadForm');
INSERT INTO system_program VALUES(24,'System Document List','SystemDocumentList');
INSERT INTO system_program VALUES(25,'System Shared Document List','SystemSharedDocumentList');
INSERT INTO system_program VALUES(26,'System Unit Form','SystemUnitForm');
INSERT INTO system_program VALUES(27,'System Unit List','SystemUnitList');
INSERT INTO system_program VALUES(28,'System Access stats','SystemAccessLogStats');
INSERT INTO system_program VALUES(29,'System Preference form','SystemPreferenceForm');
INSERT INTO system_program VALUES(30,'System Support form','SystemSupportForm');
CREATE TABLE system_user (
    id INTEGER PRIMARY KEY NOT NULL,
    name varchar(100),
    login varchar(100),
    password varchar(100),
    email varchar(100),
    frontpage_id int, system_unit_id int references system_unit(id), active char(1),
    FOREIGN KEY(frontpage_id) REFERENCES system_program(id));
INSERT INTO system_user VALUES(1,'Administrator','admin','21232f297a57a5a743894a0e4a801fc3','admin@admin.net',10,NULL,'Y');
INSERT INTO system_user VALUES(2,'User','user','ee11cbb19052e40b07aac0ca060c23ee','user@user.net',7,NULL,'Y');
CREATE TABLE system_user_group (
    id INTEGER PRIMARY KEY NOT NULL,
    system_user_id int,
    system_group_id int,
    FOREIGN KEY(system_user_id) REFERENCES system_user(id),
    FOREIGN KEY(system_group_id) REFERENCES system_group(id));
INSERT INTO system_user_group VALUES(1,1,1);
INSERT INTO system_user_group VALUES(2,2,2);
INSERT INTO system_user_group VALUES(3,1,2);
CREATE TABLE system_group_program (
    id INTEGER PRIMARY KEY NOT NULL,
    system_group_id int,
    system_program_id int,
    FOREIGN KEY(system_group_id) REFERENCES system_group(id),
    FOREIGN KEY(system_program_id) REFERENCES system_program(id));
INSERT INTO system_group_program VALUES(1,1,1);
INSERT INTO system_group_program VALUES(2,1,2);
INSERT INTO system_group_program VALUES(3,1,3);
INSERT INTO system_group_program VALUES(4,1,4);
INSERT INTO system_group_program VALUES(5,1,5);
INSERT INTO system_group_program VALUES(6,1,6);
INSERT INTO system_group_program VALUES(7,1,8);
INSERT INTO system_group_program VALUES(8,1,9);
INSERT INTO system_group_program VALUES(9,1,11);
INSERT INTO system_group_program VALUES(10,1,14);
INSERT INTO system_group_program VALUES(11,1,15);
INSERT INTO system_group_program VALUES(12,2,10);
INSERT INTO system_group_program VALUES(13,2,12);
INSERT INTO system_group_program VALUES(14,2,13);
INSERT INTO system_group_program VALUES(15,2,16);
INSERT INTO system_group_program VALUES(16,2,17);
INSERT INTO system_group_program VALUES(17,2,18);
INSERT INTO system_group_program VALUES(18,2,19);
INSERT INTO system_group_program VALUES(19,2,20);
INSERT INTO system_group_program VALUES(20,1,21);
INSERT INTO system_group_program VALUES(21,2,22);
INSERT INTO system_group_program VALUES(22,2,23);
INSERT INTO system_group_program VALUES(23,2,24);
INSERT INTO system_group_program VALUES(24,2,25);
INSERT INTO system_group_program VALUES(25,1,26);
INSERT INTO system_group_program VALUES(26,1,27);
INSERT INTO system_group_program VALUES(27,1,28);
INSERT INTO system_group_program VALUES(28,1,29);
INSERT INTO system_group_program VALUES(29,2,30);
CREATE TABLE system_user_program (
    id INTEGER PRIMARY KEY NOT NULL,
    system_user_id int,
    system_program_id int,
    FOREIGN KEY(system_user_id) REFERENCES system_user(id),
    FOREIGN KEY(system_program_id) REFERENCES system_program(id));
INSERT INTO system_user_program VALUES(1,2,7);
CREATE TABLE system_preference (
    id text,
    value text
);
CREATE INDEX system_user_program_idx ON system_user(frontpage_id);
CREATE INDEX system_user_group_group_idx ON system_user_group(system_group_id);
CREATE INDEX system_user_group_user_idx ON system_user_group(system_user_id);
CREATE INDEX system_group_program_program_idx ON system_group_program(system_program_id);
CREATE INDEX system_group_program_group_idx ON system_group_program(system_group_id);
CREATE INDEX system_user_program_program_idx ON system_user_program(system_program_id);
CREATE INDEX system_user_program_user_idx ON system_user_program(system_user_id);
