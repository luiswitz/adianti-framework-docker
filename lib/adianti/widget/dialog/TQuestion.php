<?php
namespace Adianti\Widget\Dialog;

use Adianti\Core\AdiantiCoreTranslator;
use Adianti\Control\TAction;
use Adianti\Widget\Base\TElement;
use Adianti\Widget\Base\TScript;
use Adianti\Widget\Util\TImage;

/**
 * Question Dialog
 *
 * @version    4.0
 * @package    widget
 * @subpackage dialog
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TQuestion
{
    private $id;
    
    /**
     * Class Constructor
     * @param  $message    A string containint the question
     * @param  $action_yes Action taken for YES response
     * @param  $action_no  Action taken for NO  response
     * @param  $title_msg  Dialog Title
     */
    public function __construct($message, TAction $action_yes = NULL, TAction $action_no = NULL, $title_msg = '')
    {
        $this->id = 'tquestion_'.mt_rand(1000000000, 1999999999);
        
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
        
        $image = new TImage("fa:fa fa-question-circle fa-5x blue");
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
        $title->add( $title_msg ? $title_msg : AdiantiCoreTranslator::translate('Question') );
        
        $body = new TElement('div');
        $body->{'class'} = 'modal-body';
        $body->{'style'} = 'text-align:left';
        $body->add($image);
        
        $span = new TElement('span');
        $span->add($message);
        $body->add($span);
        
        $footer = new TElement('div');
        $footer->{'class'} = 'modal-footer';
        
        if ($action_yes)
        {
            $button = new TElement('button');
            $button->{'class'} = 'btn btn-default';
            $button->{'data-toggle'}="modal";
            $button->{'data-dismiss'} = 'modal';
            $button->add(AdiantiCoreTranslator::translate('Yes'));
            $button->{'onclick'} = '__adianti_load_page(\''.$action_yes->serialize() . '\')';
            $footer->add($button);
        }
        
        if ($action_no)
        {
            $button = new TElement('button');
            $button->{'class'} = 'btn btn-default';
            $button->{'data-toggle'}="modal";
            $button->{'data-dismiss'} = 'modal';
            $button->add(AdiantiCoreTranslator::translate('No'));
            $button->{'onclick'} = '__adianti_load_page(\''.$action_no->serialize() . '\')';
            $footer->add($button);
        }
        else
        {
            $button = new TElement('button');
            $button->{'class'} = 'btn btn-default';
            $button->{'data-dismiss'} = 'modal';
            $button->add(AdiantiCoreTranslator::translate('No'));
            $footer->add($button);
        }
        
        $button = new TElement('button');
        $button->{'class'} = 'btn btn-default';
        $button->{'data-dismiss'} = 'modal';
        $button->add(AdiantiCoreTranslator::translate('Cancel'));
        $footer->add($button);
        
        $modal_wrapper->add($modal_dialog);
        $modal_dialog->add($modal_content);
        $modal_content->add($modal_header);
        $modal_header->add($close);
        $modal_header->add($title);
        
        $modal_content->add($body);
        $modal_content->add($footer);
        
        $modal_wrapper->show();
        
        TScript::create( "tdialog_start( '#{$this->id}' );");
    }
}
