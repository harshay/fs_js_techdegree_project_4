/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let startGameBtn = document.getElementById("btn__reset");
let keyboardParent = document.getElementById("qwerty");
let keyboard = document.getElementsByClassName("key");
let keyboardLength = keyboard.length;  

//////////////////////////////////////////////////////////////////////////////////////////////////////////
startGameBtn.addEventListener("click",() => {


    // creates a new game object, gives access to all its properties and methods
    game = new Game(); 

    game.startGame();       


});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
 //funtion will run two methods within the newly created game object
 let hirl = (event) => {

    //runs the handlintr method pass the event.target value as an input
    game.handleInteraction(event.target);
    //runs the removeLife method pass the event.target value as an input
    game.removeLife(event.target);

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

       //note : event bubbling can also be used instead of attaching the event listner to all keys below 
       // it can also be attached to the div within which the keys are

       //keys with 'click' event listener
       keyboardParent.addEventListener("click",(event) => {


            if(event.target.tagName === "BUTTON"){

                hirl(event);

            };           
           
       });

       

//////////////////////////////////////////////////////////////////////////////////////////////////////////
       //keys with 'keyboard press' event listener
       keyboardParent.addEventListener("keydown",(event) => {


        if(event.target.tagName === "BUTTON"){

            hirl(event);

        };           
       
   });


//////////////////////////////////////////////////////////////////////////////////////////////////////////