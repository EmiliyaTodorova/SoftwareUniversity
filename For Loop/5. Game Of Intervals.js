function interval(input){

    let index = 0;
    let n = Number(input[index]);
    index ++;
    let point = 0;
    let sumPoint = 0;
    let countNum1 = 0;
    let countNum2 = 0;
    let countNum3 = 0;
    let countNum4 = 0;
    let countNum5 = 0;
    let countNum6 = 0;

    for (let i = 0; i <= n; i++) {
        let num = Number(input[index]);
        index ++
        
        if (num >= 0 && num <= 9){
            point += 0.2 * num;
            countNum1 ++;
        } else if (num >= 10 && num <= 19){
            point += 0.3 * num;
            countNum2 ++;
        }else if (num >= 20 && num <= 29){
            point += 0.4 * num;
             countNum3 ++;
        }else if (num >= 30 && num <= 39){
            point += 50;
            countNum4 ++;
        } else if (num >= 40 && num <= 50){
            point += 100;
            countNum5 ++;
        } else if (num < 0 || num > 50) {
                point = point / 2
                countNum6 ++;
        }
        
    }
    console.log(point.toFixed(2))
    let prCount1 = countNum1 / n * 100
    let prCount2 = countNum2 / n * 100
    let prCount3 = countNum3 / n * 100
    let prCount4 = countNum4 / n * 100
    let prCount5 = countNum5 / n * 100
    let prCount6 = countNum6 / n * 100

    console.log(`From 0 to 9: ${prCount1.toFixed(2)}%`)
    console.log(`From 10 to 19: ${prCount2.toFixed(2)}%`)
    console.log(`From 20 to 29: ${prCount3.toFixed(2)}%`)
    console.log(`From 30 to 39: ${prCount4.toFixed(2)}%`)
    console.log(`From 40 to 50: ${prCount5.toFixed(2)}%`)
    console.log(`Invalid numbers: ${prCount6.toFixed(2)}%`)


    

}
interval([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])