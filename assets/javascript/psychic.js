// Array of the options.
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// This function is run whenever the user presses a key.
var losses = 0;
var wins = 0;
var guesses = 10;

var computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoices);

document.onkeypress = function (event) {
    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess === computerChoices) {
        wins++;
        alert("You won." + "You have "
            guesses + " left.");
        //Alerts are supposed to show up in boxes rather than window.
    } else {
        guesses--;
        alert("You have " + (guesses) + " left.");
    }

    if (guesses === 0) {
        losses++;
        alert("No more guesses left.  Game Over.");
    }

    document.getElementById.innerHTML = wins;

    document.getElementById.innerHTML = losses;

    document.getElementById.innerHTML = guesses;



};
