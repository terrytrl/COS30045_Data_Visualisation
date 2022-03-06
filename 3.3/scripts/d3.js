function init() {
    var w = 600;
    var h = 200;

    var maxValue = 200;

    var dataset = [60, 50, 20, 42, 9, 23, 13, 80, 20, 29, 30, 12, 5, 4, 13, 15, 28, 26, 27, 25];

    var xScale = d3.scaleBand()
                .domain(d3.range(dataset.length))
                .rangeRound([0,w])
                .paddingInner(0.05);


    var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, h]);
    
    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    var bars = svg.selectAll("rect")
                .data(dataset);
        
    d3.select("#add")
            .on("click", function(){
                    
                var newNumber = Math.floor(Math.random() * maxValue);
                dataset.push(newNumber);
          
                var bars = svg.selectAll("rect").data(dataset);
                xScale.domain(d3.range(dataset.length));
          
                bars.enter()
                  .append("rect")
                  .attr("x", function(d, i){
                      return xScale(i)
                  })
                  .attr("y", function(d) {
                    return h + yScale(d);
                  })
                  .merge(bars)
                  .transition()
                  .delay(500)
                  .attr("x", function(d, i) {
                    return xScale(i);
                  })
                  .attr("y", function(d) {
                    return h - yScale(d);
                  })
                  .attr("width", xScale.bandwidth())
                  .attr("height", function(d) {
                    return yScale(d);
                  })
                  .attr("fill", "blue");    
                  console.log(dataset.length) 
        });

        d3.select("#remove")
                .on("click", function() {
                dataset.shift();

                var bars = svg.selectAll("rect").data(dataset);
                xScale.domain(d3.range(dataset.length));

                bars.exit()
                    .transition()
                    .duration(500)
                    .attr("x", w)
                    .remove()

                bars.transition()
                    .delay(500)
                    .attr("x", function(d, i) {
                    return xScale(i);
                    }) 
                    .attr("y", function(d) {
                    return h - yScale(d);
                    })
                    .attr("width", xScale.bandwidth())
                    .attr("height", function(d) {
                    return yScale(d);
                    })
                })
                          

    svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", function(d, i){
                    return xScale(i);
                })
                .attr("y", function(d){
                    return h - yScale(d);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function(d) {
                    return yScale(d);})
                .attr("fill", "blue");

 
}

window.onload = init;
