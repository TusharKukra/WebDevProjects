function leapYear(year){

    // first check for 4
    if(year%4===0){

        // then check for 100 (if yes then check for 400 if not then Its a leap year)
        if(year%100 === 0){

            // if yes then check for 400
            if(year%400 === 0){
                alert("Leap Year");
            }
            else{
                alert("Not a Leap Year");
            }
        }
        else{
            alert("Leap Year");
        }
    }

    else{
        alert("Not a Leap Year");
    }
}
