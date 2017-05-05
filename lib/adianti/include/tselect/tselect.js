function tselect_enable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name="'+field+'[]"]').attr('disabled', false); } catch (e) { }
    try{ $('form[name='+form_name+'] [name="'+field+'[]"]').removeClass('tcombo_disabled').addClass('tcombo'); } catch (e) { }    
}

function tselect_disable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name="'+field+'[]"]').attr('disabled', true); } catch (e) { }
    try{ $('form[name='+form_name+'] [name="'+field+'[]"]').removeClass('tcombo').addClass('tcombo_disabled'); } catch (e) { }    
}
function tselect_clear_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name="'+field+'[]"]').val(''); } catch (e) { }    
}

function tselect_add_option(form_name, field, key, value) {
    $(function() {
        $('<option value="'+key+'">'+value+'</option>').appendTo('form[name="'+form_name+'"] select[name="'+field+'[]"]');
    });
}

function tselect_clear(form_name, field) {
    $(function() {
        $('form[name="'+form_name+'"] select[name="'+field+'[]"]').html("");
    });
}