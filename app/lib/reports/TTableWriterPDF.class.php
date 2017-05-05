<?php
/**
 * Write tables in PDF
 * @author Pablo Dall'Oglio
 */
class TTableWriterPDF implements ITableWriter
{
    private $styles;
    private $pdf;
    private $widths;
    private $colcounter;
    
    /**
     * Constructor
     * @param $widths Array with column widths
     */
    public function __construct($widths, $orientation='P')
    {
        // armazena as larguras
        $this->widths = $widths;
        // inicializa atributos
        $this->styles = array();
        
        // define o locale
        setlocale(LC_ALL, 'POSIX');
        // cria o objeto FPDF
        $this->pdf = new FPDF($orientation, 'pt', 'A4');
        $this->pdf->Open();
        $this->pdf->AddPage();
    }
    
    /**
     * Returns the native writer
     */
    public function getNativeWriter()
    {
        return $this->pdf;
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
        $this->styles[$stylename] = array($fontface, $fontsize, $fontstyle, $fontcolor, $fillcolor);
    }
    
    /**
     * Apply a given style
     * @param $stylename style name
     */
    public function applyStyle($stylename)
    {
        // verifica se o estilo existe
        if (isset($this->styles[$stylename]))
        {
            $style = $this->styles[$stylename];
            // obtém os atributos do estilo
            $fontface    = $style[0];
            $fontsize    = $style[1];
            $fontstyle   = $style[2];
            $fontcolor   = $style[3];
            $fillcolor   = $style[4];
            
            // aplica os atributos do estilo
            $this->pdf->SetFont($fontface, $fontstyle); // fonte
            $this->pdf->SetFontSize($fontsize); // estilo
            $colorarray = self::rgb2int255($fontcolor);
            // cor do texto
            $this->pdf->SetTextColor($colorarray[0], $colorarray[1], $colorarray[2]);
            $colorarray = self::rgb2int255($fillcolor);
            // cor de preenchimento
            $this->pdf->SetFillColor($colorarray[0], $colorarray[1], $colorarray[2]);
        }
    }
    
    /**
     * Convert one RGB color into array of decimals
     * @param $rgb String with a RGB color
     */
    private function rgb2int255($rgb)
    {
        $red   = hexdec(substr($rgb,1,2));
        $green = hexdec(substr($rgb,3,2));
        $blue  = hexdec(substr($rgb,5,2));
        
        return array($red, $green, $blue);
    }
    
    /**
     * Add a new row inside the table
     */
    public function addRow()
    {
        $this->pdf->Ln(); // quebra de linha
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
        
        $this->applyStyle($stylename); // aplica o estilo
        $fontsize = $this->styles[$stylename][1]; // obtém a fonte
        
        if (utf8_encode(utf8_decode($content)) == $content ) // SE UTF8
        {
            $content = utf8_decode($content);
        }
        
        $width = 0;
        // calcula a largura da célula (incluindo as mescladas)
        for ($n=$this->colcounter; $n<$this->colcounter+$colspan; $n++)
        {
            $width += $this->widths[$n];
        }
        // exibe a célula com o conteúdo passado
        $this->pdf->Cell( $width, $fontsize * 1.5, $content, 1, 0, strtoupper(substr($align,0,1)), true);
        $this->colcounter += $colspan;
    }
    
    /**
     * Save the current file
     * @param $filename file name
     */
    public function save($filename)
    {
        $this->pdf->Output($filename);
        return TRUE;
    }
}
?>