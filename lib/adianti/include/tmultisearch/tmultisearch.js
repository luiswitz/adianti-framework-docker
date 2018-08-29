function tmultisearch_start( id, minlen, maxsize, placeholder, multiple, width, height, allowclear, allowsearch, callback ) {
    var options = {
        minimumInputLength: minlen,
        maximumSelectionLength: maxsize,
        allowClear: allowclear,
        placeholder: placeholder,
        multiple: multiple,
        minimumResultsForSearch: allowsearch,
        id: function(e) { return e.id + "::" + e.text; },
        templateResult: function (d) {
            if (/<[a-z][\s\S]*>/i.test(d.text)) {
                return $(d.text);
            }
            else {
                return d.text;
            }
        },
        templateSelection: function (d) {
            if (/<[a-z][\s\S]*>/i.test(d.text)) {
                return $(d.text);
            }
            else {
                return d.text;
            }
        },
    };
    
    if (multiple !== '1')
    {
        delete options.maximumSelectionLength;
    }
    
    $('#'+id).select2( options );
    
    if (typeof callback != 'undefined')
    {
        $('#'+id).on("change", function (e) {
            callback();
        });
    }
    
    if (parseInt(maxsize) !== 1)
    {
        $('#'+id).parent().find('.select2-selection').height(height);
        $('#'+id).parent().find('.select2-selection').find('.select2-selection__rendered').height(height);
        $('#'+id).parent().find('.select2-selection').find('.select2-selection__rendered').css('overflow-y', 'auto');
    }
}

function tmultisearch_clear_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name="'+field+'[]"]').val('').trigger('change');
        $('form[name='+form_name+'] [name="'+field+'"]').val('').trigger('change');
    }
    catch (e) {
        console.log(e);
    }
}

function tmultisearch_enable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name="'+field+'[]"]').attr('disabled', false);
        $('form[name='+form_name+'] [name="'+field+'"]').attr('disabled', false);
    }
    catch (e) {
        console.log(e);
    }
}

function tmultisearch_disable_field(form_name, field) {
    try {
        $('form[name='+form_name+'] [name="'+field+'[]"]').attr('disabled', true);
        $('form[name='+form_name+'] [name="'+field+'"]').attr('disabled', true);
    }
    catch (e) {
        console.log(e);
    }
}

// Backspace remove the entire item, not only one character per time
$.fn.select2.amd.require(['select2/selection/search'], function (Search) {
    var oldRemoveChoice = Search.prototype.searchRemoveChoice;

    Search.prototype.searchRemoveChoice = function () {
        oldRemoveChoice.apply(this, arguments);
        this.$search.val('');
    };
});