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

        let all_phrases = [{phrase: "deprive"},{phrase: "multiply"},{phrase:'target'},{phrase:'solve'},{phrase:'await'}];

        return all_phrases;

    }; 

    getRandomPhrase() {

        
        let randomNumber = Math.floor(Math.random()*5);  

        return this.phrases[randomNumber];


    };
    
}; 
