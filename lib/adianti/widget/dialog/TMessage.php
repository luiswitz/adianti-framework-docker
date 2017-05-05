<?php
namespace Adianti\Widget\Dialog;

use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Util\TImage;

/**
 * Message Dialog
 *
 * @version    4.0
 * @package    widget
 * @subpackage dialog
 * @author     Pablo Dall'Oglio
 * @author     Victor Feitoza <vfeitoza [at] gmail.com> (process action after OK)
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TMessage
{
    private $id;
    private $action;
    
    /**
     * Class Constructor
     * @param $type    Type of the message (info, error)
     * @param $message Message to be shown
     * @param $action  Action to be processed when closing the dialog
     * @param $title_msg  Dialog Title
     */
    public function __construct($type, $message, TAction $action = NULL, $title_msg = '')
    {
        $this->id = 'tmessage_'.mt_rand(1000000000, 1999999999);
        
        $modal_wrapper = new TElement('div');
        $modal_wrapper->{'class'} = 'modal';
        $modal_wrapper->{'id'}    = $this->id;
        $modal_wrapper->{'style'} = 'padding-top: 10%; z-index:4000';
        $modal_wrapper->{'tabindex'} = '-1';
        
        $modal_dialog = new TElement('div');
        $modal_dialog->{'class'} = 'modal-dialog';
        
        $modal_content = new TElement('div');
        $modal_content->{'class'} = 'modal-content';
        
        $modal_header = new TElement('div');
        $modal_header->{'class'} = 'modal-header';
        
        if ($type=='info')
        {
            $image = new TImage("fa:fa fa-info-circle fa-5x blue");
        }
        else
        {
            $image = new TImage("fa:fa fa-exclamation-circle fa-5x red");
        }
        $image->{'style'} = 'float:left; margin-right: 10px;';
        
        $close = new TElement('button');
        $close->{'type'} = 'button';
        $close->{'class'} = 'close';
        $close->{'data-dismiss'} = 'modal';
        $close->{'aria-hidden'} = 'true';
        $close->add('×');
        
        $title = new TElement('h4');
        $title->{'class'} = 'modal-title';
        $title->{'style'} = 'display:inline';
        $title->add( $title_msg ? $title_msg : ( $type == 'info' ? AdiantiCoreTranslator::translate('Information') : AdiantiCoreTranslator::translate('Error')));
        
        $body = new TElement('div');
        $body->{'style'} = 'text-align:left';
        $body->{'class'} = 'modal-body';
        $body->add($image);
        
        $span = new TElement('span');
        $span->add($message);
        
        $body->add($span);
        $button = new TElement('button');
        $button->{'class'} = 'btn btn-default';
        $button->{'data-dismiss'} = 'modal';
        $button->{'onclick'} = "\$( '.modal-backdrop' ).last().remove(); \$('#{$this->id}').modal('hide'); \$('body').removeClass('modal-open');";
        $button->add('OK');
        
        if ($action)
        {
            $button->{'onclick'} .= "__adianti_load_page('{$action->serialize()}');";
            $button->{'data-toggle'} = "modal";
        }
        
        $footer = new TElement('div');
        $footer->{'class'} = 'modal-footer';
        
        $modal_wrapper->add($modal_dialog);
        $modal_dialog->add($modal_content);
        $modal_content->add($modal_header);
        $modal_header->add($close);
        $modal_header->add($title);
        
        $modal_content->add($body);
        $modal_content->add($footer);
        
        $footer->add($button);
        
        $modal_wrapper->show();
        $callback = 'function () {' . $button->{'onclick'} .'}';
        TScript::create( "tdialog_start( '#{$this->id}', $callback );");
    }
}
