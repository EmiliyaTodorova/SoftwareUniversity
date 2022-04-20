function bills(input) {
    let index = 0;
    let months = Number(input[index]);
    index++;
    let costElectrycity = 0;

    for (let i = 0; i < months; i++) {
        let electrycity = Number(input[index]);
        index++;
        
        costElectrycity += electrycity;

    }
    let costWater = months * 20;
    let costInternet = months * 15;
    let sum = costElectrycity + costInternet + costWater
    let costOther = sum * 0.2 + sum
    let totalSum = (sum + costOther) / months
    
    
       
   console.log(`Electricity: ${(costElectrycity).toFixed(2)} lv`)
   console.log(`Water: ${costWater.toFixed(2)} lv`)
   console.log(`Internet: ${costInternet.toFixed(2)} lv`)
   console.log(`Other: ${costOther.toFixed(2)} lv`)
   console.log(`Average: ${totalSum.toFixed(2)} lv`)


}
bills([5, 68.63, 89.25, 132.53, 93.53, 63.22])