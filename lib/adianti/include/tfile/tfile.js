function TFileAjaxUpload(idFile, action, divParent, completeAction, fileHandling)
{
    var idFile = idFile;
    var action = action;
    var divParent = $('#'+divParent);
    var completeAction = completeAction;
    var fileHandling = fileHandling;
    
    // Function that will allow us to know if Ajax uploads are supported
    TFileAjaxUpload.prototype.supportAjaxUploadWithProgress = function()
    {
        return this.supportFileAPI() && this.supportAjaxUploadProgressEvents() && this.supportFormData();
    };
    
    // Is the File API supported?
    TFileAjaxUpload.prototype.supportFileAPI = function()
    {
        var fi = document.createElement('INPUT');
        fi.type = 'file';
        return 'files' in fi;
    };
        
    // Are progress events supported?
    TFileAjaxUpload.prototype.supportAjaxUploadProgressEvents = function()
    {
        var xhr = new XMLHttpRequest();
        return !! (xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
    };
    
    // Is FormData supported?
    TFileAjaxUpload.prototype.supportFormData = function()
    {
        return !! window.FormData;
    };
    
    TFileAjaxUpload.prototype.initFileAjaxUpload = function()
    {
        if (this.supportAjaxUploadWithProgress())
        {
            var formData = new FormData();
                        
            // FormData only has the file
            var fileInput = document.getElementById( idFile );
            var file = fileInput.files[0];
            
            formData.append('fileName', file);
            
            // Code common to both variants
            this.sendXHRequest(formData, action);
        }
    };
    
    // Once the FormData instance is ready and we know
    // where to send the data, the code is the same
    // for both variants of this technique
    TFileAjaxUpload.prototype.sendXHRequest = function(formData, uri)
    {
        // Get an XMLHttpRequest instance
        var xhr = new XMLHttpRequest();
        
        // Set up events
        xhr.upload.addEventListener('loadstart', this.onloadstartHandler, false);
        xhr.upload.addEventListener('progress', this.onprogressHandler, false);
        xhr.upload.addEventListener('load', this.onloadHandler, false);
        xhr.addEventListener('readystatechange', this.onreadystatechangeHandler, false);
        
        // Set up request
        xhr.open('POST', uri, true);
        
        // Fire!
        xhr.send(formData);
    };
    
    // Handle the start of the transmission
    TFileAjaxUpload.prototype.onloadstartHandler = function(evt)
    {
        if( $(divParent).children('img').length == 0 )
            $(divParent).prepend($('<img>'));
        
        $(divParent).children('img').attr({src:'lib/adianti/images/tfile_loader.gif',title:'...', style:'float:left; padding:2px'});
    };
    
    // Handle the end of the transmission
    TFileAjaxUpload.prototype.onloadHandler = function(evt)
    {
    };
    
    // Handle the progress
    TFileAjaxUpload.prototype.onprogressHandler = function(evt)
    {
        //var percent = evt.loaded/evt.total*100;
    };
    
    // Handle the response from the server
    TFileAjaxUpload.prototype.onreadystatechangeHandler = function(evt)
    {
        var status = null;
        
        try
        {
            status = evt.target.status;
        }
        catch(e)
        {
            return;
        }
        
        if (status == '200' && evt.target.responseText)
        {
            var response = JSON.parse( evt.target.responseText );
            
            if( response.type == 'success' )
            {
                $(divParent).children('img').attr({src :'lib/adianti/images/ico_ok.png', title: 'Sucesso'});
                
                if (this.readyState == 4) 
                {
                    var hiddenFile = $(divParent).children('input[type=hidden]');
                    
                    if (fileHandling)
                    {
                        var dados = tfile_getData(hiddenFile);
                    
                        if (dados.fileName)
                            dados.delFile = dados.fileName;
                        
                        dados.newFile = response.fileName;
                        dados.fileName = response.fileName;
                    
                        tfile_setData(hiddenFile,dados);
    
                        tfile_show_file(divParent,response.fileName,false,fileHandling);
                    }
                    else
                    {
                        $(hiddenFile).val(response.fileName);
                    }
                    
                    if (typeof(completeAction) == "function")
                        completeAction();
                }
            }
            else
            {
                $(divParent).children('img').attr({src: 'lib/adianti/images/ico_error.png',title: response.msg});
            }
        }
    };
}

function tfile_getData(hidden)
{
    var dados = decodeURIComponent($(hidden).val());
    var dados_json = '';
    
    try
    {
        dados_json = dados ? JSON.parse(dados) : {};
    }
    catch(e)
    {
        dados_json = {};
    }
    return dados_json;
};
    
function tfile_setData(hidden,data)
{
    if (data)
        $(hidden).val(encodeURIComponent(JSON.stringify(data)));
    else
        $(hidden).val('');
};

function tfile_show_file(divParent, filename, link, fileHandling)
{
    var divLinhaFile = $('<div />', {class: 'div_filename'});
    var divBox = $('<div />', {style: 'float:left;width:90%;border:1px solid #ddd;overflow:auto;'});
    var spanDel = $('<span />', {class: 'glyphicon glyphicon-trash red', title: 'Remover', style: 'cursor: pointer; float:left; margin-left: 3px; margin-top: 4px;'});
    var hiddenFile = $(divParent).children('input[type=hidden]');
    var dados = tfile_getData(hiddenFile);
    var filename = filename;
    
    if (fileHandling)
    {
        filename = dados.fileName;
    }
    
    if (filename)
    {    
        if (link)
        {
            var linkFile = $('<a />', {href: 'download.php?file='+filename, target: '_blank'});
            $(linkFile).append(filename);
            $(divBox).append(linkFile);
        }
        else
        {
            $(divBox).append(filename);
        }
        
        $(divParent).children('.div_filename').remove();
        
        $(divParent).append(divLinhaFile);
    
        $(divLinhaFile).append(divBox,spanDel);
        
        $(spanDel).click(
            function(){
                $(divLinhaFile).remove();
                $(divParent).children('img').attr({src:'',title:''});
                dados.delFile = filename;
                if(dados.delFile == dados.newFile)
                    dados = '';
                tfile_setData(hiddenFile,dados);
            }
        );
   }
}    

function tfile_start( id, service, containerID, completeAction, fileHandling )
{
    $('#' + id).change( function() {
        var tfile = new TFileAjaxUpload(id, service, containerID, completeAction, fileHandling);
        tfile.initFileAjaxUpload();
    });
    
    if ($('#'+containerID).children('input[type=hidden]').val())
        tfile_show_file($('#'+containerID), $('#' + id).val(), true, fileHandling);
}

function tfile_enable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=file_'+field+']').removeAttr('disabled');
        $('form[name='+form_name+'] [name=file_'+field+']').removeClass('tfield_disabled').addClass('tfield');
    } catch (e) {
        console.log(e);
    }
}

function tfile_disable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=file_'+field+']').attr('disabled', true);
        $('form[name='+form_name+'] [name=file_'+field+']').removeClass('tfield').addClass('tfield_disabled');
    } catch (e) {
        console.log(e);
    }
}

function tfile_clear_field(form_name, field) {
    try{
        $('form[name='+form_name+'] [name='+field+']').val('');
        $('form[name='+form_name+'] [name=file_'+field+']').val('');
    } catch (e) {
        console.log(e);
    }
}

function tfile_update_download_link(name)
{
    if ($('#view_'+name).length)
    {
        value = $('[name='+name+']').val();
        $('#view_'+name).attr('href', 'download.php?file=tmp/' + value);
        $('#view_'+name).html('tmp/' + value);
    }
}