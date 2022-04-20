function reportSystem(input) {

    let index = 0;
    let targetSum = Number(input[index]);
    index++;
    let price = input[index];
    index++;
    let action = 0;
    let cashPay = 0;
    let cashPayCount = 0;
    let cardPay = 0;
    let cardPayCount = 0;


    while (price !== "End") {
        let currPrice = Number(price);
        action++;
        if (action % 2 !== 0 && currPrice <= 100) {
            cashPayCount++;
            cardPayCount += 0;
            cashPay += currPrice
            cardPay += 0;
            console.log(`Product sold!`);
        } else if (action % 2 !== 0 && currPrice > 100) {
            cashPayCount += 0;
            cardPayCount += 0;
            cashPay += 0;
            cardPay += 0;
            console.log(`Error in transaction!`)
        }

        if (action % 2 === 0 && currPrice < 10) {
            cashPayCount += 0;
            cardPayCount += 0;
            cashPay += 0;
            cardPay += 0;
            console.log(`Error in transaction!`)
        } else if (action % 2 === 0 && currPrice >= 10) {
            cardPayCount++;
            cardPay += currPrice
            cashPay += 0;
            cashPayCount += 0;
            console.log(`Product sold!`)
        }

        let totalSum = cashPay + cardPay
        if (totalSum >= targetSum) {
            let averageCashPay = cashPay / cashPayCount
            let averageCardPay = cardPay / cardPayCount
            console.log(`Average CS: ${averageCashPay.toFixed(2)}`)
            console.log(`Average CC: ${averageCardPay.toFixed(2)}`)
            break;
        }
        price = input[index];
        index++;
    }

    if (price === "End") {

        console.log(`Failed to collect required money for charity.`)
    }

}
reportSystem([600, 86, 150, 98, 227, "End"])