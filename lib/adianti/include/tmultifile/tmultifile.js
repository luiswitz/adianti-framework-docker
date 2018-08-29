function TMultiFileAjaxUpload(fieldName, objFile, action, divParent, completeAction, fileHandling)
{
    var objFile = objFile;
    var action = action;
    var divParent = $('#'+divParent);
    var divContainerFile = $('<div />',{style: 'width:100%'});
    var lbFile = $('<span />');
    var divLinhaParcial = $('<div />');
    var divBoxParcial = $('<div />', {style: 'float:left;width:90%;border:1px solid gray;overflow:auto;'});
    var divParcialFile = $('<div />',{class: 'progress-bar'});
    var statusImage = $('<img />');
    var spanDel = $('<span />', {class: 'glyphicon glyphicon-trash red', title: 'Remover', style: 'cursor: pointer; margin-left: 3px; margin-top: 4px;'});
    var hiddenFile = $('<input />',{type: 'hidden', name: fieldName+'[]'});
    var completeAction = completeAction;
    var fileHandling = fileHandling;
    
    $(lbFile).html(objFile.name);
    
    $(divBoxParcial).append(divParcialFile);
    
    $(divLinhaParcial).append(divBoxParcial,spanDel);
        
    $(divContainerFile).append(hiddenFile,lbFile, statusImage, divLinhaParcial);
    
    $(divParent).append(divContainerFile);
    
    $(spanDel).click(
        function(){
            $(divContainerFile).remove();
        }
    );
    
    // Function that will allow us to know if Ajax uploads are supported
    TMultiFileAjaxUpload.prototype.supportAjaxUploadWithProgress = function()
    {
        return this.supportFileAPI() && this.supportAjaxUploadProgressEvents() && this.supportFormData();
    };
    
    // Is the File API supported?
    TMultiFileAjaxUpload.prototype.supportFileAPI = function()
    {
        var fi = document.createElement('INPUT');
        fi.type = 'file';
        return 'files' in fi;
    };
        
    // Are progress events supported?
    TMultiFileAjaxUpload.prototype.supportAjaxUploadProgressEvents = function()
    {
        var xhr = new XMLHttpRequest();
        return !! (xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
    };
    
    // Is FormData supported?
    TMultiFileAjaxUpload.prototype.supportFormData = function()
    {
        return !! window.FormData;
    };
    
    TMultiFileAjaxUpload.prototype.initFileAjaxUpload = function()
    {
        if (this.supportAjaxUploadWithProgress())
        {
            var formData = new FormData();
                        
            // FormData only has the file
            var file = objFile;
            
            formData.append('fileName', file);
            
            // Code common to both variants
            this.sendXHRequest(formData, action);
        }
    };
    
    // Once the FormData instance is ready and we know
    // where to send the data, the code is the same
    // for both variants of this technique
    TMultiFileAjaxUpload.prototype.sendXHRequest = function(formData, uri)
    {
        // Get an XMLHttpRequest instance
        var xhr = new XMLHttpRequest();
        
        // Set up events
        xhr.upload.addEventListener('loadstart', this.onloadstartHandler, false);
        xhr.upload.addEventListener('progress', this.onprogressHandler, false);
        xhr.upload.addEventListener('load', this.onloadHandler, false);
        xhr.addEventListener('readystatechange', this.onreadystatechangeHandler.bind(this), false);
        
        // Set up request
        xhr.open('POST', uri, true);
        
        // Fire!
        xhr.send(formData);
    };
    
    // Handle the start of the transmission
    TMultiFileAjaxUpload.prototype.onloadstartHandler = function(evt)
    {
        /*
        if( $(divParent).children('img').length == 0 )
            $(divParent).prepend($('<img>'));
        
        $(divParent).children('img').attr({src:'lib/adianti/images/tfile_loader.gif',title:'...', style:'float:left; padding:2px'});
        */
    };
    
    // Handle the end of the transmission
    TMultiFileAjaxUpload.prototype.onloadHandler = function(evt)
    {
    };
    
    // Handle the progress
    TMultiFileAjaxUpload.prototype.onprogressHandler = function(evt)
    {
        if( evt.lengthComputable )
        {
            var percent = Math.round(evt.loaded * 100 / evt.total);
            $(divParcialFile).css('width',percent+'%').html(percent+'%');
        }
    };
    
    // Handle the response from the server
    TMultiFileAjaxUpload.prototype.onreadystatechangeHandler = function(evt)
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
    
        if (status == '200' && evt.target.readyState == '4' && evt.target.responseText)
        {
            var response = JSON.parse( evt.target.responseText );
            
            if (fileHandling)
            {
                var dados = tmultifile_getData(hiddenFile);
            
                dados.newFile = response.fileName;
                dados.fileName = response.fileName;
            
                tmultifile_setData(hiddenFile,dados);
            }
            else
            {
                $(hiddenFile).val(response.fileName);
            }
            
            if( response.type == 'success' )
            {
                $(divParcialFile).attr({title: 'Sucesso'});
                $(divParcialFile).addClass('progress-bar-success');
                
                    if (this.readyState == 4 && typeof(completeAction) == "function")
                    {
                        completeAction();
                    }
            }
            else{
                $(divParcialFile).attr({title: 'Ocorreu um erro: '+response.msg});
                $(divParcialFile).addClass('progress-bar-danger');
            }
        }
    };
}

function tmultifile_getData(hidden)
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
    
function tmultifile_setData(hidden,data)
{
    $(hidden).val(encodeURIComponent(JSON.stringify(data)));
};

function tmultifile_show_files( id, fieldName, containerID, fileHandling )
{
    var divParent = $('#'+containerID);

    if (fileHandling)
    {
        $('#'+id).parent().children('input[type=hidden]').each(function(index, inp_hd)
        {
            var dados = tmultifile_getData(inp_hd);
            
            var divContainerFile = $('<div />',{style: 'width:100%'});
            var divFile = $('<div />', {style: 'float:left;width:90%;border:1px solid #ddd;overflow:auto;'});
            if (dados.idFile)
                var linkFile = $('<a />', {href: 'download.php?file='+dados.fileName, target: '_blank'});
            else
                var linkFile = $('<span />');
            var spanDel = $('<span />', {class: 'glyphicon glyphicon-trash red', title: 'Remover', style: 'cursor: pointer; margin-left: 3px; margin-top: 4px;'});
            
            if (! dados.delFile)
            {
                $(divFile).append(linkFile);
                    
                $(linkFile).html(dados.fileName);
        
                $(divContainerFile).append(divFile,spanDel);
        
                $(divParent).append(divContainerFile);
        
                $(spanDel).click(
                    function(){
                        $(divContainerFile).remove();
                        dados.delFile = true;
                        tmultifile_setData(inp_hd,dados);
                    }
                );
            }
        });
    }
}


function tmultifile_start( id, service, containerID, completeAction, fileHandling )
{
    $(document).ready( function()
    {
        var receiver = $('#' + id).attr('receiver');
        $('#' + id).change( function()
        {
            $.each( $(this).prop('files'), function(index, file) {
                var tfile = new  TMultiFileAjaxUpload(receiver, file, service, containerID, completeAction, fileHandling);                    
                tfile.initFileAjaxUpload();
            });
        });
        
        tmultifile_show_files( id, receiver, containerID, fileHandling);
    });
}

function tmultifile_enable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=\'file_'+field+'[]\']').removeAttr('disabled');
        $('form[name='+form_name+'] [name=\'file_'+field+'[]\']').removeClass('tfield_disabled').addClass('tfield');
    } catch (e) {
        console.log(e);
    }
}

function tmultifile_disable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=\'file_'+field+'[]\']').attr('disabled', true);
        $('form[name='+form_name+'] [name=\'file_'+field+'[]\']').removeClass('tfield').addClass('tfield_disabled');
    } catch (e) {
        console.log(e);
    }
}

function tmultifile_clear_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=\''+field+'[]\']').val('');
        $('form[name='+form_name+'] [name=\'file_'+field+'[]\']').val('');
    } catch (e) {
        console.log(e);
    }
}