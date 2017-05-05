<?php
class SystemPermission
{
    public static function checkPermission($action)
    {
        $programs = TSession::getValue('programs');
        return (isset($programs[$action]) AND $programs[$action]);
    } 
}
