function oddEven(arr){

    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;


    for(let i = 0; i < arr.length; i++){
        sumArr += arr[i];
        if(arr[i] % 2 === 0){
            newArr.push(arr[i] + i)
        } else {
            newArr.push(arr[i] - i)
        }
        sumNewArr += newArr[i]
    }
console.log(`${"[ "}${newArr.join(", ")}${" ]"}`)
console.log(sumArr)
console.log(sumNewArr)


}
oddEven([5, 15, 23, 56, 35])