function trains(train){

    let passangersInWagons = train.shift().split(" ").map(Number)
    let maxCapacity = Number(train.shift())

    for(let command of train){
        let currantCommand = command.split(" ")
        if(currantCommand[0] === "Add"){
            passangersInWagons.push(Number(currantCommand[1]))
        } else {
            for(let i = 0; i < passangersInWagons.length; i++){
                if(passangersInWagons[i] + Number(currantCommand[0]) <= maxCapacity){
                    passangersInWagons[i] += Number(currantCommand[0])
                    break;
                }
            }
        }
    }
    console.log(passangersInWagons.join(" "))
}
trains(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])