<?php
/**
 * Write tables in HTML
 * @author Pablo Dall'Oglio
 */
class TTableWriterHTML implements ITableWriter
{
    private $styles;
    private $widths;
    private $colcounter;
    private $table;
    private $currentRow;
    
    /**
     * Constructor
     * @param $widths Array with column widths
     */
    public function __construct($widths)
    {
        // armazena as larguras
        $this->widths = $widths;
        // inicializa atributos
        $this->tables = array();
        $this->styles = array();
        
        // cria uma nova tabela
        $this->table = new TAdiantiTable;
        $this->table->cellspacing = 0;
        $this->table->cellpadding = 0;
        $this->table->style = "border-collapse:collapse";
    }
    
    /**
     * Returns the native writer
     */
    public function getNativeWriter()
    {
        return $this->table;
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
        // cria um novo estilo
        $style = new TAdiantiStyle($stylename); 
        $style->font_family      = $fontface;
        $style->color            = $fontcolor;
        $style->background_color = $fillcolor;
        $style->border_top       = "1px solid #000000";
        $style->border_bottom    = "1px solid #000000";
        $style->border_left      = "1px solid #000000";
        $style->border_right     = "1px solid #000000";
        $style->font_size        = "{$fontsize}pt";
        // verifica se o estilo deve ser negrito
        if (strstr($fontstyle, 'B'))
        {
            $style->font_weight = 'bold';
        }
        // verifica se o estilo deve ser itálico
        if (strstr($fontstyle, 'I'))
        {
            $style->font_style = 'italic';
        }
        // armazena o objeto de estilo no vetor
        $this->styles[$stylename] = $style;
    }
    
    /**
     * Add a new row inside the table
     */
    public function addRow()
    {
        $this->currentRow = $this->table->addRow();
        $this->colcounter = 0;
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
        
        $width = 0;
        // calcula a largura da célula (incluindo as mescladas)
        for ($n=$this->colcounter; $n<$this->colcounter+$colspan; $n++)
        {
            $width += $this->widths[$n];
        }
        // adiciona a célula na linha corrente
        $cell = $this->currentRow->addCell($content);
        $cell->align     = $align;
        $cell->width     = $width-2;
        $cell->colspan   = $colspan;
        // atribui o estilo
        if ($stylename)
        {
            $cell->{"class"} = $stylename;
        }
        $this->colcounter ++;
    }
    
    /**
     * Save the current file
     * @param $filename file name
     */
    public function save($filename)
    {
        ob_start();
        echo "<html>\n";
        echo "<style>\n";
        // insere os estilos no documento
        foreach ($this->styles as $style)
        {
            $style->show();
        }
        echo "</style>\n";
        // inclui a tabela no documento
        $this->table->show();
        echo "</html>";
        $content = ob_get_clean();
        
        file_put_contents($filename, $content);
        return TRUE;
    }
}
?>
