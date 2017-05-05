<?php
if (isset($_GET['file']))
{
    $file      = $_GET['file'];
    $info      = pathinfo($file);
    $extension = $info['extension'];
    
    $content_type_list = array();
    $content_type_list['txt']  = 'text/plain';
    $content_type_list['html'] = 'text/html';
    $content_type_list['pdf']  = 'application/pdf';
    $content_type_list['rtf']  = 'application/rtf';
    $content_type_list['csv']  = 'application/csv';
    $content_type_list['doc']  = 'application/msword';
    $content_type_list['docx'] = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    $content_type_list['xls']  = 'application/vnd.ms-excel';
    $content_type_list['xlsx'] = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    $content_type_list['ppt']  = 'application/vnd.ms-powerpoint';
    $content_type_list['pptx'] = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    $content_type_list['odt']  = 'application/vnd.oasis.opendocument.text';
    $content_type_list['ods']  = 'application/vnd.oasis.opendocument.spreadsheet';
    
    if (in_array($extension, array_keys($content_type_list)))
    {
        $basename  = basename($file);
        
        // get the filesize
        $filesize = filesize($file);
        
        header("Pragma: public");
        header("Expires: 0"); // set expiration time
        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header("Content-type: " . $content_type_list[$extension] );
        header("Content-Length: {$filesize}");
        header("Content-disposition: inline; filename=\"{$basename}\"");
        header("Content-Transfer-Encoding: binary");
        
        // a readfile da problemas no internet explorer
        // melhor jogar direto o conteudo do arquivo na tela
        echo file_get_contents($file);
    }
}
