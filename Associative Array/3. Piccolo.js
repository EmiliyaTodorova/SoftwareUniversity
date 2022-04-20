function piccolo(input){

    let map = new Map
    for(let command of input){
        command = command.split(", ")
        let dirrection = command[0];
        let carNumber = command[1]
        if(dirrection === "IN"){
            map.set(carNumber, 1)
        } else {
            map.set(carNumber, 0)
        }
    }
    let result = []
    let count = 0;
    let newArr = Array.from(map.entries());
    for(let [car, quantity] of newArr){
        if(quantity > 0){
            count++
            result.push(car)
        }
    }

    
    result = result.sort((a, b) => a.localeCompare(b))
   if(count === 0){
       console.log("Parking Lot is Empty")
   } else {
       console.log(result.join("\n"))
   }
    
}
  
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])