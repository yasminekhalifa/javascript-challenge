// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// Add data to table 
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
// Target filter button 
var filter = d3.select("#filter-btn");
filter.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
    d3.event.preventDefault();
// Set input value
    var input = d3.select("#datetime");
    var inputValue = input.property("value");
// Filter data using input value
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
// Clear table contents
    tbody.html("");
// Populate table with filtered data 
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};