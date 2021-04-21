// sorts a table by columns by headers and swaps columns by footers
cd$(document).ready(function() {
    // variables to distinguish between clicked columns
    var firstClick = 0,
        secondClick = 0,
        thirdClick = 0,
        forthClick = 0;
    /**
     * Sorts table by the first column
     * @param {*} table 
     * @param {*} order might be asc as in ascending or desc as in descending
     */
    function sortTableFirst(table, order) {
        var asc = order,
            tbody = table.find('#tableBody');

        tbody.find('tr').sort(function(a, b) {
            if (asc == "asc") {
                return $('td:nth-child(1)', a).text().localeCompare($('td:first', b).text());
            } else {
                return $('td:nth-child(1)', b).text().localeCompare($('td:first', a).text());
            }
        }).appendTo(tbody);
    }
    /**
     * Sorts table by the second column
     * @param {*} table 
     * @param {*} order might be asc as in ascending or desc as in descending
     */
    function sortTableSecond(table, order) {
        var asc = order,
            tbody = table.find('#tableBody');

        tbody.find('tr').sort(function(a, b) {
            if (asc == "asc") {
                return $('td:nth-child(2)', a).text().localeCompare($('td:nth-child(2)', b).text());
            } else {
                return $('td:nth-child(2)', b).text().localeCompare($('td:nth-child(2)', a).text());
            }
        }).appendTo(tbody);
    }

     /**
     * Sorts table by the third column
     * @param {*} table 
     * @param {*} order might be asc as in ascending or desc as in descending
     */
    function sortTableThird(table, order) {
        var asc = order,
            tbody = table.find('#tableBody');

        tbody.find('tr').sort(function(a, b) {
            if (asc == "asc") {
                return $('td:nth-child(3)', a).text().localeCompare($('td:nth-child(3)', b).text());
            } else {
                return $('td:nth-child(3)', b).text().localeCompare($('td:nth-child(3)', a).text());
            }
        }).appendTo(tbody);
    }
     /**
     * Sorts table by the forth column
     * @param {*} table 
     * @param {*} order might be asc as in ascending or desc as in descending
     */
    function sortTableForth(table, order) {
        var asc = order,
            tbody = table.find('#tableBody');

        tbody.find('tr').sort(function(a, b) {
            if (asc == "asc") {
                return $('td:nth-child(4)', a).text().localeCompare($('td:nth-child(4)', b).text());
            } else {
                return $('td:nth-child(4)', b).text().localeCompare($('td:nth-child(4)', a).text());
            }
        }).appendTo(tbody);
    }
    /**
     * Sets the order ascending or descending for the first column
     */
    $('#header1').click(function() {
        firstClick = (firstClick + 1) % 1999999973; // divides the nuber of clicks by a huge prime number to avoid unfitting in int memory space
        if (firstClick % 2 == 1) {
            sortTableFirst($('#table'), 'asc');
        } else {
            sortTableFirst($('#table'), 'desc');
        }
    });
    /**
     * Sets the order ascending or descending for the second column
     */
    $('#header2').click(function() {
        secondClick = (secondClick + 1) % 1999999973; // divides the nuber of clicks by a huge prime number to avoid unfitting in int memory space
        if (secondClick % 2 == 1) {
            sortTableSecond($('#table'), 'asc');
        } else {
            sortTableSecond($('#table'), 'desc');
        }
    });
     /**
     * Sets the order ascending or descending for the third column
     */
    $('#header3').click(function() {
        thirdClick = (thirdClick + 1) % 1999999973; // divides the nuber of clicks by a huge prime number to avoid unfitting in int memory space
        if (thirdClick % 2 == 1) {
            sortTableThird($('#table'), 'asc');
        } else {
            sortTableThird($('#table'), 'desc');
        }
    });
     /**
     * Sets the order ascending or descending for the forth column
     */
    $('#header4').click(function() {
        forthClick = (forthClick + 1) % 1999999973; // divides the nuber of clicks by a huge prime number to avoid unfitting in int memory space
        if (forthClick % 2 == 1) {
            sortTableForth($('#table'), 'asc');
        } else {
            sortTableForth($('#table'), 'desc');
        }
    });
    // swaps columns 1 and 2
    $('#footer1').click(function() {
        moveColumn($('#table'), 1, 2);
    });
    // swaps columns 2 and 3
    $('#footer2').click(function() {
        moveColumn($('#table'), 2, 3);
    });
    // swaps columns 3 and 4
    $('#footer3').click(function() {
        moveColumn($('#table'), 3, 4);
    });
    // swaps columns 4 and 1
    $('#footer4').click(function() {

        moveColumn($('#table'), 4, 1);
    });


    /**
     * Swaps columns by indexes
     * @param {*} table 
     * @param {*} from first column to swap
     * @param {*} to second column to swap
     */
    function moveColumn(table, from, to) {
        var rows = table.find("tr");

        var cols;
        rows.each(function() {
            cols = jQuery(this).children('th, td');
            // moves the rows between the 2 columns
            var aux = cols[from - 1].textContent;
            cols[from - 1].textContent = cols[to - 1].textContent;
            cols[to - 1].textContent = aux;
        });
    }
});