// Initial state of the table
const nbrColType1 = 4;
const nbrColType2 = 9;
var   nbrZone = 1;

var zone_list = ["test1", "test2", "test3", "test4", "test5"];
var zone_description_list = ["test1", "test2", "test3", "test4", "test5"];
var conn_list = [];
var conn_description_list = [];
var element_list = [];
var element_description_list = [];
var failure_mode_list = [];
var effect_global_list = [];
var effect_local_list = [];
var risk_Level_list = [];
var countermeasures_list = [];
var requirements_list = [];
var notes_list = [];

function cellHTML(zone, row, col) {
    return  '<input id="input-'+zone+'-'+(row+1)+'-'+col+'" hasBtn="true" type="text" class="form-control"/>' +
            '<button id="btn-'+zone+'-'+(row+1)+'-'+col+'" state="+" zone="'+zone+'" type="button" class="btn btn-primary">+</button>'
}

function relHTML(zone, row, col) {
    return  '<input id="input-'+zone+'-'+(row+1)+'-'+col+'" type="text" class="form-control"/>'
}

function zoneHTML(zone) {

    var zoneTable1 = zone + '-0';
    var zoneTable2 = zone + '-1';

    return '' +
    '<div class="table-container" id="table-' + zoneTable1 + '">' +
        '<!-- =================================================================== -->' +
        '<hr/>' +
        '<br/>' +
        '<!-- =================================================================== -->' +
        '<table id="zone-' + zoneTable1 + '" class="zone-conn">' +
            '<thead>' +
                '<tr>' +
                    '<th>Zone</th>' +
                    '<th>Zone Description</th>' +
                    '<th>Connection</th>' +
                    '<th>Connection Description</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody>' +
                '<tr id="row-' + zoneTable1 + '-0">' +

                    '<!-- Zone -->' +
                    '<td id="col-' + zoneTable1 + '-0-0" rowspan="1">' +
                        '<input id="input-' + zoneTable1 + '-0-0" type="text" class="form-control" list="zone"/>' +
                        '<datalist id="zone"></datalist>' +
                    '</td>' +

                    '<!-- Elements Description -->' +
                    '<td id="col-' + zoneTable1 + '-0-1" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 + '-0-1" type="text" class="form-control" list="zone-description"/></textarea>' +
                    '</td>' +

                    '<!-- Connection -->' +
                    '<td id="col-' + zoneTable1 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable1 + '-0-2" hasBtn="true" type="text" class="form-control" list="conn"/>' +
                        '<datalist id="conn"></datalist>' +
                        '<button id="btn-' + zoneTable1 + '-0-2" state="+" zone="' + zoneTable1 + '" type="button" class="btn btn-primary">+</button>' +
                    '</td>' +

                    '<!-- Connection Description -->' +
                    '<td id="col-' + zoneTable1 + '-0-3" rel="' + zoneTable1 + '-0-2" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 + '-0-3" type="text" class="form-control" list="conn-description"/></textarea>' +
                    '</td>' +
                '</tr>' +
            '</tbody>' +
        '</table>' +
    '</div>' +

    '<div class="table-container"id="table-' + zoneTable2 + '">' +
        '<!-- =================================================================== -->' +
        '<br/>' +
        '<!-- =================================================================== -->' +
        '<table id="zone-' + zoneTable2 + '" class="el-fail">' +
            '<thead>' +
                '<tr>' +
                    '<th rowspan="2">Elements</th>' +
                    '<th rowspan="2">Elements Description</th>' +
                    '<th rowspan="2">Failure Mode</th>' +
                    '<th colspan="2">Failure Effect</th>' +
                    '<th rowspan="2">Risk Level</th>' +
                    '<th rowspan="2">Countermeasures</th>' +
                    '<th rowspan="2">Requirements</th>' +
                    '<th rowspan="2">Notes</th>' +
                '</tr>' +
                '<tr>' +
                    '<th>Global</th>' +
                    '<th>Local</th>' +
                '</tr>' +

            '</thead>' +
            '<tbody>' +
                '<tr id="row-' + zoneTable2 + '-0">' +

                    '<!-- Elements -->' +
                    '<td id="col-' + zoneTable2 + '-0-0" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-0" hasBtn="true" type="text" class="form-control" list="element"/>' +
                        '<datalist id="element"></datalist>' +
                        '<button id="btn-' + zoneTable2 + '-0-0" state="+" zone="' + zoneTable2 + '" type="button" class="btn btn-primary" >+</button>' +
                    '</td>' +

                    '<!-- Elements Description, related to elements -->' +
                    '<td id="col-' + zoneTable2 + '-0-1" rel="' + zoneTable2 + '-0-0" rowspan="1">' +
                            '<textarea id="input-' + zoneTable2 + '-0-1" type="text" class="form-control" list="element-description"/></textarea>' +
                    '</td>' +

                    '<!-- Failure Mode -->' +
                    '<td id="col-' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-2" hasBtn="true" type="text" class="form-control" list="failure-mode"/>' +
                        '<datalist id="failure-mode"></datalist>' +
                        '<button id="btn-' + zoneTable2 + '-0-2" state="+" zone="' + zoneTable2 + '" type="button" class="btn btn-primary" >+</button>' +
                    '</td>' +

                    '<!-- Failure Effect global,  related to failure mode -->' +
                    '<td id="col-' + zoneTable2 + '-0-3" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-3" type="text" class="form-control" list="effect-global"/>' +
                        '<datalist id="effect-global"></datalist>' +
                    '</td>' +

                    '<!-- Failure Effect local,  related to failure mode -->' +
                    '<td id="col-' + zoneTable2 + '-0-4" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-4" type="text" class="form-control" list="effect-local"/>' +
                        '<datalist id="effect-local"></datalist>' +
                    '</td>' +

                    '<!-- Risk Level -->' +
                    '<td id="col-' + zoneTable2 + '-0-5" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-5" type="text" class="form-control" list="severity"/>' +
                        '<datalist id="severity"></datalist>' +
                    '</td>' +

                    '<!-- Countermeasures -->' +
                    '<td id="col-' + zoneTable2 + '-0-6" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-6" type="text" class="form-control" list="occurrence"/>' +
                        '<datalist id="occurrence"></datalist>' +
                    '</td>' +

                    '<!-- Requirements -->' +
                    '<td id="col-' + zoneTable2 + '-0-7" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<input id="input-' + zoneTable2 + '-0-7" type="text" class="form-control" list="detection"/>' +
                        '<datalist id="detection"></datalist>' +
                    '</td>' +

                    '<!-- Notes -->' +
                    '<td id="col-' + zoneTable2 + '-0-8" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                        '<textarea id="input-' + zoneTable2 + '-0-8" type="text" class="form-control" list="notes"/></textarea>' +
                    '</td>' +

                '</tr>' +
            '</tbody>' +
        '</table>' +
        '<!-- =================================================================== -->' +
        '<br/>' +
        '<!-- =================================================================== -->' +
    '</div>' +


    '<button id="remove-zone-' + zone + '" type="button" class="btn-control" >' +
        'Remove a zone' +
    '</button>'
}

function addNewCell(table, zone, row, col, selectedRow) {

    // Create and insert the new cell in the right place
    // 1. if length = 0
    //     -> insertCell(0)
    // 2. else
    //     -> look the different existing cell
    //     -> search the col idx < or >
    //     -> insert at the right position
    if(table.rows["row-" + zone + '-' + (row+1)].cells.length == 0) {
        return cell = selectedRow.insertCell(0);
    }
    else {
        for(var c = 0; c < table.rows["row-" + zone + '-' + (row+1)].cells.length; c++) {

            // Get the id of the existing cell on the row
            var cmp_id   = table.rows["row-" + zone + '-' + (row+1)].cells[c].getAttribute('id');

            // Get the col number of the existing cell on the row
            var cmp_col  = parseInt(cmp_id.substring(10, cmp_id.length));

            // Get the index of the cell existing on the row
            var cell_idx = table.rows["row-" + zone + '-' + (row+1)].cells[c].cellIndex;

            // If the column is before the existing one
            if(col < cmp_col) {
                return selectedRow.insertCell(cell_idx);
            }
            // Insert the new cell at the last position
            else if(c == table.rows["row-" + zone + '-' + (row+1)].cells.length-1) {
                return selectedRow.insertCell(-1);
            }
        }
    }
}

function NewEntries(table, zone, row, col, rel, nbrRow, nbrCol) {

    // console.log("NewEntries:", zone, row, col, rel, nbrRow, nbrCol)

    // Create a new row or select the last existing one
    if(row+1 == nbrRow) {

        // Add a new row in the table
        var selectedRow = table.insertRow(table.rows.length);
        nbrRow += 1;

        // Set the id of the row
        selectedRow.id = "row-" + zone + '-' + (row + 1);
    }
    else {
        var selectedRow = table.rows["row-" + zone + '-' + (row+1)];
    }

    // Add the new cell in the table
    for (i = 0; i < nbrCol; i++) {

        if(i == col) {

            // Get the number of cell merged together
            var rowspan = table.rows["row-" + zone + '-' + row].cells["col-" + zone + '-' + row + '-' + col].rowSpan;

            // If some cell are merged together
            if(rowspan != 1) {

                // Save the number of merge row
                table.rows["row-" + zone + '-' + row].cells["col-" + zone + '-' + row + '-' + col].rowSpan = 1;
                $('td[rel="' + zone + '-' + row + '-'+ col + '"]').attr('rowSpan', 1);

                // Create and insert the new cell in the right place
                var cell = addNewCell(table, zone, row, col, selectedRow);

                cell.id = "col-" + zone + '-' + (row+1) + '-'+ col;
                cell.rowSpan = rowspan-1;
                cell.innerHTML = cellHTML(zone, row, col);

                // Create the new cells for the related columns
                for(x = 0; x < rel.length; x++) {

                    var relId  = rel[x].id;
                    var relRow = row;
                    var relCol = parseInt(relId.substring(10, relId.length));

                    cell = addNewCell(table, zone, relRow, relCol, selectedRow);

                    cell.id = "col-" + zone + '-' + (row+1) + '-'+ relCol;
                    cell.setAttribute('rel', zone + '-' + (row+1) + "-" + col);
                    cell.rowSpan = rowspan-1;
                    cell.innerHTML =  relHTML(zone, relRow, relCol);
                }
            }
            else {
                // Create and insert the new cell in the right place
                var cell = addNewCell(table, zone, row, col, selectedRow);

                cell.id = "col-" + zone + '-' + (row+1) + '-'+ col;
                cell.rowSpan = 1;
                cell.innerHTML = cellHTML(zone, row, col);

                // Create the new cells for the related columns
                for(var x = 0; x < rel.length; x++) {

                    var relId  = rel[x].id;
                    var relRow = row;
                    var relCol = parseInt(relId.substring(10, relId.length));

                    cell = addNewCell(table, zone, relRow, relCol, selectedRow);

                    cell.id = "col-" + zone + '-' + (row+1) + '-'+ relCol;
                    cell.setAttribute('rel', zone + '-' + (row+1) + "-" + col);
                    cell.rowSpan = 1;
                    cell.innerHTML =  relHTML(zone, relRow, relCol);
                }
            }
        }
        else {
            // Search the last above cell to merge with new new one
            var n = 1
            while(typeof table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + i] == 'undefined') {
                n += 1;
            }

            if(nbrRow-n != nbrRow-1) {
                table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + i].rowSpan = n;
            }
        }
    }
}

function fillDatalist() {

    // https://stackoverflow.com/questions/33310969/input-with-datalist-grouping

    document.getElementsByClassName('dl-zone').innerHTML = '';
    document.getElementsByClassName('dl-conn').innerHTML = '';
    document.getElementsByClassName('dl-element').innerHTML = '';
    document.getElementsByClassName('dl-failure-mode').innerHTML = '';
    document.getElementsByClassName('dl-effect-global').innerHTML = '';
    document.getElementsByClassName('dl-effect-local').innerHTML = '';
    document.getElementsByClassName('dl-risk-level').innerHTML = '';
    document.getElementsByClassName('dl-countermeasures').innerHTML = '';
    document.getElementsByClassName('dl-requirements').innerHTML = '';

    for(var i = 0; i < zone_list.length; i++)
        document.getElementsByClassName('dl-zone').innerHTML += '<option value="'+zone_list[i]+'" />';

    for(var i = 0; i < conn_list.length; i++)
        document.getElementsByClassName('dl-conn').innerHTML += '<option value="'+conn_list[i]+'" />';

    for(var i = 0; i < element_list.length; i++)
        document.getElementsByClassName('dl-element').innerHTML += '<option value="'+element_list[i]+'" />';

    for(var i = 0; i < failure_mode_list.length; i++)
        document.getElementsByClassName('dl-failure-mode').innerHTML += '<option value="'+failure_mode_list[i]+'" />';

    for(var i = 0; i < effect_global_list.length; i++)
        document.getElementsByClassName('dl-effect-global').innerHTML += '<option value="'+effect_global_list[i]+'" />';

    for(var i = 0; i < effect_local_list.length; i++)
        document.getElementsByClassName('dl-effect-local').innerHTML += '<option value="'+effect_local_list[i]+'" />';

    for(var i = 0; i < risk_Level_list.length; i++)
        document.getElementsByClassName('dl-risk-level').innerHTML += '<option value="'+risk_Level_list[i]+'" />';

    for(var i = 0; i < countermeasures_list.length; i++)
        document.getElementsByClassName('dl-countermeasures').innerHTML += '<option value="'+countermeasures_list[i]+'" />';

    for(var i = 0; i < requirements_list.length; i++)
        document.getElementsByClassName('dl-requirements').innerHTML += '<option value="'+requirements_list[i]+'" />';

    for(var i = 0; i < notes_list.length; i++)
        document.getElementsByClassName('dl-notes').innerHTML += '<option value="'+notes_list[i]+'" />';
}

$(document).ready(function() {

    /*
    * To easy find the element in the script, the IDs are written in the
    * following way:
    *   . Zone-a-b
    *   . row-a-b-c
    *   . col-a-b-c-d
    *   . rel/btn/input-a-b-c-d
    *
    * Where:
    *   . a = zone
    *   . b = tale in zone
    *   . c = row
    *   . d = column
    */
    fillDatalist();

    $(document).on("click", 'button[id^="btn"]', function(ev) {

        // Get parent table
        var state = $(this).attr('state');
        var id    = $(this).attr('id');
        var zone  = $(this).attr('zone');
        var table = document.getElementById("zone-" + zone);

        // Get table type, row and column from btn ID
        var type = parseInt(id.substring(6, id.length));
        var row  = parseInt(id.substring(8, id.length));
        var col  = parseInt(id.substring(10, id.length));

        // Get the columns bind to this one
        var rel = $('td[rel="' + zone + '-' + row + '-' + col + '"]');

        // Determine the number of column and row in the table
        if(type == 0) {
            var nbrCol =  nbrColType1;
            var nbrRow = table.rows.length-1;
        }
        else {
            var nbrCol = nbrColType2;
            var nbrRow = table.rows.length-2;
        }

        // Add a new cell
        if(state == '+') {

            // Change icone + -> -
            document.getElementById('btn-' + zone + '-' + row + '-' + col).innerHTML = "-";

            // Change state of the button
            $(this).attr('state', '-');

            NewEntries(table, zone, row, col, rel, nbrRow, nbrCol);
        }
        // -------------------------------------------------------------
        // Remove a cell
        else {

            // If it is the only use object at the last row
            if(table.rows["row-" + zone + '-' + (nbrRow-1)].cells.length - rel.length == 1 &&
               typeof table.rows["row-" + zone + '-' + (nbrRow-1)].cells["col-" + zone + '-' + (nbrRow-1) + '-' + col] !== 'undefined'){

               // Copy the values of the cells below this one
               for(i = 0; i < (nbrRow - (row+1)); i++) {
                   var input1 = '#input-' + zone + '-'  + (i+row) + '-' + col;
                   var input2 = '#input-' + zone + '-'  + (i+1+row) + '-' + col;
                   $(input1).val($(input2).val());
                }

                // Do the same for each relative cells
                for(var x = 0; x < rel.length; x++) {

                    var relId  = rel[x].id;
                    var relCol = parseInt(relId.substring(10, relId.length));

                    // Copy the values of the cells below this one
                    for(var i = 0; i < (nbrRow - (row+1)); i++) {
                        var input1 = '#input-' + zone + '-' + (i+row) + '-' + relCol;
                        var input2 = '#input-' + zone + '-' + (i+1+row) + '-' + relCol;
                        $(input1).val($(input2).val());
                     }
                }

                // Remove each useless cells merged with each column
                for (i = 0; i < nbrCol; i++) {

                    if(i != col) {

                        // Search the last above cell to merge with new new one
                        var n = 1
                        while(typeof table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + i] == 'undefined') {
                            n += 1;
                        }

                        if(nbrRow-n != nbrRow-1) {
                            table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + i].rowSpan -= 1;
                        }
                    }
                }

               table.deleteRow(table.rows["row-" + zone + '-' + (nbrRow-1)].rowIndex);
               nbrRow -= 1;

               // Change icone - -> +
               document.getElementById('btn-' + zone + '-' + (nbrRow-1) + '-' + col).innerHTML = "+";

               // Change state of the button
               document.getElementById('btn-' + zone + '-' + (nbrRow-1) + '-' + col).setAttribute('state', '+');
            }
            else {
                // Copy the values of the cells below this one
                for(i = 0; i < (nbrRow - (row+1)); i++) {
                    var input1 = '#input-' + zone + '-' + (i+row) + '-' + col;
                    var input2 = '#input-' + zone + '-' + (i+1+row) + '-' + col;
                    $(input1).val($(input2).val());
                 }

                 // Do the same for each relative cells
                 for(var x = 0; x < rel.length; x++) {

                     var relId  = rel[x].id;
                     var relCol = parseInt(relId.substring(10, relId.length));

                     // Copy the values of the cells below this one
                     for(i = 0; i < (nbrRow - (row+1)); i++) {
                         var input1 = '#input-' + zone + '-' + (i+row) + '-' + relCol;
                         var input2 = '#input-' + zone + '-' + (i+1+row) + '-' + relCol;
                         $(input1).val($(input2).val());
                      }
                 }

                 // Search the last above cell to merge with new new one
                 var n = 1
                 while(typeof table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + col] == 'undefined') {
                     n += 1;
                 }

                 // Merge the belowed cell to the one just above
                 var temp = table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + col].rowSpan;
                 table.rows["row-" + zone + '-' + (nbrRow-(n+1))].cells["col-" + zone + '-' + (nbrRow-(n+1)) + '-' + col].rowSpan += temp;
                 $('td[rel="' + zone + '-' + (nbrRow-(n+1)) + '-'+ col + '"]').attr('rowSpan', table.rows["row-" + zone + '-' + (nbrRow-(n+1))].cells["col-" + zone + '-' + (nbrRow-(n+1)) + '-' + col].rowSpan);

                 // Delete the last cell
                 cell_idx = table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + col].cellIndex;
                 table.rows["row-" + zone + '-' + (nbrRow-n)].deleteCell(cell_idx);

                 // Create the new cells for the related columns
                 for(var x = 0; x < rel.length; x++) {

                     var relId  = rel[x].id;
                     var relCol = parseInt(relId.substring(10, relId.length));

                     cell_idx = table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + relCol].cellIndex;
                     table.rows["row-" + zone + '-' + (nbrRow-n)].deleteCell(cell_idx);
                 }

                 // Change icone - -> +
                 document.getElementById('btn-' + zone + '-' + (nbrRow-(n+1)) + '-' + col).innerHTML = "+";

                 // Change state of the button
                 document.getElementById('btn-' + zone + '-' + (nbrRow-(n+1)) + '-' + col).setAttribute('state', '+');
            }
        }
    });

    $(document).on("click", 'button[id="add-zone"]', function(ev) {

        document.body.innerHTML += zoneHTML(nbrZone);
        nbrZone += 1;

        fillDatalist();
    });

    $(document).on("click", 'button[id^="remove-zone"]', function(ev) {

        // Get parent table
        var id    = $(this).attr('id');
        var zone  = parseInt(id.substring(12, id.length));

        document.getElementById('table-' + zone + '-' + 0).remove();
        document.getElementById('table-' + zone + '-' + 1).remove();
        document.getElementById('remove-zone-' + zone).remove();
    });

    // https://codepen.io/davidelrizzo/pen/cxsGb
    // https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
    $(document).on("click", 'button[id="save"]', function(ev) {

        var info = "";
        info += "System::" + document.getElementById("system").value + ";;";
        info += "Date::" + document.getElementById("date").value + ";;";
        info += "Authore::" + document.getElementById("authore").value + ";;";
        info += "Approved-by::" + document.getElementById("approved-by").value + ";;";
        info += "filename::" + document.getElementById("filename").value + ";;";

        info += "nbrZone::" + nbrZone + ";;";

        console.log(info);

        for(i = 0; i < nbrZone; i++) {
            table1 = document.getElementById('zone-' + i + '-0');
            table2 = document.getElementById('zone-' + i + '-1');

            // info += "zone-" + i + "-0::" + (table1.rows.length-1) + ";;";
            for(var r = 0; r < table1.rows.length-1; r++) {
                for(var c = 0; c < nbrColType1; c++) {
                    if(document.getElementById("input-"+i+"-0-"+r+"-"+c) != null) {
                        info += "col-"+i+"-0-"+r+"-"+c+"::" + document.getElementById("input-"+i+"-0-"+r+"-"+c).value + ";;";
                    }
                }
            }

            // info += "zone-" + i + "-1::" + (table2.rows.length-2) + ";;";
            for(var r = 0; r < table2.rows.length-2; r++) {
                for(var c = 0; c < nbrColType2; c++) {
                    if(document.getElementById("input-"+i+"-1-"+r+"-"+c) != null) {
                        info += "col-"+i+"-1-"+r+"-"+c+"::" + document.getElementById("input-"+i+"-1-"+r+"-"+c).value + ";;";
                    }
                }
            }
        }

        var textToSaveAsBlob = new Blob([info], {type:"text/plain"});
        var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        var fileNameToSaveAs = document.getElementById("filename").value;

        if(fileNameToSaveAs == "") {
            fileNameToSaveAs = "tool";
        }

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    });

    $(document).on("click", 'button[id="open"]', function(ev) {

        $('.table-container').remove();
        $('button[id^="remove-zone"]').remove();

        var fileToLoad = document.getElementById("fileToLoad").files[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent)
        {
            var info = fileLoadedEvent.target.result;
            var info = info.split(";;");

            document.getElementById("system").setAttribute('value', info[0].split("::")[1]);
            document.getElementById("date").setAttribute('value', info[1].split("::")[1]);
            document.getElementById("authore").setAttribute('value', info[2].split("::")[1]);
            document.getElementById("approved-by").setAttribute('value', info[3].split("::")[1]);
            document.getElementById("filename").setAttribute('value', info[4].split("::")[1]);

            var nbrZone = info[5].split("::")[1];

            for(var i = 0; i < nbrZone; i++) {
                document.body.innerHTML += zoneHTML(i);
            }

            for(var i = 6; i < info.length-1; i++) {

                var id = info[i].split("::")[0];
                var value = info[i].split("::")[1];
                var zone = parseInt(id.substring(4, id.length));
                var type = parseInt(id.substring(6, id.length));
                var row  = parseInt(id.substring(8, id.length));
                var col  = parseInt(id.substring(10, id.length));

                var table = document.getElementById('zone-' + zone + '-' + type);

                var zone = zone + '-' + type

                // console.log(i);
                if(row > 0) {

                    var rel = $('td[rel="' + zone + '-' + (row-1) + '-' + col + '"]');

                    if(type == 0) {
                        var nbrCol =  nbrColType1;
                        // var nbrRow = table.rows.length-1;   // Problem
                    }
                    else {
                        var nbrCol = nbrColType2;
                        // var nbrRow = table.rows.length-2;   // Problem
                    }

                    var nbrRow = row;

                    // console.log("--------------------------------------------");
                    // console.log("nbrRow:" + nbrRow);
                    // console.log('input-' + zone + '-' + type + '-' + row + '-' + col);

                    // hasBtn = document.getElementById('input-' + zone + '-' + type + '-' + row + '-' + col).getAttribute('hasBtn');
                    // console.log("hasBtn:" + hasBtn)

                    // console.log('input-' + zone + '-' + (row-1) + '-' + col);
                    var isRel = document.getElementById('col-' + zone + '-' + (row-1) + '-' + col).getAttribute('rel');
                    //
                    // console.log("isRel:" + isRel);
                    // console.log('input-' + zone + '-' + row + '-' + col);
                    // console.log("NewEntries2:", zone, row, col, rel, nbrRow, nbrCol)

                    if(isRel == null) {

                        // Change icone + -> -
                        document.getElementById('btn-' + zone + '-' + (row-1) + '-' + col).innerHTML = "-";

                        // Change state of the button
                        document.getElementById('btn-' + zone + '-' + (row-1) + '-' + col).setAttribute('state', '-');

                        NewEntries(table, zone, row-1, col, rel, nbrRow, nbrCol);
                    }
                }
                // console.log(i);
                document.getElementById('input-' + zone + '-' + row + '-' + col).value = value;
                // console.log(i);
            }

            // for(var i = 1; i < info.length-1; i++) {
            //
            //     id = info[i].split("::")[0];
            //     value = info[i].split("::")[1];
            //     zone = parseInt(id.substring(4, id.length));
            //     type = parseInt(id.substring(6, id.length));
            //     row  = parseInt(id.substring(8, id.length));
            //     col  = parseInt(id.substring(10, id.length));
            //
            //     // Put in another loop
            //     document.getElementById('input-' + zone + '-' + type + '-' + row + '-' + col).value = value;
            // }
        };
        fileReader.readAsText(fileToLoad, "UTF-8");
    });

    // $(document).on("click", 'button[id="print"]', function(ev) {
    //     // Save the current content of the page
    //     var originalDoc = document.body.innerHTML;
    //
    //     // Remove some element to print the page
    //     $('#print').remove();
    //     $('#add-zone').remove();
    //     $('button[id^="remove-zone"]').remove();
    //     $('button[id^="btn"]').remove();
    //
    //     window.print();
    //
    //     // Restore the content of the page
    //     document.body.innerHTML = originalDoc;
    // });
});
