function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let madjicNum = Number(input[2]);
    let countCombination = 0;
    let isFaund = false

    for (let i = start; i <= end; i++) {
        for (let e = start; e <= end; e++) {
            countCombination++;
            if (i + e === madjicNum) {

                console.log(`Combination N:${countCombination} (${i} + ${e} = ${madjicNum})`)
                isFaund = true;
            }
        }
            if (isFaund === true) {
            break;
        }
    }
    if (isFaund === false) {
        console.log(`${countCombination} combinations - neither equals ${madjicNum}`)
    }
}



    sumOfTwoNumbers(["1",
        "10",
        "5"])