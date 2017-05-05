function ttreeview_start( id, collapsed )
{
    $(document).ready(function(){
        $( id ).treeview({
            persist: 'location',
            animated: 'fast',
            collapsed: collapsed
        });
    });
}