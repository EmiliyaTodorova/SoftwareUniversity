function evenAndOddSubtraction (input){
    let evenSum = 0;
    let oddSum = 0;

    for (let num of input) {
        if(num % 2 === 0){
            evenSum += num
        } else {
            oddSum += num
        }
        
    }
let diff = evenSum - oddSum
console.log(diff)

}
evenAndOddSubtraction([2,4,6,8,10])