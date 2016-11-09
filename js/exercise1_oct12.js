//EXERCISE 1
//Write a function that returns a new array of strings with the first letter uppercased
//Take an array o strings containing names in lowercase and uppercase only the first character.
//Is this operation a type of map, filter, or reduce usage of a forEach.

var names = ['john', 'paul', 'ringo', 'george', 'yoko'];
// //
// names.forEach(function(name) {
//     name = name.charAt(0).toUpperCase() + name.slice(1);
//     console.log(name);
// });

// name = name.charAt(0).toUpperCase() + name.slice(1);
//
// console.log(name);



//EXERCISE 2
//Write a function that takes an array of numbers 1-10
//and returns the product (multiply) of all the numbers
//is this a type of map, filter, or reduce usage of the forEach
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, b) => a * b, 1);
//
// console.log(numbers);

//OR

// var sum = 1;
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// numbers.forEach(function(number) {
//     sum *= number;
//
// });
// console.log(sum)


//EXERCISE 3
//Write a function that returns a string containing the HTML necessary
//for an unordered list with an <li> for each person on your names array
//is this a type of map, filter, or reduce usage of the forEach



// var htmlContent = "";
// function listify(arrayOfStrings) {
//
//     htmlContent += "<ul>";
//     arrayOfStrings.forEach(function(string) {
//         htmlContent += "<li>" + string + "</li>"
//     });
//     htmlContent += "</ul>";
//
// }
//
// console.log(htmlContent)




//HOMEWORK
//take an array of strings containing all the states
//return only states that start with the letter T

// var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
//               'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
//               'Louisiana', 'Maine', 'Maryland', 'Massachusets', 'Michigan', 'Minnesota',
//               'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
//               'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
//               'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
//               'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin','Wyoming'];
//HW 1
//When we don't know the exact  number iterations
//while, do while
//We know how many times we'll repeat a group of operations
//for, foreach

// var i, statesWithLetterT = [];
// for (i = 0; i < states.length; i++) {
//     if(states[i][0] == 'T') {
//      statesWithLetterT.push(states[i]);
//     }
//
// }
// console.log(statesWithLetterT)


//HW 2
//make another function that returns a new array of all the states >= two "s" characters

// var i, statesWithMoreThan2LetterS = [];
// for (i = 0; i < states.length; i++) {
//     if(states[i].indexOf("s") < states[i].lastIndexOf("s")) {
//         statesWithMoreThan2LetterS.push(states[i]);
//     }
//
// }
// console.log(statesWithMoreThan2LetterS);


//HW 3
//Make a function that squares each number on an array
//take and array of numbers and make a forEach that multiplies each number by itself
//function should return the arrayOfSquares
//
// function squares(numbers) {
//     var squared = [];
//     numbers.forEach(function(number) {
//         squared.push(number * number);
//     });
//     return squared;
// }
// console.log(squares([2, 10, 11, 8, 5]));


//HW 4
//write a function that takes an array of lowercase names
//Uppercase the first letter of each name
//and returns only the names that start with "Y"

// function lowercaseNamesWithY(names) {
//     namesWithY = [];
//     names.forEach(function (name) {
//         if (name[0].toUpperCase() == 'Y') {
//             namesWithY.push(name.substring(0, 1).toUpperCase() + name.substring(1));
//
//         }
//     });
//     return namesWithY;
// }
// console.log(lowercaseNamesWithY(['john', 'paul', 'ringo', 'george', 'yoko']));


//HW 5
//write a function that takes an array of numbers 1-10
//returns the sum of only the n umbers divisible by 3

function onlyDivisibleByThree(numbers) {
    var sum = 0;
    numbers.forEach(function(number) {
        if (number % 3 == 0) {
            sum += number;
        }
    });
    return sum;
}
console.log(onlyDivisibleByThree([1, 3, 6, 7, 9, 12]));



