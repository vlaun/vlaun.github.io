var luckyNumber;
var customerCount = 0;

while (true) {
    luckyNumber = Math.floor(Math.random() * 5) + 1;
    //Number 5, your payment will be zero
    //this is a search that is searching for a specific value

    if (luckyNumber == 5) {
        break;
        //stops the loop
        //using break statement because we know that at some point the luckyNumber will be 5.
        //this statement works for do statements, while statements or


    }
    customerCount++;
}

console.log(customerCount);


// //Filter
// var i, receipt;
// for (i = 0; i < 10; i++) {
//     receipt = Math.floor(Math.random() * 300);
//     if (receipt < 200) {
//         continue; //skip the rest of the loop
//     }
//     console.log(receipt);  //only show amounts that will get a discount
// }