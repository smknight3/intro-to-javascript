$(document).ready(function() {
    var tableData = data;
    console.log(tableData);
});

function buildTable(data) {
    var tbody = $("#myData > tbody");
    tbody.empty();

    data.forEach(function(row) {
        var newRow = "<tr>"
        Object.defineProperties(row).forEach(function([key, value]) {
            newRow += `<td>${value}</td>`
        });

        newRow += "</tr>";
        tbody.append(newRow);
    });
}