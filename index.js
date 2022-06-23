//Detecting the mouse click

var NumberOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

// Detecting the keyboard click
document.addEventListener("keypress", function (Event) {
    makeSound(Event.key);
    buttonAnimation(Event.key);

});

// Function for checking the cases
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}


// Function for doing the animation
function buttonAnimation(currentKey){
var ActiveButton = document.querySelector("." + currentKey);
ActiveButton.classList.add("pressed");
setTimeout(function(){
    ActiveButton.classList.remove("pressed");
},100);
}