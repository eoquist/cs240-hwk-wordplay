/**
best way to cycle through permutations? - save them in an array?
has to exist in given dictionary page

A root word’s letter cannot be used more than once, unless it appears more than once in the root word.

Scramble the root word and output it to the console so the player knows what letters they have to work with. 
Then display to the console the current list of guessed/unguessed words to the user, and get their inputs. 
Repeat until all words have been guessed, or if the user presses cancel. For the words that have not been 
guessed, hide them using a dashes (one dash per letter separaated by space, like for Hangman). 
Print this output to the console.

Your program outputs an appropriate message on a given input. 
These messages are appropriate on a given input word:

Alert to the user: word is not a valid English word (or too short/long)
Alert to the user: word has already been found
Alert to the user: Correct!

The exception is if a * was entered. When this is the case, scramble the available letters 
and display the status of the game again. Alert the user that you have done this.
The game ends on two conditions: if the user guesses all words, or if the user inputs null 
for a guess, which can be accomplished by pressing Cancel on the prompt.

Congratulate the user if they mananged to get all the words!
Otherwise, display the solution (all the valid words), as well as the number of words the player got right!

Optional Extension
If you have time, add a 3-minute countdown timer which starts as soon as the page is loaded. 
When the timer hits 0, the game ends.
Add rules page to index?
have fun with css??
*/

var 
trimmedDict = []; // 6 chars or under
chosenWord = '', // 6 char
permutations = [],
guessedUnguessed = [];

function trimDict(){
    dictionary;
}

function scramble(someString){
    let rtn = someString;
    // iterate through all permutations
}

function findAllPermutations(someString){
    let tmp = someString;
    let sgmt = '';

    /** STEINHAUS-JOHNSON-TROTTER ALGORITHM in JavaScript  
     * taken from Josh Braunchaud on codepen.io/jbranchaud/pen/gbRGBp 
     * barely modified */ 
    function stj(n){
        var previousPermutations,
        permutations = [],
        odd = true,
        i;
    
        if ( n === 1 ) {
        return [[1]];
        }
    
        previousPermutations = sjt(n-1);
        for ( i = 0; i < previousPermutations.length; i++ ) {
        var currentPermutation = copyArray(previousPermutations[i]);
        if ( odd ) {
            currentPermutation.push(n);
            permutations.push(currentPermutation);
            for ( var j = currentPermutation.length - 1; j > 0; j-- ) {
            currentPermutation = copyArray(currentPermutation);
            swap(currentPermutation, j, j-1);
            permutations.push(currentPermutation);
            }
        }
        else {
            currentPermutation = [n].concat(currentPermutation);
            permutations.push(currentPermutation);
            for ( var j = 0; j < currentPermutation.length - 1; j++ ) {
            currentPermutation = copyArray(currentPermutation);
            swap(currentPermutation, j, j+1);
            permutations.push(currentPermutation);
            }
        }
      odd = !odd;
    }
    return permutations;
  }
  
  function copyArray(array) {
    var copy = [];
    
    if ( array ) {
      copy = array.map(function(item) { return item; });
    }
    
    return copy;
  }
  
  // swap what is stored at position i and j in the array
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  console.log(sjt(1));
  console.log(sjt(3));
  console.log(sjt(5));
    }
    
    //for ( i=0 ; i < Math.factorial(tmp.length) ; i++ )


    // sgmt grabs 3 chars from given string --> permutations
    // make use of splice/slice
    // only keep valid words