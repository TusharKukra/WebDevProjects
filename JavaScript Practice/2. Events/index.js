function clickFunction(){
    console.log("Button was Clicked !!!");
}


// it will show that window is loaded or not (Another method in Event)
window.onload = function(){
    console.log("Document was loaded");
}

// we can add eventListener on the container also (by giving them ID)
firstContainer.addEventListener('click', function(){  // addEventListener we have 2 parameters : first is event (click), second is function.
    console.log("Clicked on Container 1 using EventListener");  // if you click on the container with given ID then this will print.
})

// mouse over event
secondContainer.addEventListener('mouseover', function(){  // addEventListener we have 2 parameters : first is event (click), second is function.
    console.log("Mouse on Container 2 using EventListener");  // if you click on the container with given ID then this will print.
})

// mouse out event
firstContainer.addEventListener('mouseout', function(){  // addEventListener we have 2 parameters : first is event (click), second is function.
    console.log("Mouse out event on Container 2 using EventListener");  // if you click on the container with given ID then this will print.
})

// mouse out event : when u press mouse button and then click out
secondContainer.addEventListener('mouseup', function(){  // addEventListener we have 2 parameters : first is event (click), second is function.
    console.log("Mouse up event on Container 2 using EventListener");  // if you click on the container with given ID then this will print.
})

// mouse down event : when u press mouse button and then hold it
secondContainer.addEventListener('mousedown', function(){  // addEventListener we have 2 parameters : first is event (click), second is function.
    console.log("Mouse down event on Container 2 using EventListener");  // if you click on the container with given ID then this will print.
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// If i want to change inner html of any container on clicking :
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[0].innerHTML = "<b>We have changed the html by Clicking.</b>";
    console.log("Clicked on Container");
})

// OR

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[0].innerHTML = prevHTML;
    console.log("Clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){  // addEventListener we have 2 parameters : first is event (click), second is function.
    document.querySelectorAll('.container')[0].innerHTML = "<b>We are currently pressing mouse button</b>";
    console.log("Mouse down event on Container 2 using EventListener");  // if you click on the container with given ID then this will print.
})
