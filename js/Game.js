/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


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
        
        //assign to the property within this class 
        //this means it can be used in other methods
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

    //
    removeLife(button){

        let triesElement = document.getElementsByClassName("tries");

        if(this.activePhrase.checkLetter(button.innerHTML) === false) {
            

            this.missed += 1; 

            let heartTrack = (this.missed) - 1;

            triesElement[heartTrack].children[0].src = "images/lostHeart.png";

            button.className = "wrong";
        
            button.disabled = true;

        } else {

            this.correct += 1;

            button.disabled = true;

            button.className = "chosen";

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

            //reset game
            this.resetActions() 

        };      

    };

    //method will display an overlay when they game is won or lost
    gameOver(gameWon) {

        let mainTitle = document.getElementById("game-over-message");
        let mainCover = document.getElementById("overlay");
        
        //unhide the main overlay when game completed
        mainCover.style.display = "";
        
        mainCover.classList.replace("start","win");

        
        mainTitle.innerHTML = "You Won, Great Job!";

        //reset game
        this.resetActions() 

    };


    // trigger the method below when the game ends to reset it to its original state
    resetActions(button) {

        //reset count of missed and correct values
        this.missed = 0;
        this.correct = 0;

        //elements.classList.contains(wrong)  ,  elements.classList.contains(chosen) then remove
        let allKeys = document.querySelectorAll("button"); 

        for(let i = 0; i < allKeys.length; i += 1) {
            
            allKeys[i].className = "key";

            //enable all keys when the game restarts
            allKeys[i].disabled = false;
          
        };
        /////////////////////////////////////////////////////////////////
        //change image source for all hearts back to original                
        let hearts = document.getElementsByClassName("tries");    
              
        
        for(let i = 0; i < hearts.length; i += 1) {
            
            hearts[i].children[0].src = "images/liveHeart.png";
          
        };        

        //////////////////////////////////////////////////////////////////

        //remove phrase character list elements from display (they will be recreated when the game starts again)
        let phraseDiv = document.getElementById("phrase"); 
        let phraseDivUl = phraseDiv.children[0];


        while (phraseDivUl.firstChild) {
            phraseDivUl.removeChild(phraseDivUl.firstChild);
        }


    };

}; 
