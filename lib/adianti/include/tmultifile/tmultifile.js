function TMultiFileAjaxUpload(fieldName, objFile, action, divParent, completeAction)
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
    var spanDel = $('<span />', {class: 'glyphicon glyphicon-trash red', title: 'Remover', style: 'cursor: pointer; float:left; margin-left: 3px; margin-top: 4px;'});
    var hiddenFile = $('<input />',{type: 'hidden', name: fieldName+'[]'});
    var completeAction = completeAction;
    
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
        xhr.addEventListener('readystatechange', this.onreadystatechangeHandler, false);
        
        // Set up request
        xhr.open('POST', uri, true);
        
        // Fire!
        xhr.send(formData);
    };
    
    // Handle the start of the transmission
    TMultiFileAjaxUpload.prototype.onloadstartHandler = function(evt)
    {
        /*
        if( $(divParent).children('img').size() == 0 )
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
            var response = $.parseJSON( evt.target.responseText );
            $(hiddenFile).val(response.fileName);
            
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

function tmultifile_start( id, service, containerID, completeAction )
{
    $(document).ready( function()
    {
        var receiver = $('#' + id).attr('receiver');
        $('#' + id).change( function()
        {
            $.each( $(this).prop('files'), function(index, file) {
                var tfile = new  TMultiFileAjaxUpload(receiver, file, service, containerID, completeAction);                    
                tfile.initFileAjaxUpload();
            });
        });
    });
}

function tmultifile_enable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=file_'+field+']').removeAttr('disabled');
        $('form[name='+form_name+'] [name=file_'+field+']').removeClass('tfield_disabled').addClass('tfield');
    } catch (e) { }
}

function tmultifile_disable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name=file_'+field+']').attr('disabled', true);
        $('form[name='+form_name+'] [name=file_'+field+']').removeClass('tfield').addClass('tfield_disabled');
    } catch (e) { }
}

function tmultifile_clear_field(form_name, field) {
    try {
        var parentDiv = $('form[name='+form_name+'] [name='+field+']').parent();
        parentDiv.html('');
    } catch (e) { }
    
    try{ $('form[name='+form_name+'] [name='+field+']').val(''); } catch (e) { }
    try{ $('form[name='+form_name+'] [name=file_'+field+']').val(''); } catch (e) { }
}