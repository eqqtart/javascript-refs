// // VERY BASICS BAREBONES OF STRING MANIPULATION //

// console.log("hi");

// const multiLineSentence = "this is a \nsentence. \nwow another line";
// console.log(multiLineSentence);

// const insertedVariable = "INSERTED VARIABLE";
// const variableSentence = `This is an ${insertedVariable}`;
// console.log("This is an "+ insertedVariable);

// // PROPERTY //
// console.log(variableSentence.length);



// // METHOD // 
// let userInput = "hElLo bOhDaN";

// let lowerCase = userInput.toLowerCase(); 
// console.log(lowerCase);

// let upperCase = userInput.toUpperCase();
// console.log(upperCase);


// // LETTERS START AT 0, NOT 1 //
// let fullSentence = "This is a sentence for doing things like this string manipulation.jasmine";

// let includesJasmine = fullSentence.includes("jasmine");
// console.log(includesJasmine);

// // let lengthSentence = fullSentence.length;
// // console.log(lengthSentence);
// // let variableCase = fullSentence[fullSentence.length - 1];
// // console.log(variableCase);
// // console.log(fullSentence);

// // NEW SCRIPT - PROMPTS //
// let userPrompt = prompt("Choose a number :)");

// console.log("userPrompt = " + userPrompt);
// console.log("userPrompt type = " + typeof userPrompt);

// console.log(parseFloat(userPrompt));
// console.log(parseInt (userPrompt));

// const remainder = 10 % 4;
// console.log(remainder);

// // MATHS OBJECT
// let useMath = Math.ceil(4.2); //rounds up
// let useMath = Math.floor(4.2); // rounds down
// let useMath = Math.round(4.2); // rounds to closest whole number
// let useMath = Math.trunc(4.2); // cuts decimal part of number
// console.log(useMath);

let randomNum = Math.random() * 20 + 1;
let randomFloor = Math.floor(randomNum);
console.log(randomNum);
console.log(randomFloor);

let rng = Math.floor(Math.random() * 20 + 1);
console.log(rng);