$(document).ready(function() { // from data.js
            var tableData = data

            var button = d3.select("#filter-btn");

            button.on("click", runEnter);

            function runEnter() {

                // Prevent the page from refreshing
                d3.event.preventDefault();

                // Select the input element and get the raw HTML node
                var inputElement = d3.select("#patient-form-input");

                // Get the value property of the input element
                var inputValue = inputElement.property("value");

                console.log(inputValue);
                console.log(people);

                var filteredData = people.filter(person => person.bloodType === inputValue);

                console.log(filteredData);


                // YOUR CODE HERE!
                var tbody = d3.select("#ufo-table>tbody");

                console.log(data);

                data.forEach(function(row) {
                    console.log(row);

                    var newRow = tbody.append("tr");
                    Object.entries(row).forEach(function([key, value]) {
                        newRow.append("td").text(value);
                    });
                });
            });