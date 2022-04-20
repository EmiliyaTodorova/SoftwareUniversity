function sumEvenNum(input){
    let sum = 0;
    for (let num of input) {
        if(num % 2 === 0){
            sum += Number(num)
        }
        
    }

console.log(sum)

}
sumEvenNum(['1','2','3','4','5','6'])