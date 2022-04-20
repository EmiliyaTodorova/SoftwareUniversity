function vacantion(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++
    let money = Number(input[index]);
    index++;
    let type = input[index];
    index++;
    let tempSum = Number(input[index]);
    index++
    let countSpend = 0
    let countDays = 0;



    while (money < needMoney) {
        countDays++
        if (type === "save") {
            countSpend = 0;
            money += tempSum;
            
        } else {
            countSpend++;
            money -= tempSum
            if (money < 0) {
                money = 0;
            }
        } 
        if (countSpend === 5){
            console.log(`You can't save the money.`)
            console.log(`${countDays}`)
            break;
        }
        type = input[index];
        index++;
        tempSum = Number(input[index]);
        index++;

    }
    
    if (money >= needMoney){
        console.log(`You saved the money for ${countDays} days.`)
    }

}
vacantion(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
