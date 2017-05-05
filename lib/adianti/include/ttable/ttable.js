function ttable_clone_previous_row(element)
{
    var current = $(element).closest('tr');
    var table = $(element).closest('table');
    var previous = current.prev();
    var insert = previous.clone();
    ttable_reset_fields(insert, true);
    $(element).closest('tr').before($(insert));
    
    ttable_reset_counter(table);
}

function ttable_clone_row(element)
{
    var current = $(element).closest('tr');
    var table = $(element).closest('table');
    var previous = current.prev();
    var insert = current.clone();
    ttable_reset_fields(insert, false);
    current.after($(insert));
    
    ttable_reset_counter(table);
}

function ttable_reset_counter(table)
{
    var count = 0;
    var rows = $(table).find('tr').each(function(index, row) {
        var fields = $(row).find('input');
        $(row).data('row', count);
        
        if (fields.length > 0)
        {
            $.each(fields, function(findex, field)
            {
                $(field).data('row', count);
            });
            count ++;
        }
    });
}

function ttable_remove_row(element)
{
    var table = $(element).closest('table');
    var rows  = table.find('tbody').find('tr').length -1;
    tr = $(element).closest('tr');
    
    if (rows == 1) // last row
    {
        var insert = tr.clone();
        ttable_reset_fields(insert, true);
        tr.after($(insert));
        tr.remove();
    }
    else
    {
        tr.remove();
    }
    ttable_reset_counter(table);
}

function ttable_reset_fields(row, clear_fields)
{
    var fields = $(row).find('input,select');
    var uniqid = parseInt(Math.random() * 100000000);
    
    $.each(fields, function(index, field)
    {
        var field_id = $(field).attr('id');
        var field_component = $(field).attr('widget');
        
        if (typeof field_id !== "undefined")
        {
            var field_id_parts = field_id.split('_');
            field_id_parts.pop();
            var field_prefix = field_id_parts.join('_');
            var new_id = field_prefix + '_' + uniqid;
            var parent = $(field).parent();
            
            if (field_component =='tdate')
            {
                // realocate in dom
                $(field).attr('id', new_id);
                if (clear_fields) {
                    $(field).val('');
                }
                
                if (typeof $(field).attr('exitaction') !== 'undefined') {
                    $(field).attr('exitaction', $(field).attr('exitaction').replace(field_id, new_id));
                }
                if (typeof $(field).attr('onblur') !== 'undefined') {
                    $(field).attr('onblur', $(field).attr('onblur').replace(field_id, new_id));
                }
                
                grandparent = $(parent).parent();
                field = $(field).detach()
                $(parent).remove();
                grandparent.append(field);
                
                var re = new RegExp(field_id, 'g');
                ttable_execute_scripts(grandparent, 'tdate', function(script_content) {
                    script_content = script_content.replace(re, new_id);
                    return script_content;
                });
            }
            else if (field_component =='tentry')
            {
                $(field).attr('id', new_id);
                if (clear_fields) {
                    $(field).val('');
                }
                
                if (typeof $(field).attr('exitaction') !== 'undefined') {
                    $(field).attr('exitaction', $(field).attr('exitaction').replace(field_id, new_id));
                }
                if (typeof $(field).attr('onblur') !== 'undefined') {
                    $(field).attr('onblur', $(field).attr('onblur').replace(field_id, new_id));
                }
                
                var re = new RegExp(field_id, 'g');
                ttable_execute_scripts(parent, 'tentry', function(script_content) {
                    script_content = script_content.replace(re, new_id);
                    return script_content;
                });
            }
            else if (field_component =='thidden')
            {
                $(field).attr('id', new_id);
                if (clear_fields) {
                    $(field).val('');
                }
                
                var re = new RegExp(field_id, 'g');
                ttable_execute_scripts(parent, 'thidden', function(script_content) {
                    script_content = script_content.replace(re, new_id);
                    return script_content;
                });
            }
            else if (field_component =='tdbmultisearch')
            {
                $(field).attr('id', new_id);
                
                // remove select2 container previously processed
                $(row).find("#s2id_"+field_id).remove();
                
                var re = new RegExp(field_id, 'g');
                ttable_execute_scripts(parent, 'tdbmultisearch', function(script_content) {
                    script_content = script_content.replace(re, new_id);
                    return script_content;
                });
                
                if (clear_fields) {
                    setTimeout(function() { $(field).select2("val", ""); }, 10 );
                }
            }
            else if (field_component =='tmultisearch')
            {
                $(field).attr('id', new_id);
                
                // remove select2 container previously processed
                $(row).find("#s2id_"+field_id).remove();
                
                var re = new RegExp(field_id, 'g');
                ttable_execute_scripts(parent, 'tmultisearch', function(script_content) {
                    script_content = script_content.replace(re, new_id);
                    return script_content;
                });
                
                if (clear_fields) {
                    setTimeout(function() { $(field).select2("val", ""); }, 10 );
                }
            }
            else if (field_component =='tcombo')
            {
                $(field).attr('id', new_id);
                if (clear_fields) {
                    $(field).val('');
                }
                
                if (typeof $(field).attr('changeaction') !== 'undefined') {
                    $(field).attr('changeaction', $(field).attr('changeaction').replace(field_id, new_id));
                }
                if (typeof $(field).attr('onchange') !== 'undefined') {
                    $(field).attr('onchange', $(field).attr('onchange').replace(field_id, new_id));
                }
                
                var re = new RegExp(field_id, 'g');
                ttable_execute_scripts(parent, 'tcombo', function(script_content) {
                    script_content = script_content.replace(re, new_id);
                    return script_content;
                });
            }
        }
         
        // fora do if pois não troca ID (não possui ID), só reinicia value
        if (field_component =='tradiobutton')
        {
            $(field).parent().removeClass('active');
        }
        else if (field_component =='tcheckbutton')
        {
            $(field).parent().removeClass('active');
        }
    });
}

function ttable_execute_scripts(container, filter, callback)
{
    var scripts = $(container).find('script');
    $.each(scripts, function(sindex, script)
    {
        var text = $(script).text();
        text = callback(text);
        if (text.trim().split('_')[0] == filter) {
            $(script).text(text);
            setTimeout(function() {eval(text); }, 10 );
        }
    });
}

function ttable_sortable_rows(id, handle, callback)
{
    $(document).ready( function() {
        $('#'+id+' tbody').sortable({
            handle: handle,
            deactivate: callback
        });
    });
}

function ttable_get_column_values(id, column)
{
    return $('#'+id+' tbody').find('tr').find('td:nth-child('+column+')').map(function () {
               return this.innerText;
           }).get().join(',');
}
