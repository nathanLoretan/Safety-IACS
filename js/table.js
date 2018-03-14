// Initial state of the table
const nbrColType1 = 7;
const nbrColType2 = 7;
var   nbrZone = 1;

// var zone_list            = ["test1", "test2", "test3", "test4", "test5"];
// var conn_list            = [];
// var element_list         = [];
// var failure_mode_list    = [];
// var effect_global_list   = [];
// var effect_local_list    = [];
// var risk_Level_list      = [];
// var countermeasures_list = [];
// var requirements_list    = [];

function areaBtnHTML(zone, row, col) {
    return  '<textarea id="input-'+zone+'-'+(row+1)+'-'+col+'" hasBtn="true" type="text" class="form-control"/></textarea>' +
            '<button id="btn-'+zone+'-'+(row+1)+'-'+col+'" state="+" zone="'+zone+'" type="button" class="btn btn-primary">+</button>'
}

function areaHTML(zone, row, col) {
    return  '<textarea id="input-'+zone+'-'+(row+1)+'-'+col+'" type="text" class="form-control"/></textarea>'
}

function riskHTML(zone, row, col) {
    return  '<input id="input-'+zone+'-'+(row+1)+'-'+col+'" data="risk" type="text" class="form-control" list="dl-risk-' + zone + '"/>' +
            '<datalist class="dl-requ-'+zone+'">' +
                '<option value="High-Risk">' +
                '<option value="Medium-Risk">' +
                '<option value="Low-Risk">' +
            '</datalist>'
}

function requHTML(zone, row, col) {
    return  '<input id="input-'+zone+'-'+(row+1)+'-'+col+'" data="requ" type="text" class="form-control" list="dl-requ-' + zone + '"/>' +
            '<datalist id="dl-requ-'+zone+'">' +
                '<option value="Required">' +
                '<option value="Recommended">' +
                '<option value="Optional">' +
                '<option value="Not allowed">' +
                '<option value="May be allowed">' +
            '</datalist>'
}

function failureHTML(zone) {
    return '' +
    '<tbody>' +
        '<tr id="row-' + zone + '-0">' +

            '<!-- Failure Mode -->' +
            '<td id="col-' + zone + '-0-0" rowspan="1">' +
                '<textarea id="input-' + zone + '-0-0" hasBtn="true" type="text" class="form-control" list="dl-failure-mode"/></textarea>' +
                // '<datalist class="dl-failure-mode"></datalist>' +
                '<button id="fbtn-' + zone + '-0-0" state="+" zone="' + zone + '" type="button" class="btn btn-primary">+</button>' +
            '</td>' +

            '<!-- Failure Effect global,  related to failure mode -->' +
            '<td id="col-' + zone + '-0-1" rowspan="1">' +
                '<textarea id="input-' + zone + '-0-1" type="text" class="form-control" list="dl-effect-global"/></textarea>' +
                // '<datalist class="dl-effect-global"></datalist>' +
            '</td>' +

            '<!-- Failure Effect local,  related to failure mode -->' +
            '<td id="col-' + zone + '-0-2" rowspan="1">' +
                '<textarea id="input-' + zone + '-0-2" type="text" class="form-control"  list="dl-effect-local"/></textarea>' +
                // '<datalist class="dl-effect-local"></datalist>' +
            '</td>' +

            '<!-- Risk Level -->' +
            '<td id="col-' + zone + '-0-3" rowspan="1">' +
                '<input id="input-' + zone + '-0-3" type="text" data="risk" class="form-control" list="dl-risk-' + zone + '"/>' +
                '<datalist id="dl-risk-' + zone + '">' +
                    '<option value="High-Risk">' +
                    '<option value="Medium-Risk">' +
                    '<option value="Low-Risk">' +
                '</datalist>' +
            '</td>' +

            '<!-- Countermeasures -->' +
            '<td id="col-' + zone + '-0-4" rowspan="1">' +
                '<textarea id="input-' + zone + '-0-4" hasBtn="true" type="text" class="form-control" list="dl-countermeasures"/></textarea>' +
                // '<datalist class="dl-countermeasures"></datalist>' +
                '<button id="btn-' + zone + '-0-4" state="+" zone="' + zone + '" type="button" class="btn btn-primary">+</button>' +
            '</td>' +

            '<!-- Requirements -->' +
            '<td id="col-' + zone + '-0-5" rel="' + zone + '-0-4" rowspan="1">' +
                '<input id="input-' + zone + '-0-5" type="text" data="requ" class="form-control" list="dl-requ-' + zone + '"/>' +
                '<datalist id="dl-requ-' + zone + '">' +
                    '<option value="Required">' +
                    '<option value="Recommended">' +
                    '<option value="Optional">' +
                    '<option value="Not allowed">' +
                    '<option value="May be allowed">' +
                '</datalist>' +
            '</td>' +

            '<!-- Notes -->' +
            '<td id="col-' + zone + '-0-6" rel="' + zone + '-0-4" rowspan="1">' +
                '<textarea id="input-' + zone + '-0-6" type="text" class="form-control" list="notes"/></textarea>' +
            '</td>' +

        '</tr>' +
    '</tbody>'
}

function zoneHTML(zone) {

    var zoneTable1 = zone + '-0';
    var zoneTable2 = zone + '-1';

    return '' +
    '<div class="table-container" id="table-' + zoneTable1 +'">' +
        '<!-- =============================================================== -->' +
        '<hr/>' +
        '<br/>' +
        '<!-- =============================================================== -->' +
        '<table>' +
            '<thead>' +
                '<tr>' +
                    '<th>Zone</th>' +
                    '<th>Zone Description</th>' +
                    '<th>Conduits</th>' +
                    '<th>Conduits Description</th>' +
                    '<th>Assets</th>' +
                    '<th>Assets Description</th>' +
                    '<th>Notes</th>' +
                '</tr>' +
            '</thead>' +
        '</table>' +
        '<table id="zone-' + zoneTable1 +'">' +
            '<tbody>' +
                '<tr id="row-' + zoneTable1 +'-0">' +

                    '<!-- Zone -->' +
                    '<td id="col-' + zoneTable1 +'-0-0" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-0" type="text" class="form-control" list="dl-zone"/></textarea>' +
                        // '<datalist class="dl-zone"></datalist>' +
                    '</td>' +

                    '<!-- Zone Description -->' +
                    '<td id="col-' + zoneTable1 +'-0-1" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-1" type="text" class="form-control" list="zone-description"/></textarea>' +
                    '</td>' +

                    '<!-- Conduits -->' +
                    '<td id="col-' + zoneTable1 +'-0-2" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-2" hasBtn="true" type="text" class="form-control" list="dl-conn"/></textarea>' +
                        // '<datalist class="dl-conn"></datalist>' +
                        '<button id="btn-' + zoneTable1 +'-0-2" state="+" zone="' + zoneTable1 +'" type="button" class="btn btn-primary">+</button>' +
                    '</td>' +

                    '<!-- Conduits Description -->' +
                    '<td id="col-' + zoneTable1 +'-0-3" rel="' + zoneTable1 +'-0-2" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-3" type="text" class="form-control" list="conn-description"/></textarea>' +
                    '</td>' +

                    '<!-- Assets -->' +
                    '<td id="col-' + zoneTable1 +'-0-4" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-4"  hasBtn="true" type="text" class="form-control" list="dl-element"/></textarea>' +
                        // '<datalist class="dl-element"></datalist>' +
                        '<button id="btn-' + zoneTable1 +'-0-4" state="+" zone="' + zoneTable1 +'" type="button" class="btn btn-primary">+</button>' +
                    '</td>' +

                    '<!-- Assets Description, related to Assets -->' +
                    '<td id="col-' + zoneTable1 +'-0-5" rel="' + zoneTable1 +'-0-4" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-5" type="text" class="form-control" list="element-description"/></textarea>' +
                    '</td>' +

                    '<!-- Notes -->' +
                    '<td id="col-' + zoneTable1 +'-0-6" rowspan="1">' +
                        '<textarea id="input-' + zoneTable1 +'-0-6" type="text" class="form-control" list="notes"/></textarea>' +
                    '</td>' +
                '</tr>' +
            '</tbody>' +
        '</table>' +
    '</div>' +

    '<div class="table-container" id="table-' + zoneTable2 +'">' +
        '<!-- =============================================================== -->' +
        '<br/>' +
        '<!-- =============================================================== -->' +
        '<table class="header" id="zone-' + zone + '" nbrFailure="1" failureIdx="1">' +
            '<thead>' +
                '<tr>' +
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
        '</table>' +
        '<table id="zone-' + zoneTable2 +'">' +
            '<tbody>' +
                '<tr id="row-' + zoneTable2 +'-0">' +

                    '<!-- Failure Mode -->' +
                    '<td id="col-' + zoneTable2 +'-0-0" rowspan="1">' +
                        '<textarea id="input-' + zoneTable2 +'-0-0" hasBtn="true" type="text" class="form-control" list="dl-failure-mode"/></textarea>' +
                        // '<datalist class="dl-failure-mode"></datalist>' +
                        '<button id="fbtn-' + zoneTable2 +'-0-0" state="+" zone="' + zoneTable2 +'" type="button" class="btn btn-primary">+</button>' +
                    '</td>' +

                    '<!-- Failure Effect global,  related to failure mode -->' +
                    '<td id="col-' + zoneTable2 +'-0-1" rowspan="1">' +
                        '<textarea id="input-' + zoneTable2 +'-0-1" type="text" class="form-control" list="dl-effect-global"/></textarea>' +
                        // '<datalist class="dl-effect-global"></datalist>' +
                    '</td>' +

                    '<!-- Failure Effect local,  related to failure mode -->' +
                    '<td id="col-' + zoneTable2 +'-0-2" rowspan="1">' +
                        '<textarea id="input-' + zoneTable2 +'-0-2" type="text" class="form-control"  list="dl-effect-local"/></textarea>' +
                        // '<datalist class="dl-effect-local"></datalist>' +
                    '</td>' +

                    '<!-- Risk Level -->' +
                    '<td id="col-' + zoneTable2 +'-0-3" rowspan="1">' +
                        '<input id="input-' + zoneTable2 +'-0-3" type="text" data="risk" class="form-control" list="dl-risk-' + zoneTable2 +'"/>' +
                        '<datalist id="dl-risk-' + zoneTable2 +'">' +
                            '<option value="High-Risk">' +
                            '<option value="Medium-Risk">' +
                            '<option value="Low-Risk">' +
                        '</datalist>' +
                    '</td>' +

                    '<!-- Countermeasures -->' +
                    '<td id="col-' + zoneTable2 +'-0-4" rowspan="1">' +
                        '<textarea id="input-' + zoneTable2 +'-0-4" hasBtn="true" type="text" class="form-control" list="dl-countermeasures"/></textarea>' +
                        // '<datalist class="dl-countermeasures"></datalist>' +
                        '<button id="btn-' + zoneTable2 +'-0-4" state="+" zone="' + zoneTable2 +'" type="button" class="btn btn-primary">+</button>' +
                    '</td>' +

                    '<!-- Requirements -->' +
                    '<td id="col-' + zoneTable2 +'-0-5" rel="' + zoneTable2 +'-0-4" rowspan="1">' +
                        '<input id="input-' + zoneTable2 +'-0-5" type="text" data="requ" class="form-control" list="dl-requ-' + zoneTable2 +'"/>' +
                        '<datalist id="dl-requ-' + zoneTable2 +'">' +
                            '<option value="Required">' +
                            '<option value="Recommended">' +
                            '<option value="Optional">' +
                            '<option value="Not allowed">' +
                            '<option value="May be allowed">' +
                        '</datalist>' +
                    '</td>' +

                    '<!-- Notes -->' +
                    '<td id="col-' + zoneTable2 +'-0-6" rel="' + zoneTable2 +'-0-4" rowspan="1">' +
                        '<textarea id="input-' + zoneTable2 +'-0-6" type="text" class="form-control" list="notes"/></textarea>' +
                    '</td>' +

                '</tr>' +
            '</tbody>' +
        '</table>' +
    '</div>' +

    '<br id="space-' + zone + '"/>' +

    '<button id="remove-zone-' + zone + '" type="button" class="btn-control" >' +
        'Remove a zone' +
    '</button>' +

    '<!-- =================================================================== -->'
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
            // var cmp_col  = parseInt(cmp_id.substring(10, cmp_id.length));
            var cmp_col  = parseInt(cmp_id.split("-")[4]);

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

function getNbrRel(zone, rel) {

    var nbrRel = rel.length

    for(var i = 0; i < rel.length; i++) {

        var relId  = rel[i].id;
        var relRow = parseInt(relId.substring(8, relId.length));
        var relCol = parseInt(relId.substring(10, relId.length));

        var interRel = $('td[rel="' + zone + '-' + relRow + '-'+ relCol + '"]');
        nbrRel += getNbrRel(zone, interRel);
    }

    return nbrRel;
}

function addRel(table, zone, row, col, rel, selectedRow, rowspan) {

    var relId  = rel.id;
    var relRow = row;
    // var relCol = parseInt(relId.substring(10, relId.length));
    var relCol = parseInt(relId.split('-')[4]);

    var cell = addNewCell(table, zone, relRow, relCol, selectedRow);

    cell.id = "col-" + zone + '-' + (row+1) + '-'+ relCol;
    cell.setAttribute('rel', zone + '-' + (row+1) + "-" + col);
    cell.rowSpan = rowspan;

    hasBtn = document.getElementById("input-" + zone + '-' + row + '-'+ relCol).getAttribute('hasBtn');
    data = document.getElementById("input-" + zone + '-' + row + '-'+ relCol).getAttribute('data');

    if(data == "risk") {
        cell.innerHTML =  riskHTML(zone, relRow, relCol);
    }
    else if(data == "requ") {
        cell.innerHTML =  requHTML(zone, relRow, relCol);
    }
    else if(hasBtn == "true") {
        cell.innerHTML =  areaBtnHTML(zone, relRow, relCol);
    }
    else {
        cell.innerHTML =  areaHTML(zone, relRow, relCol);
    }

    // // Add a cell to the related cell to the current related one :D
    // var interRel = $('td[rel="' + zone + '-' + relRow + '-'+ relCol + '"]');
    // for(var i = 0; i < interRel.length; i++) {
    //     addRel(table, zone, relRow, relCol, interRel[i], selectedRow, rowspan);
    // }
}

function delCopyRel(zone, row, rel, nbrRow) {

    var relId  = rel.id;
    var relRow = row;
    var relCol = parseInt(relId.substring(10, relId.length));

    // Copy the values of the cells below this one
    for(var i = 0; i < (nbrRow - (relRow+1)); i++) {
        var input1 = '#input-' + zone + '-' + (i+relRow) + '-' + relCol;
        var input2 = '#input-' + zone + '-' + (i+1+relRow) + '-' + relCol;
        $(input1).val($(input2).val());
     }

     // // Add a cell to the related cell to the current related one :D
     // var interRel = $('td[rel="' + zone + '-' + relRow + '-'+ relCol + '"]');
     // for(var i = 0; i < interRel.length; i++) {
     //     delCopyRel(zone, relRow, interRel[i], nbrRow);
     // }
}

function delRel(table, zone, row, rel) {

    var relId  = rel.id;
    var relRow = row;
    var relCol = parseInt(relId.substring(10, relId.length));

    var cell_idx = table.rows["row-" + zone + '-' + relRow].cells["col-" + zone + '-' + relRow + '-' + relCol].cellIndex;
    table.rows["row-" + zone + '-' + relRow].deleteCell(cell_idx);

    // // Add a cell to the related cell to the current related one :D
    // var interRel = $('td[rel="' + zone + '-' + relRow + '-'+ relCol + '"]');
    // // console.log('rel=' + zone + '-' + relRow + '-'+ relCol)
    // // console.log(interRel)
    // for(var i = 0; i < interRel.length; i++) {
    //     delRel(table, zone, relRow, interRel[i]);
    // }
}

function NewEntries(table, zone, row, col, rel, nbrRow, nbrCol) {

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
            // console.log("row-" + zone + '-' + row, "col-" + zone + '-' + row + '-' + col)
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
                cell.innerHTML = areaBtnHTML(zone, row, col);

                // Create the new cells for the related columns
                for(x = 0; x < rel.length; x++) {

                     addRel(table, zone, row, col, rel[x], selectedRow, rowspan-1);

                    // var relId  = rel[x].id;
                    // var relRow = row;
                    // var relCol = parseInt(relId.substring(10, relId.length));
                    //
                    // cell = addNewCell(table, zone, relRow, relCol, selectedRow);
                    //
                    // cell.id = "col-" + zone + '-' + (row+1) + '-'+ relCol;
                    // cell.setAttribute('rel', zone + '-' + (row+1) + "-" + col);
                    // cell.rowSpan = rowspan-1;
                    // cell.innerHTML =  areaHTML(zone, relRow, relCol);
                }
            }
            else {
                // Create and insert the new cell in the right place
                var cell = addNewCell(table, zone, row, col, selectedRow);

                cell.id = "col-" + zone + '-' + (row+1) + '-'+ col;
                cell.rowSpan = 1;
                cell.innerHTML = areaBtnHTML(zone, row, col);

                // Create the new cells for the related columns
                for(var x = 0; x < rel.length; x++) {

                    addRel(table, zone, row, col, rel[x], selectedRow, rowspan);

                    // var relId  = rel[x].id;
                    // var relRow = row;
                    // var relCol = parseInt(relId.substring(10, relId.length));
                    //
                    // cell = addNewCell(table, zone, relRow, relCol, selectedRow);
                    //
                    // cell.id = "col-" + zone + '-' + (row+1) + '-'+ relCol;
                    // cell.setAttribute('rel', zone + '-' + (row+1) + "-" + col);
                    // cell.rowSpan = 1;
                    // cell.innerHTML =  areaHTML(zone, relRow, relCol);
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

    return nbrRow;
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

    for(var i = 0; i < zone_list.length; i++) {
        document.getElementsByClassName('dl-zone').innerHTML += '<option value="'+zone_list[i]+'" />';
    }

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
    // fillDatalist();

    $(document).on("click", 'button[id^="fbtn"]', function(ev) {

        // Get parent table
        var state = $(this).attr('state');
        var id    = $(this).attr('id');

        // Get table type, row and column from btn ID
        // var zone = parseInt(id.substring(5, id.length));
        // var type = parseInt(id.substring(7, id.length));
        // var row  = parseInt(id.substring(9, id.length));
        // var col  = parseInt(id.substring(11, id.length));
        var zone = parseInt(id.split("-")[1]);
        var type = parseInt(id.split("-")[2]);
        var row  = parseInt(id.split("-")[3]);
        var col  = parseInt(id.split("-")[4]);

        var header = document.getElementById("zone-" + zone);
        var nbrFailure = parseInt(header.getAttribute('nbrFailure'));
        var failureIdx = parseInt(header.getAttribute('failureIdx'));

        if(state == '+') {

            // Change icone + -> -
            document.getElementById('fbtn-' + zone + '-' + type + '-' + row + '-' + col).innerHTML = "-";

            // Change state of the button
            $(this).attr('state', '-');

            failureIdx += 1;
            var newZone = zone + '-' + failureIdx;

            // Add a new failure table
            var newTable = document.createElement('table');
            newTable.setAttribute('id', 'zone-' + newZone);
            newTable.innerHTML = failureHTML(newZone);
            document.getElementById('table-' + zone + '-1').appendChild(newTable);

            document.getElementById("zone-" + zone).setAttribute('nbrFailure', nbrFailure+1);
            document.getElementById("zone-" + zone).setAttribute('failureIdx', failureIdx);
        }
        // Remove a table
        else {
            document.getElementById('zone-' + zone + '-' + type).remove();
            document.getElementById("zone-" + zone).setAttribute('nbrFailure', nbrFailure-1);
        }
    });

    $(document).on("click", 'button[id^="btn"]', function(ev) {

        // Get parent table
        var state = $(this).attr('state');
        var id    = $(this).attr('id');
        var zone  = $(this).attr('zone');
        var table = document.getElementById("zone-" + zone);

        // Get table type, row and column from btn ID
        // var type = parseInt(id.substring(6, id.length));
        // var row  = parseInt(id.substring(8, id.length));
        // var col  = parseInt(id.substring(10, id.length));
        var type = parseInt(id.split("-")[2]);
        var row  = parseInt(id.split("-")[3]);
        var col  = parseInt(id.split("-")[4]);

        // Get the columns bind to this one
        var rel = $('td[rel="' + zone + '-' + row + '-' + col + '"]');

        // Determine the number of column and row in the table
        if(type == 0) {
            var nbrCol =  nbrColType1;
            var nbrRow = table.rows.length;
        }
        else {
            var nbrCol = nbrColType2;
            var nbrRow = table.rows.length;
        }

        // Add a new cell
        if(state == '+') {

            console.log(zone, row, col)
            console.log('btn-' + zone + '-' + row + '-' + col)

            // Change icone + -> -
            document.getElementById('btn-' + zone + '-' + row + '-' + col).innerHTML = "-";

            // Change state of the button
            $(this).attr('state', '-');

            NewEntries(table, zone, row, col, rel, nbrRow, nbrCol);
        }
        // -------------------------------------------------------------
        // Remove a cell
        else {

            // If it is the only used cell with related ones at the last row
            if(table.rows["row-" + zone + '-' + (nbrRow-1)].cells.length - getNbrRel(zone, rel) == 1 &&
               typeof table.rows["row-" + zone + '-' + (nbrRow-1)].cells["col-" + zone + '-' + (nbrRow-1) + '-' + col] !== 'undefined'){

               // Copy the values of the cells below this one
               for(i = 0; i < (nbrRow - (row+1)); i++) {
                   var input1 = '#input-' + zone + '-'  + (i+row) + '-' + col;
                   var input2 = '#input-' + zone + '-'  + (i+1+row) + '-' + col;
                   $(input1).val($(input2).val());
                }

                // Do the same for each relative cells
                for(var x = 0; x < rel.length; x++) {

                    delCopyRel(zone, row, rel[x], nbrRow);

                    // var relId  = rel[x].id;
                    // var relCol = parseInt(relId.substring(10, relId.length));
                    //
                    // // Copy the values of the cells below this one
                    // for(var i = 0; i < (nbrRow - (row+1)); i++) {
                    //     var input1 = '#input-' + zone + '-' + (i+row) + '-' + relCol;
                    //     var input2 = '#input-' + zone + '-' + (i+1+row) + '-' + relCol;
                    //     $(input1).val($(input2).val());
                    //  }
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

                     delCopyRel(zone, row, rel[x], nbrRow);

                     // var relId  = rel[x].id;
                     // var relCol = parseInt(relId.substring(10, relId.length));
                     //
                     // // Copy the values of the cells below this one
                     // for(i = 0; i < (nbrRow - (row+1)); i++) {
                     //     var input1 = '#input-' + zone + '-' + (i+row) + '-' + relCol;
                     //     var input2 = '#input-' + zone + '-' + (i+1+row) + '-' + relCol;
                     //     $(input1).val($(input2).val());
                     //  }
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
                 var cell_idx = table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + col].cellIndex;
                 table.rows["row-" + zone + '-' + (nbrRow-n)].deleteCell(cell_idx);

                 // delete the cells for the related columns
                 for(var x = 0; x < rel.length; x++) {

                     delRel(table, zone, (nbrRow-n), rel[x]);

                     // var relId  = rel[x].id;
                     // var relCol = parseInt(relId.substring(10, relId.length));
                     //
                     // cell_idx = table.rows["row-" + zone + '-' + (nbrRow-n)].cells["col-" + zone + '-' + (nbrRow-n) + '-' + relCol].cellIndex;
                     // table.rows["row-" + zone + '-' + (nbrRow-n)].deleteCell(cell_idx);
                 }

                 // Change icone - -> +
                 document.getElementById('btn-' + zone + '-' + (nbrRow-(n+1)) + '-' + col).innerHTML = "+";

                 // Change state of the button
                 document.getElementById('btn-' + zone + '-' + (nbrRow-(n+1)) + '-' + col).setAttribute('state', '+');
            }
        }
    });

    $(document).on("click", 'button[id="add-zone"]', function(ev) {

        // Add a new failure table
        var newZone = document.createElement('div');
        newZone.innerHTML = zoneHTML(nbrZone);
        document.body.appendChild(newZone);

        // document.body.innerHTML += zoneHTML(nbrZone);
        nbrZone += 1;

        // fillDatalist();
    });

    $(document).on("click", 'button[id^="remove-zone"]', function(ev) {

        // Get parent table
        var id    = $(this).attr('id');
        // var zone  = parseInt(id.substring(12, id.length));
        var zone  = parseInt(id.split("-")[2]);

        document.getElementById('table-' + zone + '-' + 0).remove();
        document.getElementById('table-' + zone + '-' + 1).remove();
        document.getElementById('remove-zone-' + zone).remove();
        $('#space-' + zone).remove();
    });

    $(document).on("click", 'button[id="save"]', function(ev) {

        var info = "";
        info += "System::" + document.getElementById("system").value + ";;";
        info += "Date::" + document.getElementById("date").value + ";;";
        info += "Authore::" + document.getElementById("authore").value + ";;";
        info += "Approved-by::" + document.getElementById("approved-by").value + ";;";
        info += "filename::" + document.getElementById("filename").value + ";;";

        info += "nbrZone::" + nbrZone + ";;";
        console.log("nbrZone", nbrZone);

        zones = $('.header');
        for(var i = 0; i < zones.length; i++) {
            var zid = zones[i].id
            // zone = parseInt(zid.substring(5, zid.length));
            zone = parseInt(zid.split("-")[1]);

            info += "zone::" + zone + ";;";
            info += "nbrFailure::" + zones[i].getAttribute('nbrFailure') + ";;";
            info += "failureIdx::" + zones[i].getAttribute('failureIdx') + ";;";

            var tables = $('table[id^="zone-' + zone + '-"]');
            for(var y = 0; y < tables.length; y++) {
                var tid = tables[y].id
                // table = parseInt(tid.substring(7, tid.length));
                table = parseInt(tid.split("-")[2]);

                info += "table::" + table + ";;";

                for(var r = 0; r < tables[y].rows.length; r++) {
                    for(var c = 0; c < 7; c++) {
                        if(document.getElementById("input-"+zone+"-"+table+"-"+r+"-"+c) != null) {
                            info += "col-"+zone+"-"+table+"-"+r+"-"+c+"::" + document.getElementById("input-"+zone+"-"+table+"-"+r+"-"+c).value + ";;";
                        }
                    }
                }
            }

            //
            // // Zone, Connection and Description table
            // var table = document.getElementById('zone-' + i + '-0');
            // for(var r = 0; r < table.rows.length-1; r++) {
            //     for(var c = 0; c < nbrColType1; c++) {
            //         if(document.getElementById("input-"+zone+"-0-"+r+"-"+c) != null) {
            //             info += "col-"+zone+"-0-"+r+"-"+c+"::" + document.getElementById("input-"+zone+"-0-"+r+"-"+c).value + ";;";
            //         }
            //     }
            // }

            // ----



        }

        // // for(i = 0; i < nbrZone; i++) {
        //     // var table1 = document.getElementById('zone-' + i + '-0');
        //
        //     // info += "zone-" + i + "-0::" + (table1.rows.length-1) + ";;";
        //     for(var r = 0; r < table1.rows.length-1; r++) {
        //         for(var c = 0; c < nbrColType1; c++) {
        //             if(document.getElementById("input-"+i+"-0-"+r+"-"+c) != null) {
        //                 info += "col-"+i+"-0-"+r+"-"+c+"::" + document.getElementById("input-"+i+"-0-"+r+"-"+c).value + ";;";
        //             }
        //         }
        //     }
        //
        //     var nbrFailure = document.getElementById('zone-' + i).getAttribute('nbrFailure');
        //
        //     // info += "zone-" + i + "::" + nbrFailure + ";;";
        //     for(var f = 0; f < nbrFailure; f++) {
        //         var table2 = document.getElementById('zone-' + i + '-' + f);
        //
        //         // info += "zone-" + i + "-1::" + (table2.rows.length-2) + ";;";
        //         for(var r = 0; r < table2.rows.length-2; r++) {
        //             for(var c = 0; c < nbrColType2; c++) {
        //                 if(document.getElementById("input-"+i+"-"+f+"-"+r+"-"+c) != null) {
        //                     info += "col-"+i+"-"+f+"-"+r+"-"+c+"::" + document.getElementById("input-"+i+"-"+f+"-"+r+"-"+c).value + ";;";
        //                 }
        //             }
        //         }
        //     }
        // }

        // Save the file
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
        $('br[id^="space-"').remove();

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

            // nbrZone is a global variable
            nbrZone = parseInt(info[5].split("::")[1]);

            var zone  = 0;
            var table = 0;
            var nbrFailure = 0;
            var failureIdx = 0;
            var nbrRow = 1;

            for(var i = 6; i < info.length; i++) {

                var id    = info[i].split("::")[0];
                var value = info[i].split("::")[1];

                if(id == "zone") {
                    zone = value;
                    var newZone = document.createElement('div');
                    newZone.innerHTML = zoneHTML(zone);
                    document.body.appendChild(newZone);

                    // Remove this zone because it is not sure that it exists
                    $('#zone-' + zone + '-1').remove();
                    continue;
                }
                else if(id == "table") {

                    // Change the state of the button to add failure
                    if(table != value && table != 0 && value != 0) {

                        // Change icone + -> -
                        document.getElementById('fbtn-' + zone + '-' + table + '-0-0').innerHTML = "-";

                        // Change state of the button
                        document.getElementById('fbtn-' + zone + '-' + table + '-0-0').setAttribute('state', '-');
                    }

                    table = value;

                    if(table != 0) {
                        // Add a new failure table
                        var newTable = document.createElement('table');
                        newTable.setAttribute('id', 'zone-' + zone + '-' + table);
                        newTable.innerHTML = failureHTML(zone + '-' + table);
                        document.getElementById('table-' + zone + '-1').appendChild(newTable);
                    }

                    nbrRow = 1;

                    continue;
                }
                else if(id == "nbrFailure") {
                    nbrFailure = value;
                     $('#zone-' + zone).attr('nbrFailure', nbrFailure);
                    continue;
                }
                else if(id == "failureIdx") {
                    failureIdx = value;
                     $('#zone-' + zone).attr('failureIdx', failureIdx);
                    continue;
                }
                else if(id.search("col-") != -1) {
                    // var row  = parseInt(id.substring(8, id.length));
                    // var col  = parseInt(id.substring(10, id.length));
                    var row  = parseInt(id.split("-")[3]);
                    var col  = parseInt(id.split("-")[4]);

                    var nbrCol = 7;

                    var objTable = document.getElementById('zone-' + zone + '-' + table);

                    // var zone = zone + '-' + table

                    if(row > 0) {

                        var rel = $('td[rel="' + zone + '-' + table + '-' + (row-1) + '-' + col + '"]');

                        // var nbrRow = row;

                        var isRel = document.getElementById('col-' + zone + '-' + table + '-' + (row-1) + '-' + col).getAttribute('rel');

                        if(isRel == null) {

                            // Change icone + -> -
                            document.getElementById('btn-' + zone + '-' + table + '-' + (row-1) + '-' + col).innerHTML = "-";

                            // Change state of the button
                            document.getElementById('btn-' + zone + '-' + table + '-' + (row-1) + '-' + col).setAttribute('state', '-');

                            nbrRow = NewEntries(objTable, zone + '-' + table, row-1, col, rel, nbrRow, nbrCol);
                        }
                    }
                    document.getElementById('input-' + zone + '-' + table + '-' + row + '-' + col).value = value;
                }
            }
            //     document.body.innerHTML += zoneHTML(i);
            // }
            //
            // for(var i = 6; i < info.length-1; i++) {
            //
            //     var id = info[i].split("::")[0];
            //     var value = info[i].split("::")[1];
            //
            //     if(id.search("zone-") != -1) {
            //         console.log("test", id, value);
            //          for(f = 0; f < value; f++) {
            //
            //          }
            //
            //          // // Change icone + -> -
            //          // document.getElementById('fbtn-' + zone + '-' + type + '-' + row + '-' + col).innerHTML = "-";
            //          //
            //          // // Change state of the button
            //          // $(this).attr('state', '-');
            //          //
            //          // failureIdx += 1;
            //          // var newZone = zone + '-' + failureIdx;
            //          //
            //          // // Add a new failure table
            //          // var newTable = document.createElement('table');
            //          // newTable.setAttribute('id', 'zone-' + newZone);
            //          // newTable.innerHTML = failureHTML(newZone);
            //          // document.getElementById('table-' + zone + '-1').appendChild(newTable);
            //          //
            //          // document.getElementById("zone-" + zone).setAttribute('nbrFailure', nbrFailure+1);
            //          // document.getElementById("zone-" + zone).setAttribute('failureIdx', failureIdx);
            //          continue;
            //     }
            //
            //     var zone = parseInt(id.substring(4, id.length));
            //     var type = parseInt(id.substring(6, id.length));
            //     var row  = parseInt(id.substring(8, id.length));
            //     var col  = parseInt(id.substring(10, id.length));
            //
            //     var table = document.getElementById('zone-' + zone + '-' + type);
            //
            //     var zone = zone + '-' + type
            //
            //     if(row > 0) {
            //
            //         var rel = $('td[rel="' + zone + '-' + (row-1) + '-' + col + '"]');
            //
            //         if(type == 0) {
            //             var nbrCol =  nbrColType1;
            //         }
            //         else {
            //             var nbrCol = nbrColType2;
            //         }
            //
            //         var nbrRow = row;
            //
            //         var isRel = document.getElementById('col-' + zone + '-' + (row-1) + '-' + col).getAttribute('rel');
            //
            //         if(isRel == null) {
            //
            //             // Change icone + -> -
            //             document.getElementById('btn-' + zone + '-' + (row-1) + '-' + col).innerHTML = "-";
            //
            //             // Change state of the button
            //             document.getElementById('btn-' + zone + '-' + (row-1) + '-' + col).setAttribute('state', '-');
            //
            //             NewEntries(table, zone, row-1, col, rel, nbrRow, nbrCol);
            //         }
            //     }
            //     document.getElementById('input-' + zone + '-' + row + '-' + col).value = value;
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
