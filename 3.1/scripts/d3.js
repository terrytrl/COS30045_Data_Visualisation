function init() {
    var w = 500;
    var h = 200;

    var maxValue = 50;

    var dataset = [14, 5, 20, 23, 9, 23, 13, 15, 20, 29, 30, 12, 5, 4, 13, 15, 28, 26, 27, 25];

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


                
                d3.select("#btn")
                .on("click", function(){
                    
                    var numValues = dataset.length;
                    
                    dataset = [];
                    
                    for (var i = 0; i < numValues; i++) {
                        var newNumber = Math.floor(Math.random()* maxValue);
                        dataset.push(newNumber);
                    }
                    
                    svg.selectAll("rect")
                    .data(dataset)
                    .attr("x", function(d, i){
                        return xScale(i);
                    })
                    .attr("y", function(d){
                        return h - d;
                    })
                    .attr("width", xScale.bandwidth())
                    .attr("height", function(d) {
                        return yScale(d);})
                        .attr("fill", "blue");
                        console.log(dataset);       
                });
                    
                    
    svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", function(d, i){
                return xScale(i);
                })
                .attr("y", function(d){
                    return h - d;
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function(d) {
                    return yScale(d);})
                .attr("fill", "blue");

    

}

window.onload = init;
