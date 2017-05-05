function tcheckgroup_enable_field(form_name, field) {
    setTimeout(function(){
        $('form[name='+form_name+'] [checkgroup='+field+']').removeAttr('disabled');
        $('form[name='+form_name+'] [checkgroup='+field+']').parent().removeAttr('disabled');
    },1);
}

function tcheckgroup_disable_field(form_name, field) {
    setTimeout(function(){
        $('form[name='+form_name+'] [checkgroup='+field+']').attr('disabled', '');
        $('form[name='+form_name+'] [checkgroup='+field+']').parent().attr('disabled', '');
    },1);
}

function tcheckgroup_clear_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [checkgroup='+field+']').attr('checked', false) },1);    
}