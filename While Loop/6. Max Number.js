function maxNum(input) {
    let index = 0
    
    let num2 = Number.MIN_SAFE_INTEGER
    let num = input[index];
    index++

    while (num !== "Stop") {
        let numAsNum = Number(num)
        if (numAsNum > num2) {
            num2 = numAsNum
          }
       
        num = input[index]
        index++;

    }
    console.log(num2)

    
}
maxNum(["-10",
"20",
"-30",
"Stop"])
