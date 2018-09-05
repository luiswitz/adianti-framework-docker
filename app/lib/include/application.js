loading = true; 
function showLoading() 
{ 
    if(loading)
    {
        __adianti_block_ui('Carregando');
    }
} 

Adianti.onBeforeLoad = function() 
{ 
    loading = true; 
    setTimeout(function(){showLoading()}, 400); 
}; 

Adianti.onAfterLoad = function() 
{ 
    loading = false; 
    __adianti_unblock_ui(); 
};

// set select2 language
$.fn.select2.defaults.set('language', $.fn.select2.amd.require("select2/i18n/pt"));

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