function minNum(input){
    let index = 0;
    let num = input[index];
    index ++;
    let min = Number.MAX_SAFE_INTEGER

    while(num !== "Stop"){
        let numAsNum = Number(num)
        if (numAsNum < min){
            min = numAsNum;
        }
        num = input[index]
        index++
    }
console.log(min)

}
minNum(["100",
"99",
"80",
"70",
"Stop"])
