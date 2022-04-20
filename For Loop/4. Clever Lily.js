function cleverLili(input){
    let year = Number(input[0]);
    let price = Number(input[1]);
    let toysPrice = Number(input[2]);
    let toyCounter = 0;
    let saveMoney = 0;    
    let money = 10;

    for(let i = 1; i <= year; i++){
         if (i % 2 !== 0){
          toyCounter ++ 
        } else if (i % 2 === 0){
            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
        
    
    }
    let totalMoney = toyCounter * toysPrice + saveMoney
    let diff = Math.abs(totalMoney - price)
    if (totalMoney >= price){
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)   
     }
        


}
cleverLili(["10",
"170.00",
"6"])
