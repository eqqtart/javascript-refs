// CODEBREAKER //
const code = 11037;

let userGuess = prompt("guess da number hehhehehe its 5 digits");
userGuess = parseInt(userGuess);

// correct guess
if (userGuess === code) {
    console.log("HURRAH UR RIGHT QUEEN");
}
// too many digits
else if (userGuess >= 100000) {
    console.log("TOO MANY DIGITS BRO");
}
// not enough digits
else if (userGuess <= 9999) {
    console.log("Not enough digits):");
}
// if user guess is made in letters
else if (isNaN(userGuess)) {
    console.log("Not a number loser")
}
// right amount of digits but not right number
else { 
    console.log("Nopeeee, wrong");
}