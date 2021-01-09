// Using the UFO dataset provided in the form of an array of 
// JavaScript objects, write code that appends a table to your
// web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for 
// `date/time`, `city`, `state`, `country`, `shape`, and `comment` 
// at the very least.

// * Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` 
// column to find rows that match user input.

// Starter Code
var allData = data;

// Viewing the available data from the data.js
console.log(allData);

// Creating Variables
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var FormInputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
var inputData = function (fillTable){
    fillTable.forEach(UFOEvents=> {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(UFOEvents[column])
        )
    });
}
inputData(allData);

// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = FormInputDate.property("value").trim();
    // console.log(inputDate)
    
    var filterDate = allData.filter(allData => allData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        inputData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})