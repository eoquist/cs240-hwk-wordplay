/**
 * use javascript functions, arrays, and objects

remember to branch often

figure out how to scramble
- best way to cycle through permutations
- some array or table/hash of all possible permutations
- overwrite with permutations that only exist in given dictionary page

Given root word, you are then to compute all the valid English words using a subset of its letters. 
A root word’s letter cannot be used more than once, unless it appears more than once in the root word.

Scramble the root word and output it to the console so the player knows what letters they have to work with. 
Then display to the console the current list of guessed/unguessed words to the user, and get their inputs. 
Repeat until all words have been guessed, or if the user presses cancel. For the words that have not been 
guessed, hide them using a dashes (one dash per letter separaated by space, like for Hangman). 
Print this output to the console.

To prompt the user for an input, use:
let input = prompt(someString);

To print and display a dialog window, use:
alert(someOtherString);

To print something to the console window, use:
console.log(someOtherString);

You should clear the console after each guess.
console.clear();


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