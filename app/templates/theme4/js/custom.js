$(function () {
    $.AdminBSB.browser.activate();
    $.AdminBSB.leftSideBar.activate();
    $.AdminBSB.rightSideBar.activate();
    $.AdminBSB.navbar.activate();
    $.AdminBSB.dropdownMenu.activate();
    $.AdminBSB.input.activate();
    $.AdminBSB.select.activate();
    $.AdminBSB.search.activate();

    __adianti_block_ui = function () { $('.page-loader-wrapper').show(); };
    __adianti_unblock_ui = function () { $('.page-loader-wrapper').fadeOut(); };
    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
    
    setTimeout( function() {
        $('#envelope_messages a').click(function() { $(this).closest('.dropdown.open').removeClass('open'); });
        $('#envelope_notifications a').click(function() { $(this).closest('.dropdown.open').removeClass('open'); });
    }, 500);
    
    $('.menu i.fa').css('zoom', '120%');
    $('.menu i.fa').css('margin-top', '8px');
    $('.menu ul li ul li i.fa').css('margin-top', '5px');
    
    $('#leftsidebar a[generator="adianti"]').click(function() {
        $('body').scrollTop(0);
        $('body').removeClass('overlay-open');
        $('.overlay').hide();
    });
});

/**
 * Show message info dialog
 */
function __adianti_message(title, message, callback)
{
    __adianti_dialog( { type: 'success', title: title, message: message, callback: callback} );
}

/**
 * Show standard dialog
 */
function __adianti_dialog( options )
{
    setTimeout( function() {
        swal({
          html: true,
          title: options.title,
          text: options.message,
          type: options.type,
          allowEscapeKey: true,
          allowOutsideClick: true
        },
        function(){
            if (typeof options.callback != 'undefined') {
                options.callback();
            }
        });
    }, 100);
}

/**
 * Show question dialog
 */
function __adianti_question(title, message, callback_yes, callback_no, label_yes, label_no)
{
    setTimeout( function() {
        swal({
          html: true,
          title: title,
          text: message,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: label_yes,
          cancelButtonText: label_no
        },
        function(isConfirm){
          if (isConfirm) {
            if (typeof callback_yes != 'undefined') {
                callback_yes();
            }
          } else {
            if (typeof callback_no != 'undefined') {
                callback_no();
            }
          }
        });
    }, 100);
}

function tdate_start( id, mask, language, size, options) {
    $( id ).wrap( '<div class="tdate-group date">' );
    $( id ).after( '<span class="btn btn-default tdate-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>' );
    
    mask = mask.replace('yyyy', 'YYYY', mask);
    mask = mask.replace('mm', 'MM', mask);
    mask = mask.replace('dd', 'DD', mask);
    
    atributes = {
        lang: language,
        weekStart : 0,
        time: false,
        format : mask,
        switchOnClick: true,
        clearButton: true,
    };
    
    options = Object.assign(atributes, JSON.parse( options) );
    
    $( id ).bootstrapMaterialDatePicker(options).on('change', function(e, date) {
        if ( $( id ).attr('exitaction')) {
            new Function( $ ( id ).attr('exitaction'))();
        }
    });
    
    if (size !== 'undefined')
    {
        $( id ).closest('.tdate-group').width(size);
    }
}

function tdatetime_start( id, mask, language, size, options) {
    $( id ).wrap( '<div class="tdate-group tdatetimepicker input-append date">' );
    $( id ).after( '<span class="add-on btn btn-default tdate-group-addon"><i class="fa fa-clock-o icon-th"></i></span>' );
    
    mask = mask.replace('yyyy', 'YYYY', mask);
    mask = mask.replace('mm', 'MM', mask);
    mask = mask.replace('dd', 'DD', mask);
    mask = mask.replace('hh', 'HH', mask);
    mask = mask.replace('ii', 'mm', mask);
    
    atributes = {
        lang: language,
        weekStart : 0,
        format : mask,
        switchOnClick: true,
        clearButton: true,
    };
    
    options = Object.assign(atributes, JSON.parse( options) );
    
    $( id ).bootstrapMaterialDatePicker(options).on('change', function(e, date) {
        if ( $( id ).attr('exitaction')) {
            new Function( $ ( id ).attr('exitaction'))();
        }
    });
    
    if (size !== 'undefined')
    {
        $( id ).closest('.tdate-group').width(size);
    }
}
