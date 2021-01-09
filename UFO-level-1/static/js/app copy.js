// Using the UFO dataset provided in the form of an array of 
// JavaScript objects, write code that appends a table to your
// web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for 
// `date/time`, `city`, `state`, `country`, `shape`, and `comment` 
// at the very least.

// * Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` 
// column to find rows that match user input.

// load data from data.js
var allData=data;
// console.log(allData);
var table_body = d3.select('tbody')

function draw_table(filter_data){
  console.log('drawing...')
  // iterate through tableData (array) and populate table
  filter_data.forEach(function(row){
  //tableData.forEach(row => function populate_row(row){
    var table_row=table_body.append('tr');
    // var cell=table_row.append('td');
    // cell.text(row['datetime']);
    // cell2=table_row.append('td');
    // cell2.text(row['city']);
    // cell3=table_row.append('td');
    // cell3.text(row['staate']);
    // cell4=table_row.append('td');
    // cell4.text(row['country']);
    // cell5=table_row.append('td');
    // cell5.text(row['shape']);
    // cell6=table_row.append('td');
    // cell6.text(row['durationMinutes']);
    // cell6=table_row.append('td');
    // cell6.text(row['comments']);
    row_array = Object.entries(row);
    // [[key, value], 
    //  [key, value]...]
    row_array.forEach(function(key_value){
      var cell = table_row.append('td');
      cell.text(key_value[1]);
    });
  });
};
// // Select the button
var button = d3.select("#filter-btn")

// Select the form
var form = d3.select("#datetime")

// Prevent the page from refreshing
// d3.event.preventDefault();

// // Create event handlers
button.on("click", draw_table(allData));
// form.on("submit", runEnter);
// draw_table(allData);
var inputElement = d3.select('#');

var filteredData = allData.filter(element => element.datetime === inputValue);

console.log(filteredData);


// // from data.js
// var tableData = data;
// // console.log(tableData)


// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");
//   // console.log(inputElement)

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value")
//   // console.log(inputValue);

//   // Use the form input to filter the data by date
//   function filterDateEvents(event) {
//     return event.datetime === inputValue;
//   }
//   var results = tableData.filter(filterDateEvents);

//   tableData.forEach(function (results) {
//     // console.log(filterDateEvents);
//     var tbody = d3.select("#ufo-table-body");
//     var row = tbody.append("tr");
//     Object.entries(results).forEach(function ([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td").text(value);
//     });

//   });
//   console.log(results)


