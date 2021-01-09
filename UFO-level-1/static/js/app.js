// Starter Code
var allData = data;

// Viewing the available data from the data.js
// console.log(allData);

// Creating Variables
var tableBody = d3.select("tbody");
var button = d3.select("#filter-btn");
var FormInputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
var inputData = function (fillTable) {
  fillTable.forEach(UFOEvents => {
    var row = tableBody.append("tr");
    columns.forEach(column => row.append("td").text(UFOEvents[column])
    )
  });
}
inputData(allData);

// Creating an Event Listener to filter for date on the click of the button
button.on("click", () => {

  d3.event.preventDefault();

  var inputDate = FormInputDate.property("value");
  // console.log(inputDate)

  var filterDate = allData.filter(allData => allData.datetime === inputDate);

  tableBody.html("");

  var response = {filterDate}

  if (response.filterDate.length !== 0) {
    inputData(filterDate);
  }

  else {
    tableBody.append("tr").append("td").text("No UFO Sightings on this date");
  }
})