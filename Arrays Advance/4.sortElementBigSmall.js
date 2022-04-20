function sorting(array){
    let sortArray = array.sort((a,b) => b-a)
    let newArray = []
    while(sortArray.length > 0){
        let bigestNum = sortArray.shift()
        let smallestNum = sortArray.pop()
        newArray.push(bigestNum)
        newArray.push(smallestNum)
        
    }
    console.log(newArray.join(" "))

}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])