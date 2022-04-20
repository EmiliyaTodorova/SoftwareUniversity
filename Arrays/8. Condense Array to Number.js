function condenseArrey(arr){

    while(arr.length > 1){
        let condense = [];
        for(let i = 0; i < arr.length - 1; i++){
            let num1 = arr[i];
            let num2 = arr[i+1];
            let sum = num1 + num2;
            condense.push(sum)
        }
        arr = condense;
    }
    console.log(arr[0])

}
condenseArrey([2,10,3])