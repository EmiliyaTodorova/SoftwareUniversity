function arrayManpulationNew(input){

    let array = input.shift().split(" ").map(Number)
    
    for(let command of input){
        let currantCommand = command.split(" ")
        if(currantCommand[0] === "Add"){
            array.push(Number(currantCommand[1]))
        } else if(currantCommand[0] === "Remove"){
            let numToRemove = Number(currantCommand[1])
           array = array.filter((el) => el !== numToRemove)
        } else if(currantCommand[0] === "RemoveAt"){
            let indexToRemove = Number(currantCommand[1])
            array.splice(indexToRemove,1)
        } else if (currantCommand[0] === "Insert"){
            let numToInsert = Number(currantCommand[1])
            let indexToInsert = Number(currantCommand[2])
            array.splice(indexToInsert, 0, numToInsert)
        }
      
    }
    console.log(array.join(" "))


}
arrayManpulationNew(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])