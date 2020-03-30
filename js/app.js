/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

let startGameBtn = document.getElementById("btn__reset");
let keyboard = document.getElementsByClassName("key");
let keyboardLength = keyboard.length;

//problems to be fixed :
//game doesnt reset
//letter  guessed with repeating charaters breaks the check for win method
//selecting the correct character already guessed again increments the correct count


startGameBtn.addEventListener("click",() => {

    // creates a new game object, gives access to all its properties and methods
    game = new Game(); 

    game.startGame();    

    //funtion will run two methods within the newly created game object
    let hirl = (event) => {

         //runs the handlintr method pass the event.target value as an input
         game.handleInteraction(event.target);
         //runs the removeLife method pass the event.target value as an input
         game.removeLife(event.target);

    };
     
        //move to app.js
        for(let i = 0; i < keyboardLength; i += 1) {


            //keys with 'click' event listener
            keyboard[i].addEventListener("click",(event) => {

                hirl(event);
                
                
            });

            //keys with 'keydown' event listener (keyboard button press)
            keyboard[i].addEventListener("keyup",(event) => {

                hirl(event);
                
                
            });

        };        

});





