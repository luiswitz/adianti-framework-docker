function tcombo_enable_field(form_name, field) {
    
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
    
    try { $(form_name + selector).attr('onclick', null); } catch (e) { }
    try { $(form_name + selector).css('pointer-events',   'auto'); } catch (e) { }
    try { $(form_name + selector).removeClass('tcombo_disabled').addClass('tcombo'); } catch (e) { }    
}

function tcombo_disable_field(form_name, field) {
    
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
    
    try { $(form_name + selector).attr('onclick', 'return false'); } catch (e) { }
    try { $(form_name + selector).css('pointer-events', 'none'); } catch (e) { }
    try { $(form_name + selector).removeClass('tcombo').addClass('tcombo_disabled'); } catch (e) { }    
}

function tcombo_add_option(form_name, field, key, value)
{
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }

    $(function() {
        $('<option value="'+key+'">'+value+'</option>').appendTo(form_name+'select[name="'+field+'"]');
    });
}

function tcombo_clear(form_name, field)
{
    if(typeof form_name != 'undefined' && form_name != '') {
        form_name = 'form[name="'+form_name+'"] ';
    }
    else {
        form_name = '';
    }

    $(function() {
        $(form_name+'[name="'+field+'"]').val(false);
        $(form_name+'[name="'+field+'"]').html("");
    });
}