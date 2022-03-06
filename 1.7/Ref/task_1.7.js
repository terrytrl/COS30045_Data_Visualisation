function init(){
    var w = 500;
    var h = 100;
    var padding = 10;
    var val = 4;

    var dataset;



    function barChart(){
        var svg = d3.select("body").append("svg").attr("width", w).attr("height", h); 

        svg.selectAll("rect").data(dataset).enter().append("rect")
        .attr("x", function(d, i){
            return i * (w / dataset.length);
        })
        .attr("y", function(d){
            return h - d.Test * val;
        })
        .attr("width", w / dataset.length - padding)
        .attr("height", function(d){
            return d.Test * 4;
        })
        .attr("fill", "blue"); 
    }

    d3.csv("../1.7/Exercise_1.7_data.csv").then(function(data){
        dataset = data;
        barChart();
    }).catch(function(error){
        console.warn(error);
    });
}

window.onload = init;