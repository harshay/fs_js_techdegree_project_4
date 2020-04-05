/* Treehouse FSJS Techdegree
 * Harshay
 * Project 4 - OOP Game App
 * Phrase.js   */

class Phrase { 

    constructor(phrase) {

        this.phrase = phrase;
        this.phraseSplit = this.phraseArray();
        this.selPhraseChar = null;
    
    };

    //method will split the the phrase into an array of characters
    phraseArray() {

        let phraseSplit = this.phrase.split(""); 

        return phraseSplit;

    };

    //method will add a phrase to the newly started game 
    addPhraseToDisplay() {

        //ul which will contain all list item letters
        let phraseDiv = document.getElementById("phrase"); 
        let phraseDivUl = phraseDiv.children[0];

        //pick up the selected random phrase
        //split by the number of letters and place each letter in a list item
        //push letter to a newly created list item
        //append list item to unordered list and set class name        
        let phraseSplitChars = this.phraseSplit.length;

        for(let i = 0; i < phraseSplitChars; i += 1) {
            
            let phraseCharItem = document.createElement("li"); 
            phraseCharItem.innerHTML = this.phraseSplit[i];
            phraseCharItem.classList.add("letter","hide",this.phraseSplit[i]); 
            phraseDivUl.appendChild(phraseCharItem);
        };
       

    }; 

    //check if letter selected by player matches the letter in the phrase (to be guessed)
    checkLetter(letter) {

        return this.phrase.includes(letter);

    }; 

    //method will reveal the selected phrase letter on the screen if the selected letter matches a char in the phrase
    showMatchedLetter(letter) {

        //get all letters in the phrase class 
        let phraseElements = document.getElementsByClassName("letter");
        let phraseElementsLen = phraseElements.length; 


        for(let i = 0; i < phraseElementsLen; i += 1) {

            if(phraseElements[i].innerHTML === letter) { 

                phraseElements[i].classList.replace("hide","show")

            };

        };

    }; 
    


}; 

