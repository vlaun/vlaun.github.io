// "use strict";
// (function(planet){
//
//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     var planetsArray;
//
//     // TODO: Convert planetsString to an array, save it to planetsArray.
//
//     planetsArray = planetsString.split("|");
//
//
//     console.log(planetsArray);
//
//
//
//     // TODO: Create a string with <br> tags between each planet. console.log() your results.
//
//     var formattedPlanets = planetsArray("<br>")
//
//     console.log(formattedPlanets);
//
//
//
//     //       Why might this be useful?
//
//     // Bonus: Create a second string that would display your planets in an undordered list.
//     //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
//     //        console.log() your results.
//     var htmlContent = "<ul>";
//     planetsArray.forEach(function(planet) {
//         htmlContent += "<i>" + planet + "</i>";
//     }
//     htmlContent += "<ul>"
//     console.log(htmlContent);
//     var htmlString = "<ul><li>"
//     htmlString += planetsArray.join("</li><li>")
//     htmlString += "</li><ul>"

var car = {
    car.make = "Toyota";
    car.model = "Tundra";
    car.honk = function() {
        console.log("HONK, HONK");
    };

    var car = {
        "make": "Toyota",
        "model": "Tundra",
        "honk": function() {
            console.log("HONK, HONK")
        }
    };


