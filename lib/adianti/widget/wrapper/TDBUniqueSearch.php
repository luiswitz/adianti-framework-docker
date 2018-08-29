<?php
namespace Adianti\Widget\Wrapper;

use Adianti\Widget\Form\TMultiSearch;
use Adianti\Widget\Form\AdiantiWidgetInterface;
use Adianti\Widget\Form\TUniqueSearch;
use Adianti\Widget\Wrapper\TDBMultiSearch;
use Adianti\Core\AdiantiApplicationConfig;
use Adianti\Database\TTransaction;
use Adianti\Database\TCriteria;

use Exception;

/**
 * DBUnique Search Widget
 *
 * @version    5.0
 * @package    widget
 * @subpackage form
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class TDBUniqueSearch extends TDBMultiSearch implements AdiantiWidgetInterface
{
    protected $database;
    protected $model;
    protected $mask;
    protected $key;
    protected $column;
    protected $items;
    
    /**
     * Class Constructor
     * @param  $name Widget's name
     */
    public function __construct($name, $database, $model, $key, $value, $orderColumn = NULL, TCriteria $criteria = NULL)
    {
        // executes the parent class constructor
        parent::__construct($name, $database, $model, $key, $value, $orderColumn, $criteria);
        parent::setMaxSize(1);
        parent::setDefaultOption(TRUE);
        parent::disableMultiple();
        
        $this->tag->{'name'}  = $this->name;    // tag name
        $this->tag->{'widget'} = 'tdbuniquesearch';
    }
    
    /**
     * Define the field's value
     * @param $value Current value
     */
    public function setValue($value)
    {
        if ($value)
        {
            TTransaction::open($this->database);
            $model = $this->model;
            $object = $model::find( $value );
            if ($object)
            {
                $description = $object->render($this->mask);
                $this->value = $value; // avoid use parent::setValue() because compat mode
                parent::addItems( [$value => $description ] );
            }
            TTransaction::close();
        }
        else
        {
            $this->value = null;
            parent::addItems([]);
        }
    }
    
    /**
     * Return the post data
     */
    public function getPostData()
    {
        if (isset($_POST[$this->name]))
        {
            $val = $_POST[$this->name];
            return $val;
        }
        else
        {
            return '';
        }
    }
}
