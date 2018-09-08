loading = true;

Adianti.onClearDOM = function(){
	/* $(".select2-hidden-accessible").remove(); */
	$(".colorpicker-hidden").remove();
	$(".select2-display-none").remove();
	$(".tooltip.fade.top.in").remove();
	$(".select2-drop-mask").remove();
	/* $(".autocomplete-suggestions").remove(); */
	$(".datetimepicker").remove();
	$(".note-popover").remove();
	$(".dtp").remove();
	$("#window-resizer-tooltip").remove();
};
 
function showLoading() 
{ 
    if(loading)
    {
        __adianti_block_ui('Carregando');
    }
} 

Adianti.onBeforeLoad = function(url) 
{ 
    loading = true; 
    setTimeout(function(){showLoading()}, 400);
    if (url.indexOf('&static=1') == -1) {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    }
};

Adianti.onAfterLoad = function() 
{ 
    loading = false; 
    __adianti_unblock_ui(); 
};

// set select2 language
$.fn.select2.defaults.set('language', $.fn.select2.amd.require("select2/i18n/pt"));

function __adianti_input_fuse_search(input_search, attribute, selector)
{
    var stack_search = new Array();
    $(selector).each(function() {
        stack_search.push({
            id: $(this).attr('id'),
            name: $(this).attr(attribute)
        });

    });
    
    var fuse = new Fuse(stack_search, {
            keys: ['name'],
            id: 'id',
            threshold: 0.2
        });
        
    $(input_search).on('keyup', function(){
        var result = fuse.search($(this).val());

        $(selector + '['+attribute+']').hide();
        if(result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                var query = '#'+result[i];
                $(query).show();
            }
        }
        else {
            $(selector + '['+attribute+']').show();
        }
    });
}

function __adianti_builder_update_page()
{
    var url = Adianti.currentURL;
    url = url.replace('engine.php?', '');
    var params = __adianti_query_to_json(url);
    var controller = params.class;
    __adianti_load_page('index.php?class=SystemPageUpdate&register_state=false&method=onEdit&controller='+controller);
}

function __adianti_builder_edit_page()
{
    var url = Adianti.currentURL;
    url = url.replace('engine.php?', '');
    var params = __adianti_query_to_json(url);
    var controller = params.class;
    __adianti_load_page('index.php?class=SystemPageService&method=editPage&static=1&controller='+controller);
}

function __adianti_builder_get_new_pages()
{
    __adianti_load_page('index.php?class=SystemPageBatchUpdate');
}

function __adianti_builder_update_menu()
{
    __adianti_load_page('index.php?class=SystemMenuUpdate&method=onAskUpdate&register_state=false');
}