function oddOccurence(input){

    input = input.toLowerCase()

    let result = new Map
    let arr = []

    let words = input.split(" ")
    for(let word of words){
        if(!result.has(word)){
            result.set(word, 1)
        } else {
            let currCount = result.get(word)
            currCount++
            result.set(word, currCount)
        }
        }
        for(let tuples of result){
            let word = tuples[0];
            let quantity = Number(tuples[1]);
            if(quantity % 2 !== 0){
                arr.push(word)
            }
        }
        console.log(arr.join(" "))
    


}
oddOccurence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')