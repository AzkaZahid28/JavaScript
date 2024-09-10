// if example code
function num(){
    let Number = document.getElementById("n").value;
    if( Number % 2 == 0 )
        document.getElementById("ch").innerHTML=(` The Number ${Number} is an Even  Number`); 
}
// if-else example code
function year(){
    let Year = document.getElementById("y").value;
    if( Year % 4 == 0 )
        document.getElementById("change").innerHTML=(` The Year ${Year} is a Leap Year`); 
    else
    document.getElementById("change").innerHTML=(` The Year ${Year} is not a Leap Year`);
}