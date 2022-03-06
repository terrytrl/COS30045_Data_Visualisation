"use strict";

function init() {
    var string1 = "Fig 1: Percent of children above national minimum standard in reading in "
    var string2011 = "2011 "
    var string2017 = "2017 "
    var string2 =  'for Years 3, 5, 7<br/>and 9 for Non-Indigenous and Indiginous children in the Norther Teritory. Data Source: <a href="https://www.nap.edu.au/results-and-reports" target="_blank">NAPLAN reesults.</a>'

    document.getElementById("button2011").addEventListener("click", function() {
        document.getElementById("image1").style.display = "none";
        document.getElementById("image2").style.display = "block";
        document.getElementById("figcapt").innerHTML = string1 + string2011 + string2;
      });

      document.getElementById("button2017").addEventListener("click", function() {
        document.getElementById("image1").style.display = "block";
        document.getElementById("image2").style.display = "none";
        document.getElementById("figcapt").innerHTML = string1 + string2017 + string2;
      });
}

window.onload = init;