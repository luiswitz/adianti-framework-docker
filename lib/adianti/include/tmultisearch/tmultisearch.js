function tmultisearch_start( id, minlen, maxsize, placeholder, multiple, preload_items, width, height, load_data, callback ) {
    $('#'+id).select2( {
        minimumInputLength: minlen,
        maximumSelectionSize: maxsize,
        allowClear: true,
        separator: '||',
        placeholder: placeholder,
        multiple: multiple,
        id: function(e) { return e.id + "::" + e.text; },
        query: function (query)
        {
            var data = {results: []};
            preload_data = preload_items;
            $.each(preload_data, function() {
                if(query.term.length == 0 || this.text.toUpperCase().indexOf(query.term.toUpperCase()) >= 0 ){
                    data.results.push({id: this.id, text: this.text });
                }
            });
            query.callback(data);
        }
    });
    
    if (typeof callback != 'undefined')
    {
        $('#'+id).on("change", function (e) {
            callback();
        });
    }
    
    if (parseInt(maxsize) !== 1)
    {
        var outerwidth=$('#s2id_'+id).width();
        $('#s2id_'+id).width(outerwidth);
        $('#s2id_'+id+ '> .select2-choices').height(height);
        $('#s2id_'+id+ '> .select2-choices').width(outerwidth -14);
    }
    
    if (typeof load_data !== "undefined") {
        $('#'+id).select2("data", load_data);
    }
}

function tmultisearch_get_form_data(formName, field, field_id) {
    element = $('#'+field_id);
    field_value = tmultisearch_get_value(element);
    
    if (field.indexOf('[]') > -1)
    {
        data = new Object;
        object_ids = [];
        $('#'+formName+' :input[name="'+field+'"]').each(function(index, item) {
            item_ids = tmultisearch_get_value(item);
            object_ids.push(item_ids);
        });
        data[field] = object_ids;
        field_values = $.param(data);
        query = $('#'+formName+' :input[name!="'+field+'"]').serialize() + '&' + field_values;
        query = query + '&_field_id='+field_id+'&_field_name='+field+'&_field_value='+field_value;
        return query;
    }
    else if ($('#'+field_id).length >0) {
        data = new Object;
        data[field] = field_value;
        field_values = $.param(data); // url encode of object
        query = $('#'+formName+' :input[name!="'+field+'"]').serialize() + '&' + field_values;
        query = query + '&_field_id='+field_id+'&_field_name='+field+'&_field_value='+encodeURIComponent(field_value);
        
        return query;
    }
}

function tmultisearch_get_value(element) {
    var select_ids  = [];
    var field_value = $(element).val();
    
    rows = field_value.split('||');
    $(rows).each(function(i) {
        item = this.split('::');
        select_ids.push( item[0] );
    });
    
    return select_ids;

}

function tmultisearch_enable_field(form_name, field) {
    try { $('#s2id_'+$('form[name='+form_name+'] [name="'+field+'"]').attr('id')).select2("enable", true); } catch (e) { }    
}

function tmultisearch_disable_field(form_name, field) {
    try {
        $('#s2id_'+$('form[name='+form_name+'] [name="'+field+'"]').attr('id')).select2("enable", false);
        $('#'+$('form[name='+form_name+'] [name="'+field+'"]').attr('id')).removeAttr('disabled');
    } catch (e) { }    
}