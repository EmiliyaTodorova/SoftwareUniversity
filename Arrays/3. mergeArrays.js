function mergeArrays(arr1, arr2){

    let newArr = [];

    for(let i = 0; i < arr1.length; i ++){
        let arr1El = arr1[i];
        let arr2El = arr2[i];
        if(i % 2 === 0){
            let sum = Number(arr1El) + Number(arr2El);
            newArr.push(sum);
        } else{
            let sum = arr1El + arr2El
            newArr.push(sum);
        }
    }
    console.log(newArr.join(" - "))




}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])