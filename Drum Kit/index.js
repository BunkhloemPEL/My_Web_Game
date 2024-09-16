

for (i = 0; i<document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // this.style.color = "white";
        switch (this.innerHTML) {
            case "w":
                var tom1 = new Audio('../Drum Kit/sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio('../Drum Kit/sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('../Drum Kit/sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('../Drum Kit/sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var snare = new Audio('../Drum Kit/sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var crash = new Audio('../Drum Kit/sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kick = new Audio('../Drum Kit/sounds/kick-bass.mp3');
                kick.play();
                break;
        
            default:
                break;
        }
    })
}


// var w = new Audio('../Drum Kit/sounds/tom-1.mp3');
// var a = new Audio("./sounds/tom-2.mp3")