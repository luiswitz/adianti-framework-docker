function tdate_enable_field(form_name, field) {
    try{
        $('form[name='+form_name+'] [name='+field+']').attr('disabled', false);
        $('form[name='+form_name+'] [name='+field+']').removeClass('tfield_disabled').addClass('tfield');
        $('form[name='+form_name+'] [name='+field+']').css('border-right', '0');
    } catch (e) {
        console.log(e);
    }
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').next().show() },1);
} 

function tdate_disable_field(form_name, field) {
    try{
        $('form[name='+form_name+'] [name='+field+']').attr('disabled', true);
        $('form[name='+form_name+'] [name='+field+']').removeClass('tfield').addClass('tfield_disabled');
        $('form[name='+form_name+'] [name='+field+']').css('border-right', '1px solid gray');
    } catch (e) {
        console.log(e);
    }
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').next().hide() },1);
}

function tdate_start( id, mask, language, size, options) {
    $( id ).wrap( '<div class="tdate-group date">' );
    $( id ).after( '<span class="btn btn-default tdate-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>' );
    
    atributes = {
        format: mask,
        todayBtn: "linked",
        language: language,
        calendarWeeks: false,
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom auto"
    };
    
    options = Object.assign(atributes, JSON.parse( options) );
    
    $( id ).closest('.tdate-group').datepicker(options).on('changeDate', function(e){
        if ( $( id ).attr('exitaction')) {
            new Function( $( id ).attr('exitaction'))();
        }
    }).on('show', function() {
        // to avoid fire $('body').on('click') when selecting date inside popover
        // without this, it would close the popover, because the click event bound to body
        $('.datepicker').on('click', function (e) {
            e.stopPropagation();
        });
    });
    
    if (size !== 'undefined')
    {
        $( id ).closest('.tdate-group').width(size);
    }
}