//when you begin writing your code you can begin by
//diagramming or write down what the actual program should do
//what's the very first thing the app does?
//what then?

//write down all the states of being the game could be in
//gameOver
//off
//on
//usersTurn
//simonsTurn
//win
// current userChoiceIsCorrect but not complete
//currentDifficulty

//1. write down all the verbs (function names) that happen in the entire game
//2. write down all the nouns (variables) that exist in the entire game
//verbs == function names and responsibilities
//nouns = variables (global or local)
//write down the sequence of verbs
//write down when the nouns change
//declare viables and functions

//nouns:
//startButton
//simonCurrentMove
//simonSequence
//userCurrentMove
//squares:  red, green, yellow, blue
//level
//score
//speed/skillMultiplier/delay
//whoseTurn
//*************************************
//verbs:
//startGame
//gameOver
//reset
//checkUserInput/compare
//playSimonSequence
//simonMove
//animate or animateAndPlaySound
//updateScore
//activateButtons



// activateButtons

var indexOfSimonMove = 0;
var simonSequence = [];
var difficulty = 500;

function startGame() {
    $("#score").text("0"); // set score to zero
    // reset any other variables (level, delay, difficulty)
    // zero out simon'sSequence
    simonSequence = [];
    simonMove(); // calls a function to randomly pick a square
}

function gameOver() {
    console.log("game over, man!");
    simonSequence = [];
    indexOfSimonMove = 0;
    disableUserInput();
}

function animate(selector) {
    $(selector).css("opacity", "0.2")
        .animate({
            opacity: "1.0"
        }, 300);

}

// randomly pick a square and add it to the end of simon's Sequence
function simonMove() {
    var squares = ['.red', '.green', '.blue', '.yellow'];
    var random = Math.floor(Math.random() * 4);
    var randomSquare = squares[random];
    simonSequence.push(randomSquare);

    playSimonSequence();
}

function playSimonSequence() {
    disableUserInput();

    var i = 0;
    var intervalId = setInterval(function() {
        animate(simonSequence[i]);
        i++;

        if(i >= simonSequence.length) {
            enableUserInput();
            clearInterval(intervalId);
        }
        console.log(difficulty);
    }, difficulty);

}

function compare(color) {
    var userSelection = "." + color;
    var currentSimonMove = simonSequence[indexOfSimonMove];

    // userSelection matches currentSimonMove
    if(userSelection == currentSimonMove) {

        // comparing userInput to simon's very last selection
        if(indexOfSimonMove == simonSequence.length - 1) {
            indexOfSimonMove = 0;
            difficulty *= .9;
            simonMove();
            updateScore();
        } else {
            indexOfSimonMove++;
        }

    } else {
        gameOver();
    }

}

function updateScore() {
    var score = $("#score").text();
    score++;
    $("#score").text(score);
}

// start game when user clicks start button.
$("#start").click(startGame);


// enabling/disabling userClicks
function enableUserInput() {
    // handle the user input when they click a square
    $('div').click(function() {
        // animate the specific button the user clicked
        animate($(this));

        // compare user input to all of simon's choices in order
        compare($(this).attr("class"));

    });
}
