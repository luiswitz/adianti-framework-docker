function thtmleditor_enable_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').next().find('.note-editable').attr('contenteditable', true); },1);
}

function thtmleditor_disable_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').next().find('.note-editable').attr('contenteditable', false); },1);
}

function thtmleditor_clear_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').code(''); },1);    
}

function thtmleditor_start(objectId, width, height, lang) {
    $('#'+objectId).summernote({
        width: width,
        height: height,
        lang: lang
    });
    
    if (typeof $('#'+objectId).next('.note-editor')[0] !== 'undefined')
    {
        var container = $('#'+objectId).next('.note-editor')[0];
        $(container).css('margin', $('#'+objectId).css('margin'));
    }
}