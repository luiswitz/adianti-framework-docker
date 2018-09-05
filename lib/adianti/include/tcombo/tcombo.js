function tcombo_enable_field(form_name, field) {
    
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }

    var selector = '[name="'+field+'"]';
    if (field.indexOf('[') == -1 && $('#'+field).length >0) {
        var selector = '#'+field;
    }
    
    try {
        $(form_name + selector).attr('onclick', null);
        $(form_name + selector).css('pointer-events',   'auto');
        $(form_name + selector).removeClass('tcombo_disabled').addClass('tcombo');
    } catch (e) {
        console.log(e);
    }
}

function tcombo_disable_field(form_name, field) {
    
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }

    var selector = '[name="'+field+'"]';
    if (field.indexOf('[') == -1 && $('#'+field).length >0) {
        var selector = '#'+field
    }
    
    try {
        $(form_name + selector).attr('onclick', 'return false');
        $(form_name + selector).css('pointer-events', 'none');
        $(form_name + selector).removeClass('tcombo').addClass('tcombo_disabled');
    } catch (e) {
        console.log(e);
    }
}

function tcombo_add_option(form_name, field, key, value)
{
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }

    var selector = 'select[name="'+field+'"]';
    
    if (field.indexOf('[') == -1 && $('#'+field).length >0) {
        var selector = '#'+field
    }
    
    var optgroups =  $(form_name + selector).find('optgroup');
    
    if( optgroups.length > 0 ) {
        $('<option value="'+key+'">'+value+'</option>').appendTo(optgroups.last());
    }
    else {
        $('<option value="'+key+'">'+value+'</option>').appendTo(form_name + selector);
    }
    
}

function tcombo_create_opt_group(form_name, field, label)
{
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }
    
    var selector = '[name="'+field+'"]';
    
    if ($('#'+field).length >0) {
        var selector = '#'+field
    }
    
    $('<optgroup label="'+label+'"></optgroup>').appendTo(form_name + selector);
}

function tcombo_clear(form_name, field)
{
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }
    
    if ($(form_name+'[name="'+field+'"]').attr('role') == 'tcombosearch')
    {
        if ($(form_name+'[name="'+field+'"]').find('option:not(:disabled)').length>0)
        {
            $(form_name+'[name="'+field+'"]').val('');
            $(form_name+'[name="'+field+'"]').empty();
            $(form_name+'[name="'+field+'"]').change();
        }
    }
    else
    {
        $(form_name+'[name="'+field+'"]').val(false);
        $(form_name+'[name="'+field+'"]').html("");
    }
}

function tcombo_enable_search(field, placeholder)
{
    $(field).select2({allowClear: true, placeholder: placeholder});
}
