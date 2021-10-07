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
wordsTotal = 1
guessUnguessed = [];

var dictMap = {
  word: '',
  count: 0
}

var guessedUnguessedOBJ = {
  word: '',
  unguessed: '',
  state: ''
}

/**
 * @param {*} arr given an array of strings (dictionary)
 * @param {*} arrOf6 array strings of length 6
 * @param {*} dict array of map of strings of length between 3 and 6 (inclusive) with values indicating length
 */
function trim(arr, arrOf6, dict){
  for(let i=0; i<arr.length-1; i++){
    var map = new dictMap();
    if(arr[i].length == 6){
      arrOf6.push(arr[i]);

      map.word = arr[i];
      map.count = arr[i].length;
      trimmedDict.push(map);
    }
    else if (arr[i].length < 6 && arr[i].length >= 3 ){
      map.word = arr[i];
      map.count = arr[i].length;
      trimmedDict.push(map);
    }
  }
}

function scramble(someString){ // messy code to scramble a word
  var wordToScramble = someString;
  for(let i = 0; i < MAX_WORDLENGTH; i++){
    var ran1 = Math.floor(Math.random()*(someString.length-1));
    var ran2 = Math.floor(Math.random()*(someString.length-1));

    wordToScramble = swap(wordToScramble,ran1,ran2);
  }
  return wordToScramble;
}

function swap(someString, num1, num2){
  var word = someString;

  var char1 = word.charAt(num1);
  var char2 = word.charAt(num2);
  var indexChar2 = word.indexOf(char2);

  word = word.replace(char1,char2);
  word = word.replace(word.charAt(indexChar2),char1);

  return word;
}

/**
 * Taken from stackoverflow users Syntac, Eugen Sunic, and others.
 * https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
 * @param {*} string takes a string to permute
 */
function getPermutations(string){ 
  // IN DESPERATE NEED OF FIXING
  for (var i = 0; i <= string.length; i++) {
    var char = string[i];

    if (string.indexOf(char) != i){ // Cause we don't want any duplicates:
      continue;
    }
    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    for (var subPermutation of getPermutations(remainingString)){
      var word = char + subPermutation;
      
      // if word is in trimmedDict[]
      if(trimmedDict.filter(obj => obj.word === word).length > 0){  // referenced arrow notation
        console.log(word);
        permutations.push(char + subPermutation);
        //should be ordered in length and then alphabetically????
      }
    }
  }
  // wordsTotal = permutations.length;
  return permutations;
  } 

function printPermutations(){
  permutations.forEach((e) => {console.log(e)} );
}

function endGame(){
  console.log("Thank you for playing!");
  console.log("You correctly guessed " + wordsGuessed + " of " + wordsTotal + " words.");
  if(wordsGuessed == wordsTotal){
    console.log("Congratulations on guessing all possible word combinations!");
  }
  else{
    console.log("These were all the possible words:");
    printPermutations();
  }
}


/**
 * BEGIN MAIN CODE
 */
 trim(dictionary,rootWordOptions,dictMap);
 console.log(rootWordOptions);
 console.log(dictMap);
 
 
 let rootWordOptionsSize = rootWordOptions.length;
 var num = Math.floor(Math.random()*rootWordOptionsSize);
 alert("A 6-letter word has been chosen for you");
 chosenWord = rootWordOptions[num]; // pull a random base word
 console.log(chosenWord); // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 
 var chosenWordArr = chosenWord.split(""); // makes sure it will be treated as an array
 permutations = getPermutations(chosenWord); 
 var tmpScramble = scramble(chosenWord)
 console.log("Your letters are: " + tmpScramble);
 
 //  blank '- - -' map of 
 for(i=0;i<permutations.length-1;i++){
   var obj = new guessedUnguessedOBJ();
   var str = ("- ").repeat(permutations[i].length);

   obj.word = permutations[i];
   obj.unguessed = str;
   obj.state = str;
   guessUnguessed.push(obj);
 }

do{
  var guess = prompt("What is one word you can make from the scrambled letters?");

  if((guess != null) && (guess == '*')){ // asterisk (*) scrambles chosen word
    console.log(scramble(chosenWord));
  }
  else if((guess != null) && (guess.length < 3 || guess.length > 6)){
    alert(guess + " is either too short or too long!");
  }
  else if((guess != null) && (guessUnguessed.filter(obj => obj.word === guess).length > 0)){
    alert(guess + " has already been found");
  }
  else if(guess != null && (trimmedDict.filter(obj => obj.word === guess).length > 0)){
    alert('Congratulations! You guessed "' + guess + '" correctly!');
    wordsGuessed++;
    guessUnguessed.forEach( function(o) {  // after each successful guess, update the guessedUnguessed array
      if(o.word === guess){
        e.state = e.word 
      }
    });

    console.clear();
    console.log(tmpScramble);
    guessUnguessed.forEach( function(o) {  // print each
      console.log(e.state)
    });
    printPermutations();
  }
  else if((guess != null) && !(trimmedDict.filter(obj => obj.word === guess).length > 0)){
    alert(guess + " is not in the dictionary provided");
  }
  else if(guess === null){
    endGame();
    break;
  }
} while (wordsGuessed < wordsTotal); 
 /**
  * END MAIN CODE
  */