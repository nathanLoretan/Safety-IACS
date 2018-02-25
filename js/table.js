/* TODO:
1. supprimer - ajouter bouton   OK
2. créer plusieur cellules et ajouter supprimer plusieur cellules OK
3. ajouter/supprimer dans une cellule et fusion dans les autres OK
4. ajouter relation entre cellules
    1. add and remove in the same time 2 cells
    2. add and remove in the same time severalcells
*/

// Initial state of the table
const nbrCol = 5;
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

function relHTML(row, col) {
    return  '<div class="input-group">' +
                '<input id="input-' + (row+1) + '-' + col +
                     '" type="text" class="form-control"/>' +
             '</div>';
}

function addNewCell(table, row, col, selectedRow) {

    // Create and insert the new cell in the right place
    // 1. if length = 0
    //     -> insertCell(0)
    // 2. else
    //     -> look the different existing cell
    //     -> search the col idx < or >
    //     -> insert at the right position
    if(table.rows["row-" + (row+1)].cells.length == 0) {
        return cell = selectedRow.insertCell(0);
    }
    else {
        for(c = 0; c < table.rows["row-" + (row+1)].cells.length; c++) {

            // Get the id of the existing cell on the row
            cmp_id   = table.rows["row-" + (row+1)].cells[c].getAttribute('id');

            // Get the col number of the existing cell on the row
            cmp_col  = parseInt(cmp_id.substring(4, cmp_id.length));

            // Get the index of the cell existing on the row
            cell_idx = table.rows["row-" + (row+1)].cells[c].cellIndex;

            // If the column is before the existing one
            if(col < cmp_col) {
                return selectedRow.insertCell(cell_idx);
            }
            // Insert the new cell at the last position
            else if(c == table.rows["row-" + (row+1)].cells.length-1) {
                return selectedRow.insertCell(-1);
            }
        }
    }
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

        // Get the columns bind to this one
        var rel = $('td[rel="'+ row + '-' + col + '"]');
        // $('td[rel="'+ col + '"]').attr('test', '10');

        // Add a new cell
        if(state == '+') {

            // Change icone + -> -
            document.getElementById('icon-' + row_col).className = "glyphicon glyphicon-minus";

            // Change state of the button
            $(this).attr('state', '-');

            // Create a new row or select the last existing one
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

                // // Check if the columns is related to another one
                // var isRel = false;
                // for(y = 0; y < rel.length; y++) {
                //     if(rel[y].id == 'col-' + i) {
                //         isRel = true;
                //     }
                // }

                if(i == col) {

                    // Get the number of cell merged together
                    rowspan = table.rows["row-" + row].cells["col-" + col].rowSpan;

                    // If some cell are merged together
                    if(rowspan != 1) {

                        // Save the number of merge row
                        table.rows["row-" + row].cells["col-" + col].rowSpan = 1;
                        $('td[rel="'+ row + '-'+ col + '"]').attr('rowSpan', 1);

                        // Create and insert the new cell in the right place
                        var cell = addNewCell(table, row, col, selectedRow);

                        cell.id = "col-" + col;
                        cell.rowSpan = rowspan-1;
                        cell.innerHTML = cellHTML(row, col, zone);

                        // Create the new cells for the related columns
                        for(x = 0; x < rel.length; x++) {

                            var relId  = rel[x].id;
                            var relRow = row;
                            var relCol = parseInt(relId.substring(4, relId.length));

                            cell = addNewCell(table, relRow, relCol, selectedRow);

                            cell.id = "col-" + relCol;
                            cell.setAttribute('rel', (row+1) + "-" + col);
                            cell.rowSpan = rowspan-1;
                            cell.innerHTML =  relHTML(relRow, relCol);
                        }
                    }
                    else {
                        // Create and insert the new cell in the right place
                        var cell = addNewCell(table, row, col, selectedRow);

                        cell.id = "col-" + col;
                        cell.rowSpan = 1;
                        cell.innerHTML = cellHTML(row, col, zone);

                        // Create the new cells for the related columns
                        for(x = 0; x < rel.length; x++) {

                            var relId  = rel[x].id;
                            var relRow = row;
                            var relCol = parseInt(relId.substring(4, relId.length));

                            cell = addNewCell(table, relRow, relCol, selectedRow);

                            cell.id = "col-" + relCol;
                            cell.setAttribute('rel', (row+1) + "-" + col);
                            cell.rowSpan = 1;
                            cell.innerHTML =  relHTML(relRow, relCol);
                        }
                    }
                }
                else {//} if(isRel == false){
                    // Search the last above cell to merge with new new one
                    var n = 1
                    while(typeof table.rows["row-" + (nbrRow-n)].cells["col-" + i] == 'undefined') {
                        n += 1;
                    }

                    if(nbrRow-n != nbrRow-1) {
                        table.rows["row-" + (nbrRow-n)].cells["col-" + i].rowSpan = n;

                        // Modifiy as well the cell related to this one
                        // $('td[rel="'+ (nbrRow-n) + '-'+ i + '"]').attr('rowSpan', n);
                    }
                }
            }
        }
        // Remove a cell
        else {

            // If it is the only use object at the last row
            if(table.rows["row-" + (nbrRow-1)].cells.length - rel.length == 1 &&
               typeof table.rows["row-" + (nbrRow-1)].cells["col-" + col] !== 'undefined'){

               // Copy the values of the cells below this one
               for(i = 0; i < (nbrRow - (row+1)); i++) {
                   var input1 = '#input-' + (i+row) + '-' + col;
                   var input2 = '#input-' + (i+1+row) + '-' + col;
                   $(input1).val($(input2).val());
                }

                // Do the same for each relative cells
                for(x = 0; x < rel.length; x++) {

                    var relId  = rel[x].id;
                    var relCol = parseInt(relId.substring(4, relId.length));

                    // Copy the values of the cells below this one
                    for(i = 0; i < (nbrRow - (row+1)); i++) {
                        var input1 = '#input-' + (i+row) + '-' + relCol;
                        var input2 = '#input-' + (i+1+row) + '-' + relCol;
                        $(input1).val($(input2).val());
                     }
                }

                // Remove each useless cells merged with each column
                for (i = 0; i < nbrCol; i++) {

                    if(i != col) {

                        // Search the last above cell to merge with new new one
                        var n = 1
                        while(typeof table.rows["row-" + (nbrRow-n)].cells["col-" + i] == 'undefined') {
                            n += 1;
                        }

                        if(nbrRow-n != nbrRow-1) {
                            table.rows["row-" + (nbrRow-n)].cells["col-" + i].rowSpan -= 1;
                            // $('td[rel="'+ (nbrRow-n) + '-'+ i + '"]').attr('rowSpan', table.rows["row-" + (nbrRow-n)].cells["col-" + i].rowSpan);
                        }
                    }
                }

               table.deleteRow(table.rows["row-" + (nbrRow-1)].rowIndex);
               nbrRow -= 1;

               // Change icone - -> +
               document.getElementById('icon-' + (nbrRow-1) + '-' + col).className = "glyphicon glyphicon-plus";

               // Change state of the button
               document.getElementById('btn-' + (nbrRow-1) + '-' + col).setAttribute('state', '+');
            }
            else {
                // Copy the values of the cells below this one
                for(i = 0; i < (nbrRow - (row+1)); i++) {
                    var input1 = '#input-' + (i+row) + '-' + col;
                    var input2 = '#input-' + (i+1+row) + '-' + col;
                    $(input1).val($(input2).val());
                 }

                 // Do the same for each relative cells
                 for(x = 0; x < rel.length; x++) {

                     var relId  = rel[x].id;
                     var relCol = parseInt(relId.substring(4, relId.length));

                     // Copy the values of the cells below this one
                     for(i = 0; i < (nbrRow - (row+1)); i++) {
                         var input1 = '#input-' + (i+row) + '-' + relCol;
                         var input2 = '#input-' + (i+1+row) + '-' + relCol;
                         $(input1).val($(input2).val());
                      }
                 }

                 // Search the last above cell to merge with new new one
                 var n = 1
                 while(typeof table.rows["row-" + (nbrRow-n)].cells["col-" + col] == 'undefined') {
                     n += 1;
                 }

                 // Merge the belowed cell to the one just above
                 var temp = table.rows["row-" + (nbrRow-n)].cells["col-" + col].rowSpan;
                 table.rows["row-" + (nbrRow-(n+1))].cells["col-" + col].rowSpan += temp;
                 $('td[rel="'+ (nbrRow-(n+1)) + '-'+ col + '"]').attr('rowSpan', table.rows["row-" + (nbrRow-(n+1))].cells["col-" + col].rowSpan);

                 // Delete the last cell
                 cell_idx = table.rows["row-" + (nbrRow-n)].cells["col-" + col].cellIndex;
                 table.rows["row-" + (nbrRow-n)].deleteCell(cell_idx);

                 // Create the new cells for the related columns
                 for(x = 0; x < rel.length; x++) {

                     var relId  = rel[x].id;
                     var relCol = parseInt(relId.substring(4, relId.length));

                     cell_idx = table.rows["row-" + (nbrRow-n)].cells["col-" + relCol].cellIndex;
                     table.rows["row-" + (nbrRow-n)].deleteCell(cell_idx);
                 }

                 // Change icone - -> +
                 document.getElementById('icon-' + (nbrRow-(n+1)) + '-' + col).className = "glyphicon glyphicon-plus";

                 // Change state of the button
                 document.getElementById('btn-' + (nbrRow-(n+1)) + '-' + col).setAttribute('state', '+');
            }
        }
    });
});
