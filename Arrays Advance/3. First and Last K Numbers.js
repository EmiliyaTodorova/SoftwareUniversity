function firstLastKNum(arr){

    let k = arr.shift()

    let firstK = arr.slice(0,k).join(" ")
    let lastK = arr.slice(-k).join(" ")
    console.log(firstK)
    console.log(lastK)
}
firstLastKNum([2, 7, 8, 9])