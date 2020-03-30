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

//.chosen
//.wrong


//always use this when calling a method or using a property within the same class (unless var is local to the mehod)
class Game { 


    //creates properties that can be accessed by new objects of this class or methods in this class
    constructor() {

        this.missed       = 0;
        this.phrases      = this.createPhrases();
        this.activePhrase = null;
        this.correct      = 0;

    }

     //creates an array of phrase objects 
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

        //returs a random object
        let selectedPhraseObj =  this.getRandomPhrase();
        
        //runs the aptd method 
        selectedPhraseObj.addPhraseToDisplay(); 
        
        this.activePhrase = selectedPhraseObj;


        selectedPhraseObj.checkLetter();
        
        


    }; 


    handleInteraction(button){ 

        //new phrase object gives access to all its methods
        //runs the check letter object part of the phrase class
        //button parameter within the handle interaction method is being passed a value by calling it in app.js 
        //the parameter value passed can now be picked up by the methods run in the phrase class
        this.activePhrase.checkLetter(button.innerHTML); 

        this.activePhrase.showMatchedLetter(button.innerHTML); 


    };
    

    checkForWin() {

        let gameWon; 


        //remove duplicates from this.activePhrase.phraseSplit.length
        //indexof searches the array for the specific item and returns its index position
        //all array items passed one by one in the filter/index of combo
        //when === index specified the matching array item will only pass once because when repeated the index wont match
        let prePhraseDeDup = this.activePhrase.phraseSplit;

        let PhraseDeDuped = prePhraseDeDup.filter(function (phr, index) {
        
            return prePhraseDeDup.indexOf(phr) === index;
        
        
        });


        if(this.correct ===  PhraseDeDuped.length) {

            gameWon = true;

        }

        else {

            gameWon = false; 

        };

        return gameWon; 

    };

    removeLife(button){

        let triesElement = document.getElementsByClassName("tries");
        let triesParent  = document.getElementById("scoreboard");            

        if(this.activePhrase.checkLetter(button.innerHTML) === false) {

            
            this.missed += 1; 

            triesElement[0].remove();

            var imgListEntry = document.createElement('li');             
            var img = document.createElement('img'); 

            img.src = "images/lostHeart.png";             

            imgListEntry.className = this.missed + "lost";

            triesParent.appendChild(imgListEntry);

            imgListEntry.appendChild(img);

            button.className = "wrong";

        } else {

            this.correct += 1;

            button.disabled = true;

            button.className = "chosen";

            console.log(this.correct);

        };

        if(this.checkForWin() === true) { 

            this.gameOver(); 

        };
        
        if(this.missed === 5) { 
            
            let mainTitle = document.getElementById("game-over-message");
            let mainCover = document.getElementById("overlay");
            mainCover.style.display = "";
            mainCover.classList.replace("start","lose");

            mainTitle.innerHTML = "Sorry you lost, better luck next time!";

        };      

    };

    gameOver(gameWon) {

        let mainTitle = document.getElementById("game-over-message");
        let mainCover = document.getElementById("overlay");
        
        mainCover.style.display = "";
        
        mainCover.classList.replace("start","win");

        
        mainTitle.innerHTML = "You Won, Great Job!";

    };

}; 
