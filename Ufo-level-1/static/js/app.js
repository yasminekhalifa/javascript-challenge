// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});