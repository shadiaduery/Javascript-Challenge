// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE!

// Select the button
var filterButton = d3.select("#filter-btn");

function onSubmit(event) {
    event.preventDefault()

    d3.select("#ufo-table-body").selectAll("tr").remove();

  // Select the input element and get the raw HTML node
    var datetimeInput = d3.select("#datetime");

  // Get the value property of the input element
    var datetimeValue = datetimeInput.property("value");

    console.log(typeof datetimeValue);


    console.log(sitings);

    var filteredData = sitings.filter(siting => siting.datetime === datetimeValue);
 
    console.log(filteredData);
    filteredData.forEach(addRow);
 
};


function addRow(siting) {
    var tbody = d3.select("#ufo-table-body");
    var row = tbody.append("tr")
    var values = Object.values(siting)
    console.log(values)
    values.forEach( (value) => {
        row.append("td").text(value);
    })
};
