function tspinner_start(id, value, min, max, step, callback)
{
    $(function() {
        $( id  ).spinner({
            step: step,
            numberFormat: "n",
            spin: function( event, ui ) {
                if ( ui.value > max ) {
                    $( this ).spinner( "value", min );
                    return false;
                } else if ( ui.value < min ) {
                    $( this ).spinner( "value", max );
                    return false;
                }
            },
            stop: callback
        });
        relwidth = $( id ).attr('relwidth');
        
        if (typeof relwidth !== 'undefined')
        {
            $( id ).width('100%');
            $( id ).parent().width( relwidth );
        }
    });
}

function tspinner_enable_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').spinner( 'enable' ) },1);    
}

function tspinner_disable_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [name='+field+']').spinner( 'disable' ) },1);    
}