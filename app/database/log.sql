CREATE TABLE system_change_log (
    id INTEGER PRIMARY KEY NOT NULL,
    logdate timestamp,
    login TEXT,
    tablename TEXT,
    primarykey TEXT,
    pkvalue TEXT,
    operation TEXT,
    columnname TEXT,
    oldvalue TEXT,
    newvalue TEXT);

CREATE TABLE system_sql_log (
    id INTEGER PRIMARY KEY NOT NULL,
    logdate timestamp,
    login TEXT,
    database_name TEXT,
    sql_command TEXT,
    statement_type TEXT);

CREATE TABLE system_access_log (
    id INTEGER PRIMARY KEY NOT NULL,
    sessionid text,
    login text,
    login_time timestamp,
    logout_time timestamp);