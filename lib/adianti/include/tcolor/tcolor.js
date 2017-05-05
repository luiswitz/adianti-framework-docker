function tcolor_enable_field(form_name, field) {
    try { setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').closest('.color-div').colorpicker('enable'); },1); } catch (e) { }    
}

function tcolor_disable_field(form_name, field) {
    try { setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').closest('.color-div').colorpicker('disable'); },1); } catch (e) { }
}

function tcolor_start(id, size, change_function) {
    $(function() {
        if(typeof change_function != 'undefined')
        {
            $('#'+id).closest('.color-div').colorpicker().on('changeColor', function(e) {
                change_function(e.color);
            });
        }
        else
        {
            $('#'+id).closest('.color-div').colorpicker();
        }
        
        if (size !== 'undefined')
        {
            $('#'+id).closest('.color-div').width(size);
        }
        
        // to allow colorpicker open over popover
        $('.colorpicker').css('z-index', 1000000);
    });
}