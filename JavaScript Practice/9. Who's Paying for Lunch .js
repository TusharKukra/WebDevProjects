// Who's Buying Lunch? Code


// given a array : u have to print the name of the person that will pay for the lunch today (using Random generation)

var names = ["A", "B", "C", "D", "E"];

function whosPaying(names){

    // multiply according to the length of input : 
    var numberOfPeople = names.length;
    var randonGen = Math.floor(Math.random() * numberOfPeople);

    var randomPerson = names[randonGen];

    return randomPerson + " is going to buy lunch today !!";

}
