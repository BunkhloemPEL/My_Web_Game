const slot_symbol = {
    0 : "Cherry",
    1 : "1 Bar",
    2 : "2 Bar",
    3 : "3 Bar",
    4 : "Diamon"
}

function spin() {
    let result = []
    for (let i = 0; i <3; i++){
        let rollet = Math.floor(Math.random()*5)
        result.push(slot_symbol[rollet])
    }

    return result
}

function prize(result) {
    if (JSON.stringify(result) == JSON.stringify(["Diamon","Diamon","Diamon"])){
        return 200
    }
    if (JSON.stringify(result) == JSON.stringify(["3 Bar","3 Bar","3 Bar"])){
        return 40
    }
    if (JSON.stringify(result) == JSON.stringify(["2 Bar","2 Bar","2 Bar"])){
        return 25
    }
    if (JSON.stringify(result) == JSON.stringify(["1 Bar","1 Bar","1 Bar"])){
        return 10
    }
    if (JSON.stringify(result) == JSON.stringify(["Cherry","Cherry","Cherry"])){
        return 10
    }
    if (result.includes("Cherry")){
        if(result.filter(item => item === "Cherry").length == 2){
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
console.log(result)
console.log(prize(result))