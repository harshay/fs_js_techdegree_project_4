/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js   */




class Phrase { 

    constructor(phrase) {

        this.phrase = phrase;
    
    }

    addPhraseToDisplay() {

        //ul which will contain all list item letters
        let phraseDiv = document.getElementById("phrase"); 
        let phraseDivUl = phraseDiv.children[0];

        //pick up the selected random phrase
        //split by the number of letters and place each letter in a list item
        //push letter to a newly created list item
        //append list item to unordered list and set class name

        let phraseSplit = this.phrase.split(""); 

        let phraseSplitChars = phraseSplit.length;

        for(let i = 0; i < phraseSplitChars; i += 1) {
            
            let phraseCharItem = document.createElement("li"); 
            phraseCharItem.innerHTML = phraseSplit[i];
            phraseCharItem.className = "letter"; 
            phraseDivUl.appendChild(phraseCharItem);
        };
       

    }; 

    //check if letter selected by player matches the letter in the phrase (to be guessed)
    checkLetter(letter) {

        let keyboard = document.getElementsByClassName("key");
        let keyboardLength = keyboard.length;
        let letterMatch = 0;
        let matched;

            for(i = 0;i < keyboardLength; i += 1) {

                keyboard[i].addEventListener("click",(event) => {

                    let selectedLetter = event.target.value;
                    
                    for(j = 0;j < this.phraseSplitChars; j += 1) {
                        
                        if(this.phraseSplit[j] = selectedLetter) {

                            letterMatch += 1;

                        };

                    };
                    
                    
                });

            };

            if(letterMatch != 0) {

                matched = true;

            } else {

                matched = false;

            }

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