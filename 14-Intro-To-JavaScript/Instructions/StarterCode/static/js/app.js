// $(document).ready(function() {
//     var tableData = data;
//     // console.log(tableData);
//     buildTable(tableData)
// });

// var button = d3.select("#filter-btn");

// button.on("click", runEnter);



// function buildTable(data) {
//     var tbody = $("#ufo-table>tbody");
//     tbody.empty();

//     data.forEach(function(row) {
//         var newRow = "<tr>"
//         Object.entries(row).forEach(function([key, value]) {
//             newRow += `<td>${value}</td>`
//         });

//         newRow += "</tr>";
//         tbody.append(newRow);
//     });
// }
var tableData = data;

$(document).ready(function() {
    buildTable();

    //Event Listeners
    $("#filter-btn").on("click", function(e) {
        e.preventDefault();
        buildTable();
    });
    $("#form").on("submit", function(e) {
        e.preventDefault();
        buildTable();
    });
});

function buildTable() {
    var dateFilter = $("#datetime").val();
    if (dateFilter === "") {
        buildTableString(tableData);
    } else {
        var filteredData = tableData.filter(row => row.datetime === dateFilter);
        if (filteredData.length === 0) {
            alert("no data found");
        }
        buildTableString(filteredData);
    }
}

function buildTableString(data) {
    // JQUERY creates an HTML string
    var tbody = $("#ufo-table>tbody");
    //clear table
    tbody.empty();

    //append data
    data.forEach(function(row) {
        var newRow = "<tr>"
            // loop through each Object (dictionary)
        Object.entries(row).forEach(function([key, value]) {
            // set the cell data
            newRow += `<td>${value}</td>`
        });

        //append to table
        newRow += "</tr>";
        tbody.append(newRow);
    });
}

// function buildFilters() {
//     var unq_countries = [...new Set(tableData.map(x => x.country))];
//     unq_countries.forEach(function(val) {
//         var newOption = `<option>${val.toUpperCase()}</option>`;
//         $('#country').append(newOption);
//     });

//     var unq_states = [...new Set(tableData.map(x => x.state))];
//     unq_states.forEach(function(val) {
//         var newOption = `<option>${val.toUpperCase()}</option>`;
//         $('#state').append(newOption);
//     });
//