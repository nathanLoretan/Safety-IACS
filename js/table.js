/* TODO:
1. supprimer - ajouter bouton   OK
2. créer plusieur cellules et ajouter supprimer plusieur cellules OK
3. ajouter/supprimer dans une cellule et fusion dans les autres
4. ajouter relation entre cellules
*/

const nbrCol = 2;
var   nbrRow = 1;

function cellHTML(row, col, zone) {
    return  '<div class="input-group">' +
                '<input id="input-' + (row+1) + '-' + col +
                     '" type="text" class="form-control"/>' +
                '<span class="input-group-btn">' +
                    '<button id="btn-' + (row+1) + '-' + col +
                          '" state="+" zone="' + zone +
                          '" type="button" class="btn btn-primary">' +
                        '<span id="icon-' + (row+1)  + '-' + col + '" class="glyphicon glyphicon-plus"></span>'+
                    '</button>' +
                '</span>' +
             '</div>';
}

$(document).ready(function() {

    // https://api.jquery.com/category/selectors/
    // https://www.w3schools.com/jquery/jquery_ref_selectors.asp

    // Tip: Use the insertRow() method to create a new row (<tr>).
    // Tip: Use the deleteRow() method to remove a row.
    // Tip: Use the insertCell() method to create a new cell (<td>).
    // Tip: Use the deleteCell() method to delete a cell.
    // Tip: Use the cells collection to return a collection of all <td> or <th>
    //      elements in a table.

    $(document).on("click", 'button[id^="btn"]', function(ev) {

        // Get parent table
        var state = $(this).attr('state');
        var id    = $(this).attr('id');
        var zone  = $(this).attr('zone');
        var table = document.getElementById("zone-" + zone);

        // Get button number index
        var row_col = id.substring(4, id.length);
        var row = parseInt(id.substring(4, id.length));
        var col = parseInt(id.substring(6, id.length));

        if(state == '+') {

            var state = $(this).attr('state', '-');

            // Change icone + -> -
            document.getElementById('icon-' + row_col).className = "glyphicon glyphicon-minus";

            // Change state of the button
            $(this).attr('state', '-');

            if(row+1 == nbrRow) {

                // Add a new row in the table
                var selectedRow = table.insertRow(table.rows.length);
                nbrRow += 1;

                // Set the id of the row
                selectedRow.id = "row-" + (row + 1);
            }
            else {
                selectedRow = table.rows["row-" + (row+1)];
            }

            // Add the new cell in the table
            for (i = 0; i < nbrCol; i++) {

                if(i == col) {

                    rowspan = table.rows["row-" + row].cells["col-" + i].rowSpan;

                    if(rowspan != 1) {

                        // Save the number of merge row
                        temp = table.rows["row-" + row].cells["col-" + i].rowSpan;
                        table.rows["row-" + row].cells["col-" + i].rowSpan = 1;

                        if(table.rows["row-" + (row+1)].cells.length == 0) {
                            var cell = selectedRow.insertCell(0);
                        }
                        else {
                            var cell = selectedRow.insertCell(i);
                        }

                        cell.id = "col-" + i;
                        cell.rowSpan = temp-1;
                        cell.innerHTML = cellHTML(row, i, zone);
                    }
                    else {

                        if(table.rows["row-" + (row+1)].cells.length == 0) {
                            var cell = selectedRow.insertCell(0);
                        }
                        else {
                            var cell = selectedRow.insertCell(i);
                        }

                        cell.id = "col-" + i;
                        cell.rowSpan = 1;
                        cell.innerHTML = cellHTML(row, i, zone);
                    }
                }
                else {
                    // Search the last above cell to merge with new new one
                    var n = 1
                    while(typeof table.rows["row-" + (nbrRow-n)].cells["col-" + i] == 'undefined') {
                        n += 1;
                    }

                    if(nbrRow-n != nbrRow-1) {
                        table.rows["row-" + (nbrRow-n)].cells["col-" + i].rowSpan += 1;
                    }
                }
            }
        }
        else {

            // If it is the only use object at the last row
            if(table.rows["row-" + (nbrRow-1)].cells.length == 1 &&
               typeof table.rows["row-" + (nbrRow-1)].cells["col-" + col] !== 'undefined'){

                   // Copy the values of the cells below this one
                   for(i = 0; i < (nbrRow - (row+1)); i++) {
                       var input1 = '#input-' + i + '-' + col;
                       var input2 = '#input-' + (i+1) + '-' + col;
                       $(input1).val($(input2).val());
                    }

                   table.deleteRow(table.rows["row-" + (nbrRow-1)].rowIndex);
                   nbrRow -= 1;

                   // Change icone - -> +
                   document.getElementById('icon-' + (nbrRow-1) + '-' + col).className = "glyphicon glyphicon-plus";

                   // Change state of the button
                   document.getElementById('btn-' + (nbrRow-1) + '-' + col).setAttribute('state', '+');
            }
            else {
                // C'est la merde
                console.log('here');
            }

            // for (i = 0; i < nbrCol; i++) {
            //     if(typeof table.rows["row-" + (nbrRow-1)].cells["col-" + i] !== 'undefined' && i != col) {
            //         isRemovableRow = false;
            //     }
            // }
            //
            // console.log(isRemovableRow);

            // return;
            // 1. check if it is the only one on the row
            // 2.

            // row
            // col
            //
            // table.deleteCell()

            // table.deleteRow(table.rows["row-" + row].rowIndex);
        }
    });
});

// rowspan="2"
// colspan="2"

// function addRow(input) {
//
//     console.log("addRow");
//
//     console.log([id^="btn"])
//
//     var table = document.getElementById("myTable");
//     var i = parseInt(input.id.substring(3, input.id.length));
//     document.getElementById('icon' + i).className = "glyphicon glyphicon-minus";
//     var row = table.insertRow(table.rows.length);
//     row.id = "row" + (i + 1);
//     var cell = row.insertCell(0);
//     cell.innerHTML = '<div class="input-group">'+
//                         '<input type="text" class="form-control" />'+
//                         '<span class="input-group-btn">'+
//                             '<button id="btn'+(i+1)+'" type="button" class="btn btn-primary" onclick="addRow(this)">'+
//                                 '<span id="icon'+(i+1)+'" class="glyphicon glyphicon-plus"></span>'+
//                             '</button>'+
//                         '</span>'+
//                      '</div>';
//     console.log(i);
//     $('#btn'+i).attr('onclick', 'remRow(this)');
// }
//
// function remRow(input) {
//     console.log("remRow");
//
//     var table = document.getElementById("myTable");
//     var i = parseInt(input.id.substring(3, input.id.length));
//     var ind = table.rows["row" +i].rowIndex;
//     table.deleteRow(ind);
// }
