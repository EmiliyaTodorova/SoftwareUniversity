function firstLast(arr){
    
    arr = arr.map(Number)

    let first = arr.shift()
    let last = arr.pop()

    let result = first + last
    console.log(result)


}
firstLast(['20', '30', '40'])