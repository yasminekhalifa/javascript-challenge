// from data.js
var tableData = data;
var tbody = d3.select("tbody");


data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
var filter = d3.select("#filter-btn");
filter.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
    d3.event.preventDefault();
    var input = d3.select("#datetime");
    var inputValue = input.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);
    tbody.html("");
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};