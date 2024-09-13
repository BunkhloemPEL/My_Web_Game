const slot_symbol = {
    0 : "Cherry",
    1 : "1 Bar",
    2 : "2 Bar",
    3 : "3 Bar",
    4 : "Diamon"
}

var coin = 300

function spin() {
    let result = []
    // for (let i = 0; i <3; i++){
    //     let rollet = Math.floor(Math.random()*5)
    //     result.push(slot_symbol[rollet])
    // }

    for (let i = 0; i <3; i++){
        let rollet = Math.floor(Math.random()*5)
        result.push(rollet)
    }
    
    return result
}

function reel_image(reel_number, reel_id) {
    switch (reel_number) {
        case 0:
            document.querySelector(reel_id).setAttribute("src", "./assets/cherry.jpg")
            break;
        case 1:
            document.querySelector(reel_id).setAttribute("src", "./assets/bar1.jpg")
            break;
        case 2:
            document.querySelector(reel_id).setAttribute("src", "./assets/bar2.jpg")
            break;
        case 3:
            document.querySelector(reel_id).setAttribute("src", "./assets/bar3.jpg")
            break;
        case 4:
            document.querySelector(reel_id).setAttribute("src", "./assets/diamon.jpg")
            break;
    
        default:
            break;
    }
}



function prize(result) {
    if (result == [4,4,4]){
        return 200
    }
    if (result == [3,3,3]){
        return 40
    }
    if (result == [2,2,2]){
        return 25
    }
    if (result == [1,1,1]){
        return 10
    }
    if (result.includes(0)){
        if(result.filter(item => item === 0).length == 3){
            return 5
        }else if (result.filter(item => item === 0).length == 2){
            return 5
        }else{
            return 2
        }
    }
    else{
        return 0
    }
}


result = spin()
reel_1 = reel_image(result[0],"#reel1 img")
reel_2 = reel_image(result[1],"#reel2 img")
reel_2 = reel_image(result[2],"#reel3 img")
prize_ = prize(result)
//coin += prize_

document.querySelector(".header h1").textContent = `Score : ${prize_}`
// console.log(result)
// console.log(prize(result))