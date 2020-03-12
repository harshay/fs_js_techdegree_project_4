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

class game { 

    constructor() {

        this.missed       = 0;
        this.phrases      = createPhrases();
        this.activePhrase = null;

    }

    createPhrases() {

        all_phrases = ['deprive','multiply','target','solve','await'];

        return all_phrases;

    }; 
    
}; 
