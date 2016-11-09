var oddNumber = 1;
var oddNumberCount = 47;

while (true) {
    oddNumber = Math.floor(Math.random() * 50) + 1;
    if (oddNumber % 2 !== 0) {
        if (oddNumber == 47) {
            break;
        }
        oddNumberCount++;
        console.log("Here's an odd number " + oddNumber);
    }
}
console.log("Yikes! Skipping number " + oddNumber);



var i, oddNumber;
for (i = 0; i < 50; i++) {
    oddNumber = Math.floor(Math.random() * 50);
    if (oddNumber < 50) {
        continue;
    }
    console.log(oddNumber);
}