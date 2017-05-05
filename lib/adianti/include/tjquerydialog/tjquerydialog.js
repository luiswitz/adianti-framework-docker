function tjquerydialog_start( id, modal, draggable, resizable, width, height, top, left, zIndex, actions) {
    $(document).ready(function()
    {
    	$( id ).dialog({
    		modal: modal,
    		stack: false,
    		zIndex: 2000,
            draggable: draggable,
            resizable: resizable,
    		height: height,
    		width: width,
    		close: function(ev, ui) { $(this).remove(); },
    		buttons: actions
    	});
    	$( id ).closest('.ui-dialog').css({ zIndex: zIndex });
    	$(".ui-widget-overlay").css({ zIndex: 100 });
    	
    	if (top > 0) {
    	    $( id ).closest('.ui-dialog').css({ top: top+'px' });
    	}
    	
    	if (left > 0) {
    	    $( id ).closest('.ui-dialog').css({ left: left+'px' });
    	}
    });
}