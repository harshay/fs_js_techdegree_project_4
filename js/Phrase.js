/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js   */




class Phrase { 

    constructor(phrase) {

        this.phrase = phrase;
        this.phraseSplit = this.phraseArray();
    
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
            phraseCharItem.className = "letter"; 
            phraseDivUl.appendChild(phraseCharItem);
        };
       

    }; 

    //check if letter selected by player matches the letter in the phrase (to be guessed)
    checkLetter(letter) {

        let letterMatch = 0;
        let matched;
                
        for(let j = 0; j < this.phraseSplit.length ; j += 1) {                    
            
            if(this.phraseSplit[j] === letter) {

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