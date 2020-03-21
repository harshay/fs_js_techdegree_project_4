/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/*
//phrases

deprive
multiply
target
solve
await

*/

class Game { 

    constructor() {

        this.missed       = 0;
        this.phrases      = this.createPhrases();
        this.activePhrase = null;

    }

    createPhrases() {

        let all_phrases = 
        [
        new Phrase("deprive"),
        new Phrase("multiply"),
        new Phrase("target"),
        new Phrase("solve"),
        new Phrase("await")    
        ];

        return all_phrases;

    }; 

    getRandomPhrase() {

        
        let randomNumber = Math.floor(Math.random()*5);  

        return this.phrases[randomNumber];


    };

    startGame() {

        let mainCover = document.getElementById("overlay");
        mainCover.style.display = "none";

        let selectedPhraseObj =  this.getRandomPhrase();
        
        selectedPhraseObj.addPhraseToDisplay(); 
        
        this.activePhrase = selectedPhraseObj;


        console.log(selectedPhraseObj.checkLetter());


    }; 


    handleInteraction(){ 

        


    };
    

    checkForWin() {



    };

    removeLife(){



    };

    gameOver(gameWon) {



    };

}; 
