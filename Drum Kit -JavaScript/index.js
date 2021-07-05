// alert("hello");

// we need eventListener for calling functions using Buttons



// this function will detect button press (not KEYBOARD Press):-
var drumNumber = document.querySelectorAll(".drum").length;

for(var i = 0 ; i<drumNumber ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    

    // alert("Button got clicked");
    // now we have to play audio
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    // now we play audio by pressing keyboard button

    // when we use console.log(this); then we can access which button are we pressing
    
    // console.log(this.style.color = "white");  //(wer are changing the color of the keys by clicking them)


    /*
    constructor function example:
    
    funtion BellBoy (name, age, hasWorkPermit, language){
        this.name = name;
        this.age = age;
        this.hasWorkPermit = hasWorkPermit;
        this.language = language;
    }

    // now we can create / initialize Object :
    var BellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
    */ 
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    // now to play sound using Key: we use switch statements
    
    // so firstly we need to go to the inner html of each buttons
    var buttonInnerHTML = this.innerHTML;

    /* switch (buttonInnerHTML) {
        case "w":
            // play 1st drum
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            // play 2st drum
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        
        case "s":
            // play 1st drum
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            // play 1st drum
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            // play 1st drum
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;     

                
        case "k":
            // play 1st drum
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
                
                
        case "l":
            // play 1st drum
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: 
            console.log(buttonInnerHTML);

    }*/
    makeSound(buttonInnerHTML);

    // button animation function
    buttonAnimantion(buttonInnerHTML);


});


}

// learn about keypress eventListener (DETECT KEYBOARD PRESS)
document.addEventListener("keypress", function(event){

    console.log(event); // it will show which is pressed (in the console)

    // call our required function : 
    makeSound(event.key);

    // to add animation when we press a key
    buttonAnimantion(event.key);

});


// Our required function

function makeSound(key){
    // copy paste our swtich statements
    switch (key) {
        case "w":
            // play 1st drum
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            // play 2st drum
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        
        case "s":
            // play 1st drum
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            // play 1st drum
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            // play 1st drum
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;     

                
        case "k":
            // play 1st drum
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
                
                
        case "l":
            // play 1st drum
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: 
            console.log(buttonInnerHTML);

    }

}

// animation function
function buttonAnimantion(currentKey){

    //select the buttone class using QuerySelector
    var activeButton = document.querySelector("." + currentKey);

    // add pressed class of CSS to active button
    activeButton.classList.add("pressed");

    // now to take back to the original (back to effect)
    // we will add setTimeout method;
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
