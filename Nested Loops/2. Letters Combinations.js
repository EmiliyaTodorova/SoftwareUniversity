function letterCombination(input){

    let start = input[0];
    let end = input[1];
    let skipLetter = input[2];
    let string = ""

    for(let a = start; a <= end; a++){
        for(let b = start; b <= end; b++){
            for(let c = start; c <= end; c++){
                //if(a !== skipLetter || b !== skipLetter || c !== skipLetter){
                //    string += string + a + b + c + " "
                console.log(`${a}${b}${c}`)
                    
              //  }
             
            }
        }
       
    }
   
    
   // console.log(string)


}
letterCombination(["a", "c", "b"])