// Set Interval and Set TimeOut Function 

// firstly we need to know about Arrow function : it is used to create functions
//function sum(a,b){
//    return a+b;
//}

// Or using Arrow fxn
//sum = (a,b) => {
//    return a+b
//}

// setTimeout will call function in given time interval (in millisecond).
myFuntion = () =>{
    console.log("Calling myFunction");
}

// Use setTimeout function
setTimeout(myFuntion,2000);


// OR
myFunction2 = () =>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>setTimeout event fired.</b>";
    console.log("Calling myFunction2");
}
setTimeout(myFunction2,3000);

// use of setInterval : it will do the job of setTimeout repeatedly
// setInterval(myFuntion,4000);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// how to stop that setInterval : we can create a variable or give a id to the setInterval and then we can call it using clearInterval(idName)

// use clearInterval(a) or clearTimeout(a) to cancel the setInterval or setTimeout
// eg :

a = setInterval(myFuntion,2000);
 // call this in console: clearInterval(a) or clearTimeout(a);
 
