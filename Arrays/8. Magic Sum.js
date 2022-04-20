function magicSum(arr, num){

    let array = arr;
    let arrayL = array.length;
    let n = num;

    for(let i = 0; i < arrayL; i++){
        let currentElement = array[i];
        for(let j = i+1; j < arrayL; j++){
            let nextElement = array[j]
            if(currentElement + nextElement === n){
                console.log(`${currentElement} ${nextElement}`)
            }
        }
    }


}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27)