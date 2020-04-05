/* Treehouse FSJS Techdegree
 * Harshay
 * Project 4 - OOP Game App
 * app.js */

let game;
let startGameBtn = document.getElementById("btn__reset");
let keyboardParent = document.getElementById("qwerty");
let keyboard = document.getElementsByClassName("key");
let keyboardLength = keyboard.length;  

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//function below added for the exceeds expetation grade 
//function will change the backgroud colour when a key is clicked/pressed
let backgroudColourGame = () => { 

    let randomNumber = Math.floor(Math.random()*4);  
    
    let backgroundArray = ["tan", "white","grey","pink"]; 

    document.body.style.backgroundColor = backgroundArray[randomNumber];

};

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
    game.handleInteraction(event);
    //runs the removeLife method pass the event.target value as an input
    game.removeLife(event);

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

       //note : event bubbling can also be used instead of attaching the event listner to all keys below 
       // it can also be attached to the div within which the keys are

       //keys with 'click' event listener
       keyboardParent.addEventListener("click",(event) => {
        
            if(event.target.tagName === "BUTTON"){

                hirl(event.target);

            };           

             //exceeds expectation
             backgroudColourGame();
           
       });

//////////////////////////////////////////////////////////////////////////////////////////////////////////
       //keys with 'keyboard press' event listener
    document.addEventListener("keydown",(event) => {

        let selectedLetter = event.key;
        let allKeys = document.getElementsByClassName("key");
        let selKeyElem;

        //pick up the selected key element depending on the key pressed
        for(let i = 0; i < allKeys.length; i += 1){

            if(allKeys[i].innerHTML === selectedLetter) {

                selKeyElem = allKeys[i]; 

            };

        };
        
        hirl(selKeyElem);
        
        //exceeds expectation
        backgroudColourGame();

   });

//////////////////////////////////////////////////////////////////////////////////////////////////////////




