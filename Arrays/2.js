function commonEl(arr1, arr2){

    for(let i = 0; i < arr1.length; i++){
        let arr1Element = arr1[i];
        for(let j = 0; j < arr2.length; j++){
            let arr2Element = arr2[j]
            if (arr1Element === arr2Element){
                console.log(arr1Element)
            }
        }
       
    }


}

commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])