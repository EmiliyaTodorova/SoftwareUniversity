function backToPast(input){
let money = Number(input[0]);
let yearsLeave = Number(input[1])
let yearsGo = 1800;
let IvanOld = 18;
let spend = 0;
totalSpend = 0;

for(let i = 1800; i <= yearsLeave; i++){
if (i % 2 === 0){
    money -= 12000
    IvanOld++
       
} else if (i % 2 !== 0){
    money -= 12000 + 50 * IvanOld
    IvanOld++
      
   
}
}
let diff = Math.abs(0 - money);
if (money >= 0){
    console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
} else {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
}


}
backToPast([100000.15, 
    1808])