function logistic(input){
    let index = 0;
    let count = Number(input[index])
    index++
    let totalTone = 0;
    let price = 0;
    let totalPrice = 0
    let procentMicrobus = 0;
    let prTruck = 0;
    let prTrain = 0;

    for (let i = 1; i <= count; i++){
        let tone = Number(input[i])
        index++
        totalTone += tone
        if(tone <= 3){
            price = tone * 200
            totalPrice += price
            procentMicrobus += tone            

        } else if (tone > 3 && tone <= 11){
            price = tone * 175
            totalPrice += price
            prTruck += tone
        } else {
            price = tone * 120
            totalPrice += price
            prTrain += tone
        }

   
    }
    
    console.log((totalPrice / totalTone).toFixed(2))
    console.log((procentMicrobus / totalTone * 100).toFixed(2) + "%")

    console.log((prTruck / totalTone * 100).toFixed(2) + "%")
   console.log((prTrain / totalTone * 100).toFixed(2) + "%")
    
    
    

}
logistic([4, 1, 5, 16, 3])

