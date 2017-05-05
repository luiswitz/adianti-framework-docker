function MultiField(objId, width, height)
{
    // setup
    this.formFieldsName = Array();
    this.formFieldsMandatory = Array();
    this.formFieldsAlias = Array();
    this.formPostFields = Array();
    this.storeButton = null;
    this.deleteButton = null;
    this.cancelButton = null;
    this.inputResult = null;

    this.addEndCol = function (obj)
    {
        if (document.all) return;
        var rows = obj.getElementsByTagName('THEAD')[0].getElementsByTagName('TR');
        for (var no = 0; no < rows.length; no++)
        {
            var cell = rows[no].insertCell(-1);
            cell.innerHTML = '&nbsp;';
            cell.setAttribute('data', '');
            cell.style.width = '13px';
            cell.width = '13';
            cell.className = 'multifield_header';
        }
    }

    this.initmultifield = function (objId, width, height)
    {
        width = width + '';
        height = height + '';
        var obj = document.getElementById(objId);
        
        if (obj)
        {
            this.mtf = obj;
            var self = this;
            if (navigator.userAgent.indexOf('MSIE') >= 0)
            {
                obj.parentNode.style.overflowY = 'auto';
            }
            if (width.indexOf('%') >= 0)
            {
                obj.style.width = width;
                obj.parentNode.style.width = width;
            }
            else
            {
                obj.style.width = width + 'px';
                obj.parentNode.style.width = width + 'px';
            }
    
            if (height.indexOf('%') >= 0)
            {
                obj.parentNode.style.height = height;
            }
            else
            {
                obj.parentNode.style.height = height + 'px';
            }
            
            this.addEndCol(obj);
            obj.cellSpacing = 0;
            obj.cellPadding = 0;
            var tHead = obj.getElementsByTagName('THEAD')[0];
            var tBody = obj.getElementsByTagName('TBODY')[0];
            for (no = 0; no < tBody.rows.length; no++)
            {
                tBody.rows[no].onmousedown = function ()
                {
                    self.highlightSelectedRow(this);
                    return false;
                };
                tBody.rows[no].onmouseup = function ()
                {
                    return false;
                };
                tBody.rows[no].onselectstart = function ()
                {
                    return false;
                }; // Para o I.E.
                var row = tBody.rows[no];
                for (i = 0; i < row.cells.length; i++)
                {
                    row.cells[i].className = 'multifieldtd';
                }
            }
            
            for (var no = 1; no < obj.rows.length; no++)
            {
                obj.rows[no].onmouseover = this.highlightDataRow;
                obj.rows[no].onmouseout = this.deHighlightDataRow;
            }
        }
    }

    this.highlightDataRow = function ()
    {
        this.className = 'tmultifield_over';
        if (document.all) // I.E fix for "jumping" headings
        {
            var divObj = this.parentNode.parentNode.parentNode;
            var tHead = divObj.getElementsByTagName('TR')[0];
            tHead.style.top = divObj.scrollTop + 'px';
        }
    }

    this.deHighlightDataRow = function ()
    {
        this.className = null;
        if (document.all) // I.E fix for "jumping" headings
        {
            var divObj = this.parentNode.parentNode.parentNode;
            var tHead = divObj.getElementsByTagName('TR')[0];
            tHead.style.top = divObj.scrollTop + 'px';
        }
    }

    this.highlightSelectedRow = function (row)
    {
        if (this.selectedRow != null)
        {
            this.selectedRow.style.backgroundColor = '';
        }

        row.style.backgroundColor = '#88FF88';
        this.selectedRow = row;
        var x;
        for (x = 0; x < this.formFieldsName.length; x++)
        {
            var field = document.getElementsByName(this.formFieldsName[x])[0];
            var new_value = row.cells[x].innerHTML;
            if (field.getAttribute("auxiliar") != '1')
            {
                if (field.type == 'radio')
                {
                    $('input[type=radio][name='+field.name+'][value='+new_value+']').click();
                }
                else if (field.getAttribute('component') == 'multisearch')
                {
                    objectId = field.getAttribute('id');
                    $("#"+objectId).select2("val", '');
                    if (row.cells[x].getAttribute('data'))
                    {
                        try
                        {
                            $("#"+objectId).select2("data", JSON.parse(row.cells[x].getAttribute('data') ));
                        }
                        catch(e) {}
                    }
                }
                else
                {
                    field.value = new_value;
                }
            }
            if (typeof field.onchange == "function") field.onchange();
        }
        
        var self = this;
        if (this.storeButton)
        {
            this.storeButton.onclick = function ()
            {
                self.updateRowValuesFromFormFields(row);
                self.unselectRow();
                if (self.cancelButton) self.cancelButton.setAttribute('disabled', '1');
                if (self.deleteButton) self.deleteButton.setAttribute('disabled', '1');
                this.onclick = function ()
                {
                    self.addRowFromFormFields();
                };
            }
        }
        if (this.deleteButton)
        {
            this.deleteButton.removeAttribute('disabled');
            this.deleteButton.onclick = function ()
            {
                self.deleteRow();
                if (self.cancelButton) self.cancelButton.setAttribute('disabled', '1');
                if (self.deleteButton) self.deleteButton.setAttribute('disabled', '1');
                if (self.storeButton)
                {
                    self.storeButton.onclick = function ()
                    {
                        self.addRowFromFormFields();
                    };
                }
            };
        }
        if (this.cancelButton)
        {
            this.cancelButton.removeAttribute('disabled');
            this.cancelButton.onclick = function ()
            {
                self.unselectRow();
                if (self.cancelButton) self.cancelButton.setAttribute('disabled', '1');
                if (self.deleteButton) self.deleteButton.setAttribute('disabled', '1');
                if (self.storeButton)
                {
                    self.storeButton.onclick = function ()
                    {
                        self.addRowFromFormFields();
                    };
                }
            };
        }
    }

    this.addRowFromFormFields = function ()
    {
        var row = document.createElement('TR');
        var self = this;
        row.onmousedown = function ()
        {
            self.highlightSelectedRow(this);
            return false;
        };
        row.onmouseup = function ()
        {
            return false;
        };
        row.onmouseover = this.highlightDataRow;
        row.onmouseout = this.deHighlightDataRow;
        
        for (var x = 0; x < this.formFieldsName.length; x++)
        {
            var cell = document.createElement('TD');
            
            // copy width from header
            cell.width = this.mtf.getElementsByTagName('THEAD')[0].getElementsByTagName('TR')[0].getElementsByTagName('TD')[x].width;
            cell.innerHTML = this.getFieldValue(this.formFieldsName[x]);
            cell.setAttribute('data', this.getFieldData(this.formFieldsName[x]) );
            
            if (cell.innerHTML.trim() == '' && this.formFieldsMandatory[x])
            {
                alert(this.mandatoryMessage.replace('^1', this.mtf.tHead.rows[0].cells[x].innerHTML));
                document.getElementsByName(this.formFieldsName[x])[0].focus();
                return false;
            }
            row.appendChild(cell);
        }
        
        this.mtf.tBodies[0].appendChild(row);
        if (!document.all) row.insertCell(-1);
        this.clearFormFields();
        return true;
    }

    this.updateRowValuesFromFormFields = function (row)
    {
        var x;
        for (x = 0; x < this.formFieldsName.length; x++)
        {
            var v = this.getFieldValue(this.formFieldsName[x]);
            if (v.trim() == '' && this.formFieldsMandatory[x])
            {
                alert(this.mandatoryMessage.replace('^1', this.mtf.tHead.rows[0].cells[x].innerHTML));
                document.getElementsByName(this.formFieldsName[x])[0].focus();
                return false;
            }
            row.cells[x].innerHTML = v;
            row.cells[x].setAttribute('data', this.getFieldData(this.formFieldsName[x]));
        }
        this.clearFormFields();
        return true;
    }

    this.unselectRow = function ()
    {
        if (this.selectedRow)
        {
            this.selectedRow.onmouseout();
            this.selectedRow.style.backgroundColor = '';
            this.clearFormFields();
            this.selectedRow = null;
        }
    }

    this.deleteRow = function ()
    {
        if (this.selectedRow)
        {
            var row = this.selectedRow;
            this.unselectRow();
            this.mtf.tBodies[0].removeChild(row);
        }
    }

    this.clearFormFields = function ()
    {
        for (x = 0; x < this.formFieldsName.length; x++)
        {
            var inputs = document.getElementsByName(this.formFieldsName[x]);
            switch (inputs[0].type)
            {
                case 'text':
                    inputs[0].value = '';
                    break;
                case 'textarea':
                    inputs[0].value = '';
                    break;
                case 'hidden':
                    if(inputs[0].getAttribute('component') == 'multisearch')
                    {
                        objectId = inputs[0].getAttribute('id');
                        return $("#"+objectId).select2("val", "");
                    }
                    break;
                case 'radio':
                    for (var y = 0; y < inputs.length; y++) {
                        inputs[y].checked = false;
                    }
                    break;
                case 'select-one':
                    inputs[0].selectedIndex = -1;
                    try {
                        inputs[0].value = 0;
                    } catch (e) {}
                    break;
                case 'select-multiple':
                    for (var y = 0; y < inputs[0].options.length; y++) {
                        inputs[0].options[y].selected = false;
                    }
                    break;
                case 'checkbox':
                    inputs[0].checked = false;
                    break;
            }
        }
    }

    this.getFieldData = function (field)
    {
        var inputs = document.getElementsByName(field);
        if(inputs[0].getAttribute('component') == 'multisearch')
        {
            return JSON.stringify( $("#"+objectId).select2("data") );
        }
        else
        {
            return this.getFieldValue(field);
        }
    }

    this.getFieldValue = function (field)
    {
        var inputs = document.getElementsByName(field);
        
        if (inputs)
        {
            switch (inputs[0].type)
            {
                case 'text':
                    return inputs[0].value;
                    break;
                case 'textarea':
                    return inputs[0].value;
                    break;
                case 'hidden':
                    if(inputs[0].getAttribute('component') == 'multisearch')
                    {
                        objectId = inputs[0].getAttribute('id');
                        return $("#"+objectId).select2("val").toString();
                    }
                    break;
                case 'radio':
                    for (var y = 0; y < inputs.length; y++) {
                        if (inputs[y].checked) return inputs[y].value;
                    }
                    break;
                case 'select-one':
                    if (inputs[0].getAttribute('auxiliar') == '1') // tcombocombined
                    {
                        if (inputs[0].selectedIndex > -1) {
                            if (inputs[0].options[inputs[0].selectedIndex].value == '0') {
                                return '';
                            } else {
                                return inputs[0].options[inputs[0].selectedIndex].text;
                            }
                        };
                    }
                    else // regular combo
                    {
                        if (inputs[0].selectedIndex > -1) {
                            if (inputs[0].options[inputs[0].selectedIndex].value == '0') {
                                return '';
                            } else {
                                return inputs[0].options[inputs[0].selectedIndex].value;
                            }
                        };
                    }
                    break;
                case 'select-multiple':
                    for (var y = 0; y < inputs[0].options.length; y++) {
                        if (inputs[0].options[y].selected) {
                            v += ',' + inputs[0].options[y].value;
                        }
                    }
                    v = v.substr(1);
                    if (v) {
                        return v
                    };
                    break;
                case 'checkbox':
                    return inputs[0].checked ? 'Sim' : 'Não';
                    break;
            }
        }
        return '';
    }

    this.parseTableToJSON = function ()
    {
        var tbody = this.mtf.tBodies[0];
        var head = this.mtf.tHead.rows[0].cells;
        var result = '[';
        for (var row = 0; row < tbody.rows.length; row++)
        {
            result += '{';
            var objRow = tbody.rows[row];
            var max = objRow.cells.length;
            if (!document.all) max = objRow.cells.length - 1;
            var values = '';
            for (var col = 0; col <= max; col++)
            {
                var objCell = objRow.cells[col];
                var content = objCell.getAttribute('data');
                if (this.formFieldsAlias[col])
                    colname = this.formFieldsAlias[col];
                else
                    colname = head[col].innerHTML;
                    
                if (this.formPostFields[colname])
                {
                    if (values.length > 0)
                        values += ',';
                    values += '"' + escape(colname) + '":"' + escape(content) + '"';
                }
            }
            if (objRow.getAttribute('dbId'))
            {
                result += '"id":"' + objRow.getAttribute('dbId') + '"';
                if (values.length > 0)
                    result += ',' + values;
            }
            else
            {
                result += values;
            }
            result += '}';
            if (row < tbody.rows.length - 1) result += ',';
        }
        result += ']';
        if (this.inputResult) this.inputResult.value = result;
        return result;
    }

    // constructor
    this.selectedRow = null;
    this.initmultifield(objId, width, height);
}

function tmultifield_start( objid, fields, mandatories, width, height ) {
    if (typeof multifields == 'undefined') {
        multifields = new Object;
    }
    
    var name = $('#'+objid).attr('name').split('_').slice(1).join('_');
    
    multifields[objid] = new MultiField(objid, width, height );
    multifields[objid].formFieldsAlias = fields;
    multifields[objid].formFieldsName = Array();
    multifields[objid].formPostFields = Array();
    
    for (key in fields) {
        col = fields[key];
        multifields[objid].formPostFields[col] = 1;
        multifields[objid].formFieldsName.push(name+'_'+col);
    }
    
    multifields[objid].formFieldsMandatory = mandatories;
    multifields[objid].mandatoryMessage = 'The field ^1 is required';
    multifields[objid].storeButton  = document.getElementsByName(objid+'btnStore')[0];
    multifields[objid].deleteButton = document.getElementsByName(objid+'btnDelete')[0];
    multifields[objid].cancelButton = document.getElementsByName(objid+'btnCancel')[0];
    multifields[objid].inputResult  = document.getElementsByName(name)[0];
}

function tmultifield_enable_field(form_name, field) {
    setTimeout(function() {$('form[name='+form_name+'] div[mtf_name="block_'+field+'"]').remove();}, 20);    
}

function tmultifield_disable_field(form_name, field) {
    setTimeout(function() {$('form[name='+form_name+'] div[mtf_name="block_'+field+'"]').remove();}, 19);
    setTimeout(function() {$('form[name='+form_name+'] div[mtf_name="'+field+'"]').css('position', 'relative').prepend('<div mtf_name="block_'+field+'" style="position:absolute; width:'+$('div[mtf_name="'+field+'"]').width()+'px; height:'+$('div[mtf_name="'+field+'"]').height()+'px; background: #c0c0c0; opacity:0.5;"></div>')}, 20);    
}

function tmultifield_clear_field(form_name, field) {
    $('#'+field+'mfTable .tmultifield_scrolling').html('');
}