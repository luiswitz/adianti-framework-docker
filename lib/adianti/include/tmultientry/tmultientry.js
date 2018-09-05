function tmultientry_start( id, maxsize, width, height, callback) {
    var options = {
        tags: true,
        maximumSelectionLength: maxsize,
        width: width,
        tokenSeparators: [',', ';']
    };
    
    if (typeof callback != 'undefined') {
        $('#'+id).on("change", function (e) {
            callback();
        });
    }
    
    var element = $('#'+id).select2(options);
}
