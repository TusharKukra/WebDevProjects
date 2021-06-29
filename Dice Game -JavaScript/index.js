// alert("Welcome, to Dice Game. Click 'OK' to continue");

var randomNumber = Math.random() * 6;
var randomNumber1 = Math.floor(randomNumber) + 1;

// or we can do : var randonNumber = Math.floor(Math.random() * 6) + 1;

// now generate random dice image, we do concatinatio

var randonImage = "dice" + randomNumber1 + ".png";  //dice1.png

// now change attribute of image src class in html
var imageSource = "images/" + randonImage;   // images/dice1.png

//now we have to select 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);  // we are changing the src attribute of the img query


// we need another random number for second dice
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


// now changing title (according to the winner)
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";   
}


function refresh(){
    location.reload();
}