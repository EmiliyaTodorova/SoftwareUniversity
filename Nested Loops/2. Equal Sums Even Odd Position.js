function equalSumEvanOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = ""

    for (let i = start; i <= end; i++) {
        let numToString = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let index = 0; index < numToString.length; index++) {
            if (index % 2 === 0) {
                evenSum += Number(numToString[index])
            } else {
                oddSum += Number(numToString[index])
            }
        }
        if (oddSum === evenSum) {
            result += numToString + " "
        }

    }
    console.log(result)
}
equalSumEvanOddPosition(["100000",
    "100050"])