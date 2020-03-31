/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let startGameBtn = document.getElementById("btn__reset");

startGameBtn.addEventListener("click",() => {

    let keyboard = document.getElementsByClassName("key");
    let keyboardLength = keyboard.length;
    let keyboardParent = document.getElementById("qwerty");

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

            //note : event bubbling can also be used instead of attaching the event listner to all keys below 
            // it can also be attached to the div within which the keys are

            //keys with 'click' event listener
            keyboard[i].addEventListener("click",(event) => {

                hirl(event);
                
                
            });


        }; 
        
        
        
       //keys with 'keydown' event listener (keyboard button press)
       addEventListener("keyup",(event) => {

        hirl(event);

       });

});





