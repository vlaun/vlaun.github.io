// var i = 1
// while (i < 21) {
//     console.log(i);
//     i += 2;
// }
// console.log("We are done!");

var targetAmount = 100;
var amount = Math.floor(Math.random() * 10) + 1;
var amountSaved = 0;  //accumulator
var j = 1;

while (amountSaved < targetAmount) {
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j++;
}
console.log("I saved " + amountSaved + " there were " + j + "repetitions.");