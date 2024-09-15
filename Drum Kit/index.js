var tom = new Audio('../Drum Kit/sounds/tom-1.mp3');

for (i = 0; i<document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        tom.play();
    
    })
}


