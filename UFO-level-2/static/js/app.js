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
  var inputCity = FormInputDate.property("value");
  var inputState = FormInputDate.property("value");
  var inputCountry = FormInputDate.property("value");
  var inputShape = FormInputDate.property("value");
  // console.log(inputDate)

  var filterDate = allData.filter(allData => allData.datetime === inputDate);
  var filterCity = allData.filter(allData => allData.city === inputCity);
  var filterState = allData.filter(allData => allData.state === inputState);
  var filterCountry = allData.filter(allData => allData.country === inputCountry);
  var filterShape = allData.filter(allData => allData.shape === inputShape);

  tableBody.html("");

  var response1 = {filterDate}
  var response2 = {filterCity}
  var response3 = {filterState}
  var response4 = {filterCountry}
  var response5 = {filterShape}

  if (response1.filterDate.length !== 0) {
    inputData(filterDate);
  }
  else if (response2.filterCity.length !== 0) {
    inputData(filterCity);
  }
  else if (response3.filterState.length !== 0) {
    inputData(filterState);
  }
  else if (response4.filterCountry.length !== 0) {
    inputData(filterCountry);
  }
  else if (response5.filterShape.length !== 0) {
    inputData(filterShape);
  }
  else {
    tableBody.append("tr").append("td").text("No UFO Sightings on this date");
  }
})