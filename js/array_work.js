var orderedLetters = [];
var letters = [‘e’, ‘a’, ‘g’, ‘c’, ‘i’, ‘d’, ‘f’, ‘b’, ‘h’];
var min = letters[0]; //this will look for the smallest element in array
var minIndex = 0;
do {
    letter.forEach(function (letter, i){
        if (min > letter) {
            min = letter;
            minIndex = i;
        }

    });
    letter.splice(minIndex, 1);
    orderedLetters.push(min);
}while (letters.length > 0);
    console.log(orderedLetters);

console.log(letters);

console.log(min);

