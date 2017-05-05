function tfield_enable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').attr('readonly', false); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').removeClass('tfield_disabled').addClass('tfield'); } catch (e) { }    
}

function tfield_disable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').attr('readonly', true); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').removeClass('tfield').addClass('tfield_disabled'); } catch (e) { }    
}

function tfield_clear_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').val(''); } catch (e) { }    
}

function tfield_transfer_value(source, target, delimiter) {
    $(source).closest(delimiter).find(target).val($(source).val());
}