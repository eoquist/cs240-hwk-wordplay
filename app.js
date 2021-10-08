/**
Optional Extension
If you have time, add a 3-minute countdown timer which starts as soon as the page is loaded. 
When the timer hits 0, the game ends.
Add rules page to index?
have fun with css??
*/

var
  MIN_WORDLENGTH = 3,
  MAX_WORDLENGTH = 6,
  trimmedDict = [],
  rootWordOptions = [],
  chosenWord,
  permutations = [],
  wordsGuessed = 0,
  wordsTotal = 0,
  guessUnguessed = [];


/**
 * @param {*} arr given an array of strings (dictionary)
 * @param {*} arrOf6 array strings of length 6
 * @param {*} otherArr array of map of strings of length between 3 and 6 (inclusive) with values indicating length
 */
function trim(arr, arrOf6, otherArr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length == 6) {
      arrOf6.push(arr[i]);
      otherArr.push(arr[i]);
    } else if (arr[i].length < 6 && arr[i].length >= 3) {
      otherArr.push(arr[i]);
    }
  }
}

/**
 * @param {*} someString someString to scramble
 * @returns Returns a scrambled string
 */
function scramble(someString) { // messy code to scramble a word
  var wordToScramble = someString;
  for (let i = 0; i < MAX_WORDLENGTH; i++) {
    var ran1 = Math.floor(Math.random() * (someString.length - 1));
    var ran2 = Math.floor(Math.random() * (someString.length - 1));

    wordToScramble = swap(wordToScramble, ran1, ran2);
  }
  return wordToScramble;
}

/**
 * @param {*} someString the whole string
 * @param {*} num1 first index to swap in someString
 * @param {*} num2 second index to swap in someString
 * @returns Returns a string with some letters swapped
 */
function swap(someString, num1, num2) {
  var word = someString;

  var char1 = word.charAt(num1);
  var char2 = word.charAt(num2);
  var indexChar2 = word.indexOf(char2);

  word = word.replace(char1, char2);
  word = word.replace(word.charAt(indexChar2), char1);

  return word;
}

/**
 * Taken from stackoverflow users Nikhil Mahirrao, Chang, and others.
 * https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
 * @param {*} string takes a string to permute
 * @returns Returns an array of string permutations without duplicates, ordered from smallest to largest string
 */
function getPermutations(string) {
  if (string.length <= 2) { // base case?
  }

  for (var i = 0; i < string.length; i++) { // recursive
    var firstChar = string[i];
    var otherChar = string.substring(0, i) + string.substring(i + 1);
    
    if(otherChar.length >= 3 && (trimmedDict.includes(otherChar)) && (!(permutations.includes(otherChar))) ){
      permutations.push(otherChar);
      console.log(otherChar);
    }

    permutations = Array.from(new Set(permutations.concat(getPermutations(otherChar))))
    permutations.sort( (a,b) => a.length - b.length ); // smallest to largest
  }
  return permutations;
}

/**
 * @param {*} arr arr is an array to be printed vertically
 */
function printArr(arr){
  for(i = 0; i < arr.length - 1; i++){
    console.log(arr[i]);
  }
}

/**
 * This prints to the console the basic game stats after a game has been quit or completed
 */
function endGame() {
  console.clear();
  console.log("Thank you for playing!");
  console.log("You correctly guessed " + wordsGuessed + " of " + wordsTotal + " words.");
  if (wordsGuessed == wordsTotal) {
    console.log("Congratulations on guessing all possible word combinations!");
  } else {
    console.log("These were all the possible words:");
    printArr(permutations);
  }
}


/**
 * BEGIN MAIN CODE
 */
trim(dictionary, rootWordOptions, trimmedDict);

// pull a random base word
let rootWordOptionsSize = rootWordOptions.length;
var num = Math.floor(Math.random() * rootWordOptionsSize);
alert("A 6-letter word has been chosen for you");
chosenWord = rootWordOptions[num]; 

// handle permutations
var chosenWordArr = chosenWord.split("");
permutations.push(chosenWord);
permutations = getPermutations(chosenWord);
wordsTotal = permutations.length;

// guessedUnguessed instantiated
for (i = 0; i < permutations.length - 1; i++) {
  guessUnguessed.push('- '.repeat(permutations[i].length)); // save fill-in-the-blanks for each permutation
}

// game screen print
var tmpScramble = scramble(chosenWord)
console.log("Your letters are: " + tmpScramble);
printArr(guessUnguessed);

// game loop
do {
  var guess = prompt("What is one word you can make from the scrambled letters?");

  if ((guess != null) && (guess == '*')) { // asterisk (*) scrambles chosen word
    console.log(scramble(chosenWord));
  } else if ((guess != null) && (guess.length < 3 || guess.length > 6)) {
    alert(guess + " is either too short or too long!");
  } else if ((guess != null) && (guessUnguessed.includes(guess)) ){
    alert(guess + " has already been found");
  } else if (guess != null && (trimmedDict.includes(guess))) {
    alert('Congratulations! You guessed "' + guess + '" correctly!');
    wordsGuessed++;
    var tmpIndex = permutations.indexOf(guess);
    guessUnguessed[tmpIndex] = permutations[tmpIndex]; // update guessed status
    console.clear();
    console.log(tmpScramble);
    printArr(guessUnguessed);
  } else if ((guess != null) && !(trimmedDict.includes(guess))) {
    alert(guess + " is not in the dictionary provided");
  } else {
    endGame();
    break;
  }
} while (wordsGuessed < wordsTotal);
/**
 * END MAIN CODE
 */
