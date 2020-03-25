/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*
const game = new Game(); 
const randomPhrase = game.getRandomPhrase(); 
const phrase = new Phrase(randomPhrase.phrase); 
phrase.addPhraseToDisplay(); 
 */

/*
const game = new Game(); 
game.startGame(); 
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
*/

let game;

let startGameBtn = document.getElementById("btn__reset");
let keyboard = document.getElementsByClassName("key");
let keyboardLength = keyboard.length;
let letterMatch = 0;
let matched;




startGameBtn.addEventListener("click",() => {

    game = new Game(); 

    game.startGame();    
    
        //move to app.js
        for(let i = 0; i < keyboardLength; i += 1) {


            keyboard[i].addEventListener("click",(event) => {

                let selectedLetter = event.target.innerHTML;
                
                
            });

        };
        

});











/*********** ignore code below its for reference purposes only */


    /*
        //move to app.js
        for(let i = 0; i < keyboardLength; i += 1) {


            keyboard[i].addEventListener("click",(event) => {

                let selectedLetter = event.target.innerHTML;
                letterMatch = 0;
                
                for(let j = 0; j < phraseArrlength ; j += 1) {                    
                    
                    if(phraseArr[j] === selectedLetter) {

                        letterMatch += 1;

                    };

                };
                
                if(letterMatch !== 0) {

                    matched = true;

                } else {

                    matched = false;

                };
                
                
                
                
            });

        };
        */
    
     







