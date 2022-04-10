//Set iniital position
var x = 40;

function puppy() {

    setInterval(runPuppy, 50);
    // setInterval(runPuppy, 30); //call the function with no ()
    // console.log(speed);
}

function runPuppy() {

    var speed = setSpeed();
    var puppy = document.getElementById('puppy');
    var puppyposition = window.innerWidth - 97 - x; //size of gif


    if (puppyposition > 10) {

        puppy.style.left = x + "px";
        x = x + speed;
        // console.log(puppyposition);
    } else {

        x = 10;
    }

}

function setSpeed() {
    var select = document.getElementById('speed');
    var value = select.options[select.selectedIndex].value;
    // console.log(value)

    if (value === "slow") { 
        speed = 2;
    } else if (value === "moderate") {
        speed = 4;
    } else { 
        speed = 8;
    }
    return speed;
}

