/**
Optional Extension
If you have time, add a 3-minute countdown timer which starts as soon as the page is loaded. 
When the timer hits 0, the game ends.
Add rules page to index?
have fun with css??
*/

var 
wordLength = 6,
rootWordOptions = [],
trimmedDict = [], // contains words only of user defined length (possible root words)
chosenWord, 
permutations = [],
guessedUnguessed = [];

trim(test);
console.log(rootWordOptions);
console.log(trimmedDict);


let rootWordOptionsSize = rootWordOptions.length;
var num = Math.floor(Math.random()*rootWordOptionsSize);
alert("A 6-letter word has been chosen for you");
chosenWord = rootWordOptions[num]; // pull a random base word
console.log(scramble(chosenWord));


/**
 * HashMap K(word) V(# letter?)
 * @param {*} arr 
 */
function trim(arr){
  for(let i= arr.length-1; i>=0; i--){
    if(arr[i].length == 6){
      rootWordOptions.push(arr[i]);
      trimmedDict.push(arr[i]);
    }
    else if (arr[i].length < 6){
      trimmedDict.push(arr[i]);
    }
  }
}

function scramble(someString){ // messy code to scramble a word
  var wordToScramble = someString;
  for(let i = 0; i < wordLength; i++){
    var ran1 = Math.floor(Math.random()*(someString.length-1));
    var ran2 = Math.floor(Math.random()*(someString.length-1));

    var char1 = wordToScramble.charAt(ran1);
    var char2 = wordToScramble.charAt(ran2);
    var indexChar2 = wordToScramble.indexOf(char2);

    wordToScramble = wordToScramble.replace(char1,char2);
    wordToScramble = wordToScramble.replace(wordToScramble.charAt(indexChar2),char1);
  }
  return wordToScramble;
}

// /**
//  * AAAAAAAAAAAAAAAAAAAAAAAAAAAA
//  * array equivalency function??
//  */

// /**
//  * Heap's Algorithm in JavaScript
//  * followed youTube video by Justin Kim
//  * fills an array with all permutations
//  * @param {*} arr array of single items to use in finding all permutations of those items
//  */
// const getPermutations = arr => {
//   const permutations = []; // figure out what is going in here

//   const swap = (arrToSwap, indexA, indexB) => {
//     const tmp = arrToSwap[indexA];
//     arrToSwap[indexA] = arrToSwap[indexB];
//     arrToSwap[indexB] = tmp;
//   }

//   const generate = (n, heapArr) => {
//     if (n==1){
//       permutations.push(heapArr.slice());
//       return;
//     }

//     generate (n - 1, heapArr);

//     for (let i = 0; i < n - 1; i++){
//       if (n % 2 == 0) {
//         swap(heapArr, i, n-1);
//       } else {
//         swap(heapArr, 0, n-1);
//       }

//       generate (n - 1, heapArr);
//     }
//   }

//   generate(chosenWord.length, chosenWord.slice());
//     return permutations;
// }

// /**
//  * AAAAAAAAAAAAAAAAAAAAAAAAAAAA
//  */
// var chosenWordArr = chosenWord.split(""); // makes sure it will be treated as an array
// permutations = getPermutations(chosenWordArr); 
// // check validity against large dictionary
// // should be ordered in length and then alphabetically

// console.log(scramble(chosenWord));

// //  blank --- version of permutations list --> put in guessedUnguessed[]
// for(let i=0; i<permutations.length; i++){
// /**
//  * AAAAAAAAAAAAAAAAAAAAAAAAAAAA
//  */
// }

// guessedUnguessed.forEach( function(x) {console.log(x)} );

// // PROMPT allow the player to guess (in a loop) - closes upon cancel/null input or game win
// do{
//   var guess = prompt("What is one word you can make from the scrambled letters?");

//   if(guess = null){
//     alert("Thank you for playing!");
//   }
//   else if((guess != null) && (guess = '*')){ // asterisk (*) scrambles chosen word
//     chosenWord = scramble(chosenWord);
//   }
//   else if((guess != null) && !(trimmedDict.includes(guess))){
//     alert(""); // too short/long
//   }
//   else if((guess != null) && (guess = x )){
//     alert(""); // word is not a valid English word
//   }
//   else if((guess != null) && (guess = x )){
//     alert(""); // word has already been found
//   }
//   else {
//     alert('Congratulations! You guessed "' + guess + '" correctly!');
//     /**
//      * after each successful guess, update the guessedUnguessed array
//      * clear console
//      * print to console
//      */
//   }
// } while (guess != null); //  && permutations = guessedUnguessed

// /**
//  * AAAAAAAAAAAAAAAAAAAAAAAAAAAA
//  * array equivalency function
//  * counter
//  */


// /**
//  * AAAAAAAAAAAAAAAAAAAAAAAAAAAA
//  * end game stats printed here
//  */