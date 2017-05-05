<?php
namespace Adianti\Base;

use Adianti\Control\TPage;

/**
 * Standard page controller for listings
 *
 * @version    4.0
 * @package    base
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TStandardList extends TPage
{
    protected $form;
    protected $datagrid;
    protected $pageNavigation;
    protected $filterFields;
    protected $formFilters;
    protected $filterTransformers;
    protected $loaded;
    protected $limit;
    protected $operators;
    protected $order;
    protected $direction;
    protected $criteria;
    protected $transformCallback;
    
    use AdiantiStandardListTrait;
}
