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
chosenWord = prompt("Please enter a 6-letter word."), 
permutations = [],
guessedUnguessed = [];

// trim dictionary
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
trim(dictionary);
// test print rootwordoptions
// test print trimmedDict.


let rootWordOptionsSize = rootWordOptions.length;
for(let i=0; i < 3; i++){
  if(chosenWord.length != 6){
    alert("Your word is not 6 letters long");
    prompt("Please enter a 6-letter word.");
  }
  else if(!(rootWordOptions.includes(chosenWord))){
    alert("Please choose another word");
    prompt("Please enter a 6-letter word.");
  }
  else if(i = 2){
    alert("A word has been chosen for you");
    chosenWord = rootWordOptions[(Math.random()*rootWordOptionsSize)]; // pull a random base word
  }
}
console.log(chosenWord); // test print

function scramble(someString){
  const wordToScramble = someString;

  for(let i = 0; i < wordLength; i++){
    const ran = (Math.random()*(someString.length-1));
    const tmp = '';
  }
}

/**
 * Heap's Algorithm in JavaScript
 * followed youTube video by Justin Kim
 * fills an array with all permutations
 * @param {*} arr array of single items to use in finding all permutations of those items
 */
const getPermutations = arr => {
  const permutations = []; // figure out what is going in here

  const swap = (arrToSwap, indexA, indexB) => {
    const tmp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = tmp;
  }

  const generate = (n, heapArr) => {
    if (n==1){
      permutations.push(heapArr.slice());
      return;
    }

    generate (n - 1, heapArr);

    for (let i = 0; i < n - 1; i++){
      if (n % 2 == 0) {
        swap(heapArr, i, n-1);
      } else {
        swap(heapArr, 0, n-1);
      }

      generate (n - 1, heapArr);
    }
  }

  generate(chosenWord.length, chosenWord.slice());
    return permutations;
}

let chosenWordArr = chosenWord.split() // makes sure it will be treated as an array
permutations = getPermutations(chosenWordArr); 
// check validity against large dictionary
// should be ordered in length and then alphabetically

console.clear();
console.log(scramble(chosenWord));

/** 
 * instantiate and put out to console log a hyphen-filled --- version of the permutations list
 * put in guessedUnguessed[]
 * 
 * iterate through guessedUnguessed and print one by one
 * console.log();
 * 
 * const gameWon = False;
 * PROMPT allow the player to guess (in a loop) - closes upon cancel/null input or game win
 * asterisk (*) scrambles chosen word
 * 
 * Alert to the user: word is not a valid English word (or too short/long)
 * Alert to the user: word has already been found
 * Alert to the user: Correct!
 * 
 * 
 * after each successful guess, update the guessedUnguessed array
 * print to console
 * 
 * if permutations is the same as guessedUnguessed
 * gameWon = True;
*/