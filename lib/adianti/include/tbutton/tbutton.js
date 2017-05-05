function tbutton_enable_field(form_name, field) {
    setTimeout(function(){ $('button[name='+field+']').removeAttr('disabled') },1);    
}

function tbutton_disable_field(form_name, field) {
    setTimeout(function(){ $('button[name='+field+']').attr('disabled', true) },1);    
}