//
// var daysOfTheWeek = [
//     'Monday', 'Tuesday', 'Wednesday', 'Thursday'
// ];
//
// // daysOfTheWeek.push("Friday");
// // daysOfTheWeek.unshift("Sunday");
//
// var removed = daysOfTheWeek.splice(1, 2);
//
// daysOfTheWeek.splice(2, 0, "Friday", "Saturday");
//
// console.log(removed);
// console.log(daysOfTheWeek);

'use strict';


var luckyNumber;
var i = 1;
var counters = [0, 0, 0, 0, 0];
while (i <= 100) {
    luckyNumber = Math.floor(Math.random() * 6);
    counters[luckyNumber]++;
    i++;
}
counters.forEach(function(counter, index){
    console.log(i + "appeared " + counter + " times")
});




