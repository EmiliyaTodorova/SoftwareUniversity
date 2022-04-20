function arrRotation(arr, num){

    for(let i = 0; i < num; i ++){
        let currentElement = arr[i]
        let remouvedElement = arr.shift()
        arr.push(remouvedElement)
        
    }
    console.log(arr.join(" "))
}
arrRotation([2, 4, 15, 31], 5)