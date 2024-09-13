var player1 = Math.floor(Math.random()*6  + 1)
var player2 = Math.floor(Math.random()*6 + 1)



if (player1 > player2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Win!";
}else if (player1 == player2){
    document.querySelector("h1").textContent = "🚩 Draw! 🚩";
}else{
    document.querySelector("h1").textContent = "Player 2 Win! 🚩";
}

function img_convertor(number, img_class) {
    switch (number) {
        case 1:
            document.querySelector(img_class).setAttribute("src", "./images/dice1.png")
            break;
        case 2:
            document.querySelector(img_class).setAttribute("src", "./images/dice2.png")
            break;
        case 3:
            document.querySelector(img_class).setAttribute("src", "./images/dice3.png")
            break;
        case 4:
            document.querySelector(img_class).setAttribute("src", "./images/dice4.png")
            break;
        case 5:
            document.querySelector(img_class).setAttribute("src", "./images/dice5.png")
            break;
        case 6:
            document.querySelector(img_class).setAttribute("src", "./images/dice6.png")
            break;
        default:
            break;
    }
}

img_convertor(player1, "img.img1")
img_convertor(player2, "img.img2")