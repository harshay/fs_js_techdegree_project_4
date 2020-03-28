/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js   */




class Phrase { 

    constructor(phrase) {

        this.phrase = phrase;
        this.phraseSplit = this.phraseArray();
        this.selPhraseChar = null;
    
    };


    phraseArray() {

        let phraseSplit = this.phrase.split(""); 

        return phraseSplit;

    };

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

        let letterMatch = 0;
        let matched;
        
                
        for(let j = 0; j < this.phraseSplit.length ; j += 1) {                    
            
            if(this.phraseSplit[j] === letter) {

                this.selPhraseChar = this.phraseSplit[j];

                letterMatch += 1;

            };

        };
        
        if(letterMatch !== 0) {

            matched = true;

        } else {

            matched = false;

        };
        
        
        return matched;

    }; 

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


/*



 for(let i = 0; i < phraseSplitChars; i += 1) {
            
                if (selectedLetter.textContent = this.phraseSplit[i]) {

                    letterMatch =  true;
                }
                else { 

                    letterMatch =  false;
                };

            };    

*/