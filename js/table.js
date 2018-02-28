// Initial state of the table
const nbrColType1 = 4;
const nbrColType2 = 10;
var   nbrZone = 1;

var zone_list = ["test1", "test2", "test3", "test4", "test5"];
var zone_description_list = [];
var conn_list = [];
var conn_description_list = [];
var element_list = [];
var element_description_list = [];
var failure_mode_list = [];
var effect_global_list = [];
var effect_local_list = [];
var severity_list = [];
var occurrence_list = [];
var detection_list = [];
var mitigate_list = [];
var notes_list = [];

function cellHTML(zone, row, col) {
    return  '<div class="input-group">' +
                '<input id="input-' + zone + '-' + (row+1) + '-' + col +
                     '" type="text" class="form-control"/>' +
                '<span class="input-group-btn">' +
                    '<button id="btn-' + zone + '-' + (row+1) + '-' + col +
                          '" state="+" zone="' + zone +
                          '" type="button" class="btn btn-primary">' +
                        '<span id="icon-' + zone + '-' + (row+1)  + '-' + col + '" class="glyphicon glyphicon-plus"></span>'+
                    '</button>' +
                '</span>' +
             '</div>';
}

function relHTML(zone, row, col) {
    return  '<div class="input-group">' +
                '<input id="input-' + zone + '-' + (row+1) + '-' + col +
                     '" type="text" class="form-control"/>' +
             '</div>';
}

function zoneHTML(zone) {

    var zoneTable1 = zone + '-0';
    var zoneTable2 = zone + '-1';

    return  '' +
    '<table class="table" id="zone-' + zoneTable1 + '">' +
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
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable1 + '-0-0" type="text" class="form-control" list="zone"/>' +
                        '<datalist id="zone">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Elements Description -->' +
                '<td id="col-' + zoneTable1 + '-0-1" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable1 + '-0-1" type="text" class="form-control" list="zone-description"/>' +
                        '<datalist id="zone-description">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Connection -->' +
                '<td id="col-' + zoneTable1 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable1 + '-0-2" type="text" class="form-control" list="conn"/>' +
                        '<datalist id="conn">' +
                        '</datalist>' +
                        '<span class="input-group-btn">' +
                            '<button id="btn-' + zoneTable1 + '-0-2" state="+" zone="' + zoneTable1 + '" type="button" class="btn btn-primary" >' +
                                '<span id="icon-' + zoneTable1 + '-0-2" class="glyphicon glyphicon-plus"></span>' +
                            '</button>' +
                        '</span>' +
                    '</div>' +
                '</td>' +

                '<!-- Connection Description -->' +
                '<td id="col-' + zoneTable1 + '-0-3" rel="' + zoneTable1 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable1 + '-0-3" type="text" class="form-control" list="conn-description"/>' +
                        '<datalist id="conn-description">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +
            '</tr>' +
        '</tbody>' +
    '</table>' +

    '<table class="table" id="zone-' + zoneTable2 + '">' +
        '<thead>' +
            '<tr>' +
                '<th rowspan="2">Elements</th>' +
                '<th rowspan="2">Elements Description</th>' +
                '<th rowspan="2">Failure Mode</th>' +
                '<th colspan="2">Failure Effect</th>' +
                '<th rowspan="2">Severity</th>' +
                '<th rowspan="2">Occurence Rate</th>' +
                '<th rowspan="2">Failure Detection</th>' +
                '<th rowspan="2">Mitigations Action</th>' +
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
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-0" type="text" class="form-control" list="element"/>' +
                        '<datalist id="element">' +
                        '</datalist>' +
                        '<span class="input-group-btn">' +
                            '<button id="btn-' + zoneTable2 + '-0-0" state="+" zone="' + zoneTable2 + '" type="button" class="btn btn-primary" >' +
                                '<span id="icon-' + zoneTable2 + '-0-0" class="glyphicon glyphicon-plus"></span>' +
                            '</button>' +
                        '</span>' +
                    '</div>' +
                '</td>' +

                '<!-- Elements Description, related to elements -->' +
                '<td id="col-' + zoneTable2 + '-0-1" rel="' + zoneTable2 + '-0-0" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-1" type="text" class="form-control" list="element-description"/>' +
                        '<datalist id="element-description">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Failure Mode -->' +
                '<td id="col-' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-2" type="text" class="form-control" list="failure-mode"/>' +
                        '<datalist id="failure-mode">' +
                        '</datalist>' +
                        '<span class="input-group-btn">' +
                            '<button id="btn-' + zoneTable2 + '-0-2" state="+" zone="' + zoneTable2 + '" type="button" class="btn btn-primary" >' +
                                '<span id="icon-' + zoneTable2 + '-0-2" class="glyphicon glyphicon-plus"></span>' +
                            '</button>' +
                        '</span>' +
                    '</div>' +
                '</td>' +

                '<!-- Failure Effect global,  related to failure mode -->' +
                '<td id="col-' + zoneTable2 + '-0-3" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-3" type="text" class="form-control" list="effect-global"/>' +
                        '<datalist id="effect-global">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Failure Effect local,  related to failure mode -->' +
                '<td id="col-' + zoneTable2 + '-0-4" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-4" type="text" class="form-control" list="effect-local"/>' +
                        '<datalist id="effect-local">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Severity -->' +
                '<td id="col-' + zoneTable2 + '-0-5" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-5" type="text" class="form-control" list="severity"/>' +
                        '<datalist id="severity">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Occurence Rate -->' +
                '<td id="col-' + zoneTable2 + '-0-6" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-6" type="text" class="form-control" list="occurrence"/>' +
                        '<datalist id="occurrence">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Failure Detection -->' +
                '<td id="col-' + zoneTable2 + '-0-7" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-7" type="text" class="form-control" list="detection"/>' +
                        '<datalist id="detection">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Mitigations Action -->' +
                '<td id="col-' + zoneTable2 + '-0-8" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-8" type="text" class="form-control" list="mitigate"/>' +
                        '<datalist id="mitigate">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

                '<!-- Notes -->' +
                '<td id="col-' + zoneTable2 + '-0-9" rel="' + zoneTable2 + '-0-2" rowspan="1">' +
                    '<div class="input-group">' +
                        '<input id="input-' + zoneTable2 + '-0-9" type="text" class="form-control" list="notes"/>' +
                        '<datalist id="notes">' +
                        '</datalist>' +
                    '</div>' +
                '</td>' +

            '</tr>' +
        '</tbody>' +
    '</table>' +

    '<span class="input-group-btn">' +
        '<button id="remove-zone-' + zone + '" type="button" class="btn btn-primary" >' +
            'Remove a zone' +
        '</button>' +
    '</span>'
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
        for(c = 0; c < table.rows["row-" + zone + '-' + (row+1)].cells.length; c++) {

            // Get the id of the existing cell on the row
            cmp_id   = table.rows["row-" + zone + '-' + (row+1)].cells[c].getAttribute('id');

            // Get the col number of the existing cell on the row
            cmp_col  = parseInt(cmp_id.substring(10, cmp_id.length));

            // Get the index of the cell existing on the row
            cell_idx = table.rows["row-" + zone + '-' + (row+1)].cells[c].cellIndex;

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

function fillDatalist() {

    document.getElementById('zone').innerHTML = '';
    document.getElementById('zone-description').innerHTML = '';
    document.getElementById('conn').innerHTML = '';
    document.getElementById('conn-description').innerHTML = '';
    document.getElementById('element').innerHTML = '';
    document.getElementById('element-description').innerHTML = '';
    document.getElementById('failure-mode').innerHTML = '';
    document.getElementById('effect-global').innerHTML = '';
    document.getElementById('effect-local').innerHTML = '';
    document.getElementById('severity').innerHTML = '';
    document.getElementById('occurrence').innerHTML = '';
    document.getElementById('detection').innerHTML = '';
    document.getElementById('mitigate').innerHTML = '';
    document.getElementById('notes').innerHTML = '';

    for(i = 0; i < zone_list.length; i++)
        document.getElementById('zone').innerHTML += '<option value="'+zone_list[i]+'" />';

    for(i = 0; i < zone_description_list.length; i++)
        document.getElementById('zone-description').innerHTML += '<option value="'+zone_description_list[i]+'" />';

    for(i = 0; i < conn_list.length; i++)
        document.getElementById('conn').innerHTML += '<option value="'+conn_list[i]+'" />';

    for(i = 0; i < conn_description_list.length; i++)
        document.getElementById('conn-description').innerHTML += '<option value="'+conn_description_list[i]+'" />';

    for(i = 0; i < element_list.length; i++)
        document.getElementById('element').innerHTML += '<option value="'+element_list[i]+'" />';

    for(i = 0; i < element_description_list.length; i++)
        document.getElementById('element-description').innerHTML += '<option value="'+element_description_list[i]+'" />';

    for(i = 0; i < failure_mode_list.length; i++)
        document.getElementById('failure-mode').innerHTML += '<option value="'+failure_mode_list[i]+'" />';

    for(i = 0; i < effect_global_list.length; i++)
        document.getElementById('effect-global').innerHTML += '<option value="'+effect_global_list[i]+'" />';

    for(i = 0; i < effect_local_list.length; i++)
        document.getElementById('effect-local').innerHTML += '<option value="'+effect_local_list[i]+'" />';

    for(i = 0; i < severity_list.length; i++)
        document.getElementById('severity').innerHTML += '<option value="'+severity_list[i]+'" />';

    for(i = 0; i < occurrence_list.length; i++)
        document.getElementById('occurrence').innerHTML += '<option value="'+occurrence_list[i]+'" />';

    for(i = 0; i < detection_list.length; i++)
        document.getElementById('detection').innerHTML += '<option value="'+detection_list[i]+'" />';

    for(i = 0; i < zone_list.length; i++)
        document.getElementById('mitigate').innerHTML += '<option value="'+mitigate_list[i]+'" />';

    for(i = 0; i < notes_list.length; i++)
        document.getElementById('notes').innerHTML += '<option value="'+notes_list[i]+'" />';
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

        // Determine the number of column in the table
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
            document.getElementById('icon-' + zone + '-' + row + '-' + col).className = "glyphicon glyphicon-minus";

            // Change state of the button
            $(this).attr('state', '-');

            // Create a new row or select the last existing one
            if(row+1 == nbrRow) {

                // Add a new row in the table
                var selectedRow = table.insertRow(table.rows.length);
                nbrRow += 1;

                // Set the id of the row
                selectedRow.id = "row-" + zone + '-' + (row + 1);
            }
            else {
                selectedRow = table.rows["row-" + zone + '-' + (row+1)];
            }

            // Add the new cell in the table
            for (i = 0; i < nbrCol; i++) {

                if(i == col) {

                    // Get the number of cell merged together
                    rowspan = table.rows["row-" + zone + '-' + row].cells["col-" + zone + '-' + row + '-' + col].rowSpan;

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
                        for(x = 0; x < rel.length; x++) {

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
                for(x = 0; x < rel.length; x++) {

                    var relId  = rel[x].id;
                    var relCol = parseInt(relId.substring(10, relId.length));

                    // Copy the values of the cells below this one
                    for(i = 0; i < (nbrRow - (row+1)); i++) {
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
               document.getElementById('icon-' + zone + '-' + (nbrRow-1) + '-' + col).className = "glyphicon glyphicon-plus";

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
                 for(x = 0; x < rel.length; x++) {

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
                 for(x = 0; x < rel.length; x++) {

                     var relId  = rel[x].id;
                     var relCol = parseInt(relId.substring(10, relId.length));

                     cell_idx = table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + relCol].cellIndex;
                     table.rows["row-" + zone + '-' + (nbrRow-n)].deleteCell(cell_idx);
                 }

                 // Change icone - -> +
                 document.getElementById('icon-' + zone + '-' + (nbrRow-(n+1)) + '-' + col).className = "glyphicon glyphicon-plus";

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

        document.getElementById('zone-' + zone + '-' + 0).remove();
        document.getElementById('zone-' + zone + '-' + 1).remove();
        document.getElementById('remove-zone-' + zone).remove();
    });
});
