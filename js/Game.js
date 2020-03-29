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
        this.correct      = 0;

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


        selectedPhraseObj.checkLetter();
        
        


    }; 


    handleInteraction(button){ 

        this.activePhrase.checkLetter(button.innerHTML); 

        this.activePhrase.showMatchedLetter(button.innerHTML); 


    };
    

    checkForWin() {

        let gameWon; 

        if(this.correct ===  this.activePhrase.phraseSplit.length) {

            gameWon = true;

        }

        else {

            gameWon = false; 

        };

        return gameWon; 

    };

    removeLife(button){

        let triesElement = document.getElementsByClassName("tries");
        let triesParent  = document.getElementById("scoreboard").children; 

        console.log(triesParent);        

        if(this.activePhrase.checkLetter(button.innerHTML) === false) {

            
            this.missed += 1; 

            triesElement[0].remove();

            var imgListEntry = document.createElement('li');             
            var img = document.createElement('img'); 

            img.src = "images/lostHeart.png"; 
            
            imgListEntry.className = this.missed + "lost"
            imgListEntry.appendChild(imgListEntry);
            
            


        }
        else {

            this.correct += 1;

        };
      

    };

    gameOver(gameWon) {



    };

}; 
