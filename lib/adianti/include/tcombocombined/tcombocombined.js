function tcombocombined_enable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').attr('disabled', false); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').removeClass('tfield_disabled').addClass('tfield'); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').next().attr('disabled', false); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').next().removeClass('tcombo_disabled').addClass('tcombo'); } catch (e) { }
}

function tcombocombined_disable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').attr('disabled', true); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').removeClass('tfield').addClass('tfield_disabled'); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').next().attr('disabled', true); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').next().removeClass('tcombo').addClass('tcombo_disabled'); } catch (e) { }
}

function tcombocombined_clear_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').val(''); } catch (e) { } 
    try{ $('form[name='+form_name+'] [name='+field+']').next().val(''); } catch (e) { }
}