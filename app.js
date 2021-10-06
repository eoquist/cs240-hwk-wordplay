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
chosenWord = null, 
permutations = [],
guessedUnguessed = [];

// trim dictionary
for(let i=dictionary.length-1; i>=0; i--){
  if(dictionary[i].length == 6){
    rootWordOptions.push(dictionary[i]);
    trimmedDict.push(dictionary[i]);
  }
  else if (dictionary[i].length < 6){
    trimmedDict.push(dictionary[i]);
  }
}


function scramble(someString){
  const wordToScramble = someString;

  for(let i = 0; i < wordLength; i++){
    const ran = (Math.random()*(someString.length-1));
    const tmp = '';

  }
}

// select a random word from trimmed dictionary -> set to chosen word

let chosenWordArr = Array.from(chosenWord);

/**
 * Heap's Algorithm in JavaScript
 * followed youTube video by Justin Kim
 * fills an array with all permutations
 * @param {*} arr 
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
      output.push(heapArr.slice());
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

  generate(chosenWordArr.length, chosenWordArr.slice());
    return output;

}

/**
 * console.clear();
 * console.log(scramble(chosenWord));
 * 
 * get all permutations of the chosen word
 * getPermutations(chosenWordArr);
 * check validity against large dictionary
 * 
 * save in permutations[]
 * ^^ should be ordered in length and then alphabetically
 * 
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

permutations = getPermutations(chosenWordArr);