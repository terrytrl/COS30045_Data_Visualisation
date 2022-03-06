function init() {

    var w = 500;
    var h = 200;

    var padding = 20;

    var dataset = [[5, 20], [480,90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [21, 88]];

    //Red, Black.
    var color = [ "#ff0000", "#000000"]

    var tooltip = d3.select('body').append('div')
        .style('position','absolute')

    var xScale = d3.scaleLinear()
                    .domain([d3.min(dataset, function(d){
                        return d[0];
                    }),
                    d3.max(dataset, function(d){
                        return d[0];

                    })])
                    .range([padding, w - padding]);

    var yScale = d3.scaleLinear()
                    .domain([d3.min(dataset, function(d){
                        return d[1];
                    }),
                    d3.max(dataset, function(d){
                        return d[1];

                    })])
                    .range([h - padding, padding]);


    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h)

    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function(d, i){
            return xScale(d[0])
        })
        .attr("cy", function(d){
            return yScale(d[1])
        })
        .attr("r", function(d){
            return Math.sqrt(h / 50 + d[1]);
        })
        .attr("fill", function(d){
            if(d[0] == 480) { return color[0];}
            else return color[1];
        });

        //.on("mouseover", function(d){
        //     tooltip.html(d[1] + 'ºC')
        //    
        //     .style('left', (d3.event.pageX - 35) + 'px')
        //     .style('top',  (d3.event.pageY - 30) + 'px')
        //     .style('font-size', '15px')
        //     .style('color', "blue")
        // });

    svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
            return d[0] + "," + d[1];
        })
        .attr("x", function(d) {
            return xScale(d[0]);
        })
        .attr("y", function(d) {
                return yScale(d[1]) - 10;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "8px")
        .attr("fill", "red");
}

window.onload = init;