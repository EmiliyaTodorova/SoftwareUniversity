function gladiator(countLostFight, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let countHelmet =0;
    let countSword = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for(let i = 1; i <= countLostFight; i++){
        if(i % 2 === 0){
            countHelmet += 1;
        } 
        if (i % 3 === 0){
            countSword += 1;
        } 
        if( i % 6 === 0){
            shieldCount += 1;
        } 
        if (i % 12 === 0){
            armorCount += 1
        }
        
    }
let totalPrice = countHelmet * helmetPrice + countSword * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice
console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)

}
gladiator(7, 2, 3, 4, 5)