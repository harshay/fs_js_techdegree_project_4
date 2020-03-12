/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*
 const phrase = new phrase();
 const game   = new game();
 */

 /*
const phrase1 = new phrase('Life is like a box of chocolates'); 
console.log(`Phrase - phrase: ${phrase1.phrase}`); 
*/

const game1 = new game(); 
 game1.phrases.forEach((phrase, index) => {   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);  }); 
  