function smallestTwoElement(array){

    let newArray = array.sort((a, b) => a - b)
    
    let result = newArray.slice(0, 2).join(" ")
    console.log(result)

}
smallestTwoElement([30, 15, 50, 5])