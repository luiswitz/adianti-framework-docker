function tseekbutton_enable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').attr('disabled', false); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').removeClass('tfield_disabled').addClass('tfield'); } catch (e) { }
    setTimeout(function(){ $('form[name='+form_name+'] [name=_'+field+'_link]').show() },1);    
} 
                            
function tseekbutton_disable_field(form_name, field) {
    try{ $('form[name='+form_name+'] [name='+field+']').attr('disabled', true); } catch (e) { }
    try{ $('form[name='+form_name+'] [name='+field+']').removeClass('tfield_disabled').addClass('tfield'); } catch (e) { }
    setTimeout(function(){ $('form[name='+form_name+'] [name=_'+field+'_link]').hide() },1);    
}