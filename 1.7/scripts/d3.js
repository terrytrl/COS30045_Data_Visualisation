function init() {
  var w = 500;
  var h = 100;

  var dataset;

  d3.csv("Data/Exercise_1.7_data.csv").then(function(data) {
	
    dataset = data;
    console.log(dataset);
    barChart();
  });

  function barChart() {
    var svg = d3.select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
        return i * (w / dataset.length);
      })
      .attr("y", function(d) {
        return h - d.Test;
      })
      .attr("width", w / dataset.length - 1)
      .attr("height", function(d) {
        return d.Test;
      }) 
  }
}

window.onload = init;
