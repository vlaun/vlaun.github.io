"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userName, likesPizza;

do {
    userName = prompt("Hi there! What's your name?");
} while (userName.trim() == null || userName.trim() == '');

// TODO: Show an alert message that welcomes the user based on their input.

alert("Hello" + userName + "!!!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

likesPizza = confirm("Do you like pizza?");
    if (likesPizza == true) {
       alert ("Cowabunga!")
    } else {
        alert("U Y no like pizza!!!!");
    }




