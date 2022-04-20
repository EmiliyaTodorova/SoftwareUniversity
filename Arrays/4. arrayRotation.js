function arrayRotation(arr, num){

    for(let i = 0; i < num; i++){
       // let element = arr[i];
        let cutElement = arr.shift();
        arr.push(cutElement)

    }
    console.log(arr.join(" "))


}
arrayRotation([2, 4, 15, 31], 5)