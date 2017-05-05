function tform_send_data(form_name, field, value, fire_events) {
    try{
        if ($('form[name='+form_name+'] [name='+field+']').length || $("form[name="+form_name+"] [name='"+field+"[]']").length)
        {
            if (typeof Adianti.formEventsCounter == 'undefined') {
                Adianti.formEventsCounter = 0;
            }
            
            if (Adianti.formEventsCounter == 0 ) {
                if ($('form[name='+form_name+'] [name='+field+']').length)
                {
                    if ($('form[name='+form_name+'] [name='+field+']').attr('class') == 'thtmleditor') {
                        $('form[name='+form_name+'] [name='+field+']').code( value );
                    }
                    else if ($('form[name='+form_name+'] [name='+field+']').attr('type') == 'radio') {
                        if (value) {
                            $('form[name='+form_name+'] [name='+field+']').filter('[value='+value+']').prop('checked', true);
                        }
                    }
                    else {
                        $('form[name='+form_name+'] [name='+field+']').val( value );
                    }
                    
                    if (fire_events) { 
                        if ($('form[name='+form_name+'] [name='+field+']').attr('exitaction')) {
                            tform_events_hang_exec( $('form[name='+form_name+'] [name='+field+']').attr('exitaction') );
                        }
                        if ($('form[name='+form_name+'] [name='+field+']').attr('changeaction')) {
                            tform_events_hang_exec( $('form[name='+form_name+'] [name='+field+']').attr('changeaction') );
                        }
                    }
                }
                else if ($("form[name="+form_name+"] [name='"+field+"[]']").length)
                {
                    if ($("form[name="+form_name+"] [name='"+field+"[]']").attr('type') == 'checkbox') {
                        $("form[name="+form_name+"] [name='"+field+"[]']").prop('checked', false);
                        
                        if (value) {
                            var checkeds = value.split(',');
                            $.each(checkeds, function(key, checkvalue) {
                                $("form[name="+form_name+"] [name='"+field+"[]']").filter('[value='+checkvalue+']').prop('checked', true);
                            } );
                        }
                    }
                    else if ($("form[name="+form_name+"] select[name='"+field+"[]']").length)
                    {
                        if (value) {
                            var checkeds = value.split(',');
                            $("form[name="+form_name+"] select[name='"+field+"[]'] option").prop('selected', false);
                            $.each(checkeds, function(key, checkvalue) {
                                $("form[name="+form_name+"] select[name='"+field+"[]'] option").filter('[value='+checkvalue+']').prop('selected', true);
                            } );
                        }
                    }
                    
                    if (fire_events) { 
                        if ($("form[name="+form_name+"] [name='"+field+"[]']").attr('exitaction')) {
                            tform_events_hang_exec( $("form[name="+form_name+"] [name='"+field+"[]']").attr('exitaction') );
                        }
                        if ($("form[name="+form_name+"] [name='"+field+"[]']").attr('changeaction')) {
                            tform_events_hang_exec( $("form[name="+form_name+"] [name='"+field+"[]']").attr('changeaction') );
                        }
                    }
                }
            }
            else {
                tform_events_queue_push( function(){
                    tform_send_data(form_name, field, value, fire_events);
                });
            }
        }
    } catch (e) { }
}

function tform_send_data_by_id(form_name, field, value, fire_events) {
    try{
        if ($('form[name='+form_name+'] [id='+field+']').length) {
            if (typeof Adianti.formEventsCounter == 'undefined') {
                Adianti.formEventsCounter = 0;
            }
            
            if (Adianti.formEventsCounter == 0 ) {
                $('form[name='+form_name+'] [id='+field+']').val( value );
                if (fire_events) { 
                    if ($('form[name='+form_name+'] [id='+field+']').attr('exitaction')) {
                        tform_events_hang_exec( $('form[name='+form_name+'] [id='+field+']').attr('exitaction') );
                    }
                    if ($('form[name='+form_name+'] [id='+field+']').attr('changeaction')) {
                        tform_events_hang_exec( $('form[name='+form_name+'] [id='+field+']').attr('changeaction') );
                    }
                }
            }
            else {
                tform_events_queue_push( function(){
                    tform_send_data_by_id(form_name, field, value, fire_events);
                });
            }
        }
    } catch (e) { }
}

function tform_events_hang_exec( string_callback )
{
    Adianti.formEventsCounter ++;
    string_callback=string_callback.replace("'callback'", 'tform_decrease_events_counter');
    Function(string_callback)();
}

function tform_events_queue_push( callback )
{
    if (typeof Adianti.formEventsQueue == 'undefined')
    {
        Adianti.formEventsQueue = new Array;
    }
    Adianti.formEventsQueue.push( callback );
    setTimeout( tform_process_events_queue, 100 );
}

function tform_process_events_queue()
{
    if (Adianti.formEventsCounter == 0 && Adianti.formEventsQueue.length > 0)
    {
        next = Adianti.formEventsQueue.shift();
        next();
    }
    
    if (Adianti.formEventsQueue.length > 0)
    {
        setTimeout( tform_process_events_queue, 100 );
    }
}

function tform_decrease_events_counter()
{
    Adianti.formEventsCounter --;
}

function tform_send_data_aggregate(form_name, field, value, fire_events) {
    try {
        if ($('form[name='+form_name+'] [name='+field+']').val() == '')
        {
            tform_send_data(form_name, field, value, fire_events);
        }
        else
        {
            current_value = $('form[name='+form_name+'] [name='+field+']').val();
            $('form[name='+form_name+'] [name='+field+']').val( current_value + ', '+ value );
        }
    } catch (e) { }
}

function tform_hide_field(form, field) {
    $('#'+form+' [name="'+field+'"]').closest('.tformrow').hide('fast');
}

function tform_show_field(form, field) {
    $('#'+form+' [name="'+field+'"]').closest('.tformrow').show('fast');
}
