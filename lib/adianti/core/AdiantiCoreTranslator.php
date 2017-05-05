<?php
namespace Adianti\Core;

/**
 * Framework translation class for internal messages
 *
 * @version    4.0
 * @package    core
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 * @alias      TAdiantiCoreTranslator
 */
class AdiantiCoreTranslator
{
    private static $instance; // singleton instance
    private $lang;            // target language
    
    /**
     * Class Constructor
     */
    private function __construct()
    {
        $this->messages['en'][] = 'Loading';
        $this->messages['en'][] = 'File not found';
        $this->messages['en'][] = 'Search';
        $this->messages['en'][] = 'Register';
        $this->messages['en'][] = 'Record saved';
        $this->messages['en'][] = 'Do you really want to delete ?';
        $this->messages['en'][] = 'Record deleted';
        $this->messages['en'][] = 'Records deleted';
        $this->messages['en'][] = 'Function';
        $this->messages['en'][] = 'Table';
        $this->messages['en'][] = 'Tool';
        $this->messages['en'][] = 'Data';
        $this->messages['en'][] = 'Open';
        $this->messages['en'][] = 'Save';
        $this->messages['en'][] = 'List';
        $this->messages['en'][] = 'Delete';
        $this->messages['en'][] = 'Delete selected';
        $this->messages['en'][] = 'Edit';
        $this->messages['en'][] = 'Cancel';
        $this->messages['en'][] = 'Yes';
        $this->messages['en'][] = 'No';
        $this->messages['en'][] = 'January';
        $this->messages['en'][] = 'February';
        $this->messages['en'][] = 'March';
        $this->messages['en'][] = 'April';
        $this->messages['en'][] = 'May';
        $this->messages['en'][] = 'June';
        $this->messages['en'][] = 'July';
        $this->messages['en'][] = 'August';
        $this->messages['en'][] = 'September';
        $this->messages['en'][] = 'October';
        $this->messages['en'][] = 'November';
        $this->messages['en'][] = 'December';
        $this->messages['en'][] = 'Today';
        $this->messages['en'][] = 'Close';
        $this->messages['en'][] = 'Field for action ^1 not defined';
        $this->messages['en'][] = 'Field ^1 not exists or contains NULL value';
        $this->messages['en'][] = 'Use the ^1 method';
        $this->messages['en'][] = 'Form with no fields';
        $this->messages['en'][] = 'E-mail not sent';
        $this->messages['en'][] = 'The field ^1 can not be less than ^2 characters';
        $this->messages['en'][] = 'The field ^1 can not be greater than ^2 characters';
        $this->messages['en'][] = 'The field ^1 can not be less than ^2';
        $this->messages['en'][] = 'The field ^1 can not be greater than ^2';
        $this->messages['en'][] = 'The field ^1 is required';
        $this->messages['en'][] = 'The field ^1 has not a valid CNPJ';
        $this->messages['en'][] = 'The field ^1 has not a valid CPF';
        $this->messages['en'][] = 'The field ^1 contains an invalid e-mail';
        $this->messages['en'][] = 'The field ^1 must be numeric';
        $this->messages['en'][] = 'No active transactions';
        $this->messages['en'][] = 'Object not found';
        $this->messages['en'][] = 'Object ^1 not found in ^2';
        $this->messages['en'][] = 'Method ^1 does not accept null values';
        $this->messages['en'][] = 'Method ^1 must receive a parameter of type ^2';
        $this->messages['en'][] = 'Style ^1 not found in ^2';
        $this->messages['en'][] = 'You must call ^1 constructor';
        $this->messages['en'][] = 'You must call ^1 before ^2';
        $this->messages['en'][] = 'You must pass the ^1 (^2) as a parameter to ^3';
        $this->messages['en'][] = 'The parameter (^1) of ^2 is required';
        $this->messages['en'][] = 'The parameter (^1) of ^2 constructor is required';
        $this->messages['en'][] = 'You have already added a field called "^1" inside the form';
        $this->messages['en'][] = 'Quit the application ?';
        $this->messages['en'][] = 'Use the addField() or setFields() to define the form fields';
        $this->messages['en'][] = 'Check if the action (^1) exists';
        $this->messages['en'][] = 'Information';
        $this->messages['en'][] = 'Error';
        $this->messages['en'][] = 'Exception';
        $this->messages['en'][] = 'Question';
        $this->messages['en'][] = 'The class ^1 was not accepted as argument. The class informed as parameter must be subclass of ^2.';
        $this->messages['en'][] = 'The class ^1 was not accepted as argument. The class informed as parameter must implement ^2.';
        $this->messages['en'][] = 'The class ^1 was not found. Check the class name or the file name. They must match';
        $this->messages['en'][] = 'Reserved property name (^1) in class ^2';
        $this->messages['en'][] = 'Action (^1) must be static to be used in ^2';
        $this->messages['en'][] = 'Trying to access a non-existent property (^1)';
        $this->messages['en'][] = 'Form not found. Check if you have passed the field (^1) to the setFields()';
        $this->messages['en'][] = 'Class ^1 not found in ^2';
        $this->messages['en'][] = 'You must call ^1 before add this component';
        $this->messages['en'][] = 'Driver not found';
        $this->messages['en'][] = 'Search record';
        $this->messages['en'][] = 'Field';
        $this->messages['en'][] = 'Record updated';
        $this->messages['en'][] = 'Records updated';
        $this->messages['en'][] = 'Input';
        $this->messages['en'][] = 'Class ^1 not found';
        $this->messages['en'][] = 'Method ^1 not found';
        $this->messages['en'][] = 'Check the class name or the file name';
        $this->messages['en'][] = 'Clear';
        $this->messages['en'][] = 'Select';
        $this->messages['en'][] = 'You must define the field for the action (^1)';
        $this->messages['en'][] = 'The section (^1) was not closed properly';
        $this->messages['en'][] = 'The method (^1) just accept values of type ^2 between ^3 and ^4';
        $this->messages['en'][] = 'The internal class ^1 can not be executed';
        $this->messages['en'][] = 'The minimum version required for PHP is ^1';
        $this->messages['en'][] = '^1 was not defined. You must call ^2 in ^3';
        $this->messages['en'][] = 'Database';
        $this->messages['en'][] = 'Constructor';
        
        $this->messages['pt'][] = 'Carregando';
        $this->messages['pt'][] = 'Arquivo não encontrado';
        $this->messages['pt'][] = 'Buscar';
        $this->messages['pt'][] = 'Registrar';
        $this->messages['pt'][] = 'Registro salvo';
        $this->messages['pt'][] = 'Deseja realmente excluir ?';
        $this->messages['pt'][] = 'Registro excluído';
        $this->messages['pt'][] = 'Registros excluídos';
        $this->messages['pt'][] = 'Função';
        $this->messages['pt'][] = 'Tabela';
        $this->messages['pt'][] = 'Ferramenta';
        $this->messages['pt'][] = 'Dados';
        $this->messages['pt'][] = 'Abrir';
        $this->messages['pt'][] = 'Salvar';
        $this->messages['pt'][] = 'Listar';
        $this->messages['pt'][] = 'Excluir';
        $this->messages['pt'][] = 'Excluir selecionados';
        $this->messages['pt'][] = 'Editar';
        $this->messages['pt'][] = 'Cancelar';
        $this->messages['pt'][] = 'Sim';
        $this->messages['pt'][] = 'Não';
        $this->messages['pt'][] = 'Janeiro';
        $this->messages['pt'][] = 'Fevereiro';
        $this->messages['pt'][] = 'Março';
        $this->messages['pt'][] = 'Abril';
        $this->messages['pt'][] = 'Maio';
        $this->messages['pt'][] = 'Junho';
        $this->messages['pt'][] = 'Julho';
        $this->messages['pt'][] = 'Agosto';
        $this->messages['pt'][] = 'Setembro';
        $this->messages['pt'][] = 'Outubro';
        $this->messages['pt'][] = 'Novembro';
        $this->messages['pt'][] = 'Dezembro';
        $this->messages['pt'][] = 'Hoje';
        $this->messages['pt'][] = 'Fechar';
        $this->messages['pt'][] = 'Campo para a ação ^1 não definido';
        $this->messages['pt'][] = 'Campo ^1 não existe ou contém valor NULL';
        $this->messages['pt'][] = 'Use o método ^1';
        $this->messages['pt'][] = 'Formulário sem campos';
        $this->messages['pt'][] = 'E-mail não enviado';
        $this->messages['pt'][] = 'O campo ^1 não pode ter menos de ^2 caracteres';
        $this->messages['pt'][] = 'O campo ^1 não pode ter mais de ^2 caracteres';
        $this->messages['pt'][] = 'O campo ^1 não pode ser menor que ^2';
        $this->messages['pt'][] = 'O campo ^1 não pode ser maior que ^2';
        $this->messages['pt'][] = 'O campo ^1 é obrigatório';
        $this->messages['pt'][] = 'O campo ^1 não contém um CNPJ válido';
        $this->messages['pt'][] = 'O campo ^1 não contém um CPF válido';
        $this->messages['pt'][] = 'O campo ^1 contém um e-mail inválido';
        $this->messages['pt'][] = 'O campo ^1 deve ser numérico';
        $this->messages['pt'][] = 'Sem transação ativa com a base de dados';
        $this->messages['pt'][] = 'Objeto não encontrado';
        $this->messages['pt'][] = 'Objeto ^1 não encontrado em ^2';
        $this->messages['pt'][] = 'Método ^1 não aceita valores NULOS';
        $this->messages['pt'][] = 'Método ^1 deve receber um parâmetro do tipo ^2';
        $this->messages['pt'][] = 'Estilo ^1 não encontrado em ^2';
        $this->messages['pt'][] = 'Você deve executar o construtor de ^1';
        $this->messages['pt'][] = 'Você deve executar ^1 antes de ^2';
        $this->messages['pt'][] = 'Você deve passar o ^1 (^2) como parâmetro para ^3';
        $this->messages['pt'][] = 'O parâmetro (^1) de ^2 é obrigatório';
        $this->messages['pt'][] = 'O parâmetro (^1) do construtor de ^2 é obrigatório';
        $this->messages['pt'][] = 'Você já adicionou um campo chamado "^1" ao formulário';
        $this->messages['pt'][] = 'Fechar a aplicação ?';
        $this->messages['pt'][] = 'Use addField() ou setFields() para definir os campos do formulário';
        $this->messages['pt'][] = 'Verifique se a ação (^1) existe';
        $this->messages['pt'][] = 'Informação';
        $this->messages['pt'][] = 'Erro';
        $this->messages['pt'][] = 'Exceção';
        $this->messages['pt'][] = 'Questão';
        $this->messages['pt'][] = 'A classe ^1 não foi aceita como argumento. O parâmetro deve ser subclasse de ^2.';
        $this->messages['pt'][] = 'A classe ^1 não foi aceita como argumento. O parâmetro deve implementar ^2.';
        $this->messages['pt'][] = 'A classe ^1 não foi encontrada. Verifique o nome da classe ou do arquivo. Eles devem coincidir';
        $this->messages['pt'][] = 'Nome de propriedade reservado (^1) na classe ^2';
        $this->messages['pt'][] = 'A ação (^1) deve ser estática para ser usada em ^2';
        $this->messages['pt'][] = 'Tentativa de acesso à uma propriedade não existente (^1)';
        $this->messages['pt'][] = 'Formulário não encontrado. Verifique se você passou o campo (^1) para o setFields()';
        $this->messages['pt'][] = 'Classe ^1 não encontrada em ^2';
        $this->messages['pt'][] = 'Você deve executar ^1 antes de adicionar o componente';
        $this->messages['pt'][] = 'Driver não encontrado';
        $this->messages['pt'][] = 'Buscar registro';
        $this->messages['pt'][] = 'Campo';
        $this->messages['pt'][] = 'Registro atualizado';
        $this->messages['pt'][] = 'Registros atualizados';
        $this->messages['pt'][] = 'Entrada';
        $this->messages['pt'][] = 'Classe ^1 não encontrada';
        $this->messages['pt'][] = 'Método ^1 não encontrado';
        $this->messages['pt'][] = 'Verifique o nome da classe ou do arquivo';
        $this->messages['pt'][] = 'Limpar';
        $this->messages['pt'][] = 'Selecionar';
        $this->messages['pt'][] = 'Você deve definir o campo para a ação (^1)';
        $this->messages['pt'][] = 'A seção (^1) não foi fechada adequadamente';
        $this->messages['pt'][] = 'O método ^1 somente aceita valores do tipo ^2 entre ^3 e ^4';
        $this->messages['pt'][] = 'A classe interna ^1 não pode ser executada';
        $this->messages['pt'][] = 'A versão mínima requerida para o PHP é ^1';
        $this->messages['pt'][] = '^1 não definido. Você deve executar ^2 no ^3';
        $this->messages['pt'][] = 'Database';
        $this->messages['pt'][] = 'Construtor';
    }
    
    /**
     * Returns the singleton instance
     * @return AdiantiCoreTranslator
     */
    public static function getInstance()
    {
        // if there's no instance
        if (empty(self::$instance))
        {
            // creates a new object
            self::$instance = new AdiantiCoreTranslator;
        }
        // returns the created instance
        return self::$instance;
    }
    
    /**
     * Define the target language
     * @param $lang Target language index
     */
    public static function setLanguage($lang)
    {
        $instance = self::getInstance();
        $instance->lang = $lang;
    }
    
    /**
     * Returns the target language
     */
    public static function getLanguage()
    {
        $instance = self::getInstance();
        return $instance->lang;
    }
    
    /**
     * Translate a word to the target language
     * @param $word     Word to be translated
     */
    public static function translate($word, $param1 = NULL, $param2 = NULL, $param3 = NULL, $param4 = NULL)
    {
        // get the AdiantiCoreTranslator unique instance
        $instance = self::getInstance();
        // search by the numeric index of the word
        $key = array_search($word, $instance->messages['en']);
        if ($key !== FALSE)
        {
            // get the target language
            $language = self::getLanguage();
            // returns the translated word
            $message = $instance->messages[$language][$key];
            if (isset($param1))
            {
                $message = str_replace('^1', $param1, $message);
            }
            if (isset($param2))
            {
                $message = str_replace('^2', $param2, $message);
            }
            if (isset($param3))
            {
                $message = str_replace('^3', $param3, $message);
            }
            if (isset($param4))
            {
                $message = str_replace('^4', $param4, $message);
            }
            return $message;
        }
        else
        {
            return 'Message not found: '. $word;
        }
    }
}
