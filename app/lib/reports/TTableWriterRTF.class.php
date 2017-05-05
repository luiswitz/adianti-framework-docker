<?php
/**
 * Write tables in RTF
 * @author Pablo Dall'Oglio
 */
class TTableWriterRTF implements ITableWriter
{
    private $rtf;
    private $styles;
    private $table;
    private $rowcounter;
    private $colcounter;
    private $widths;
    
    /**
     * Constructor
     * @param $widths Array with column widths
     */
    public function __construct($widths)
    {
        // armazena as larguras
        $this->widths= $widths;
        
        // inicializa atributos
        $this->styles = array();
        $this->rowcounter = 0;
        
        // instancia a classe PHPRtfLite
        $this->rtf = new PHPRtfLite;
        $this->rtf->setMargins(2, 2, 2, 2);
        
        // acrescenta uma seзгo ao documento
        $section = $this->rtf->addSection();
        
        // acrescenta uma tabela а seзгo
        $this->table = $section->addTable();
        
        // acrescenta as colunas na tabela
        foreach ($widths as $columnwidth)
        {
            $this->table->addColumn($columnwidth / 28);
        }
    }
    
    /**
     * Returns the native writer
     */
    public function getNativeWriter()
    {
        return $this->rtf;
    }
    
    /**
     * Add a new style
     * @param @stylename style name
     * @param @fontface  font face
     * @param @fontsize  font size
     * @param @fontstyle font style (B=bold, I=italic)
     * @param @fontcolor font color
     * @param @fillcolor fill color
     */
    public function addStyle($stylename, $fontface, $fontsize, $fontstyle, $fontcolor, $fillcolor)
    {
        // instancia um objeto para estilo de fonte (PHPRtfLite_Font)
        $font = new PHPRtfLite_Font($fontsize, $fontface, $fontcolor);
        $font->setBold(strstr($fontstyle, 'B'));
        $font->setItalic(strstr($fontstyle, 'I'));
        $font->setUnderline(strstr($fontstyle, 'U'));
        
        //  armazena o objeto fonte e a cor de preenchimento
        $this->styles[$stylename]['font']    = $font;
        $this->styles[$stylename]['bgcolor'] = $fillcolor;
    }
    
    /**
     * Add a new row inside the table
     */
    public function addRow()
    {
        $this->rowcounter ++;
        $this->colcounter = 1;
        $this->table->addRow();
    }
    
    /**
     * Add a new cell inside the current row
     * @param $content   cell content
     * @param $align     cell align
     * @param $stylename style to be used
     * @param $colspan   colspan (merge) 
     */
    public function addCell($content, $align, $stylename, $colspan = 1)
    {
        if (is_null($stylename) OR !isset($this->styles[$stylename]) )
        {
            throw new Exception(TAdiantiCoreTranslator::translate('Style ^1 not found in ^2', $stylename, __METHOD__ ) );
        }
        
        // obtйm a fonte e a cor de preenchimento
        $font      = $this->styles[$stylename]['font'];
        $fillcolor = $this->styles[$stylename]['bgcolor'];
        if (utf8_encode(utf8_decode($content)) !== $content ) // SE NГO UTF8
        {
            $content = utf8_encode($content);
        }
        
        // escreve o conteъdo na cйlula utilizando a fonte e alinhamento
        $this->table->writeToCell($this->rowcounter, $this->colcounter,
                      $content, $font, new PHPRtfLite_ParFormat($align));
                      
        // define a cor de fundo para a cйlula
        $this->table->setBackgroundForCellRange($fillcolor, $this->rowcounter, $this->colcounter,
                                                $this->rowcounter, $this->colcounter);

        if ($colspan>1)
        {
            // mescla as cйlulas caso necessбrio
            $this->table->mergeCellRange($this->rowcounter, $this->colcounter,
                                         $this->rowcounter, $this->colcounter + $colspan -1);
        }
        $this->colcounter += $colspan;
    }
    
    /**
     * Save the current file
     * @param $filename file name
     */
    public function save($filename)
    {
        // instancia um objeto para estilo de borda
        $border    = PHPRtfLite_Border::create(0.7, '#000000');
        
        // liga as bordas na tabela  
        $this->table->setBorderForCellRange($border, 1, 1, $this->table->getRowsCount(),
                                            $this->table->getColumnsCount());
        
        // armazena o documento em um arquivo
        $this->rtf->save($filename);
        return TRUE;
    }
}
?>