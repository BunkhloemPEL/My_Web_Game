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

console.log(spin())