// Array of the options.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
var losses = 0;
var wins = 0;
var guesses = 26;


document.onkeyup = function (event) {
    var userGuess = event.key;
    guesses = (guesses - 1);

    var computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log("User guess: " + userGuess);
    console.log("Computer's choice: " + computerChoices);
    console.log("Guesses left: " + guesses);
    console.log("Player's wins: " + wins);


    if (userGuess === computerChoices) {
        wins = (wins + 1);
        return (wins);

        //Alerts are supposed to show up in boxes rather than window.
    } else {
        losses = (losses + 1);
        return (losses);
        console.log("Player's losses: " + losses);
        //alert("You have " + (guesses) + " left.");
    }

    if (guesses === 0) {
        return ("game over");

        //alert("No more guesses left.  Game Over.");
    } else {
        alert("Take another guess.")

    }





    document.getElementById.innerHTML = wins;

    document.getElementById.innerHTML = losses;

    document.getElementById.innerHTML = guesses;



};
