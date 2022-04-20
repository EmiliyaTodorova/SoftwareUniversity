function account(input) {
    let index = 0;
    let money = input[index]
  
    let sum = 0
    while (money !== "NoMoreMoney") {
        let money = Number(input[index])
        if (money < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        sum += money
        console.log(`Increase: ${money.toFixed(2)}`)
       
       money = input[index]
       index++;
        
       
        
        }

        console.log(`Total: ${sum.toFixed(2)}`)


    }



account(["120",
"45.55",
"-150"])

