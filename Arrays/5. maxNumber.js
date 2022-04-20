function maxNumber(arr){

    let newArr = [];
    for(let i = 0; i < arr.length; i ++){
        let currentEl = arr[i];
        let isTopInt = true;
        for(let j = i + 1; j < arr.length; j++){
            let rightEl = arr[j];
            if(currentEl <= rightEl){
               isTopInt = false
            }
        }
        if(isTopInt){
            newArr.push(currentEl)
        }
    }
    console.log(newArr.join(" "))
}
maxNumber([1, 4, 3, 2])