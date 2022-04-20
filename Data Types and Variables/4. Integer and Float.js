function intOrFloat(n1, n2, n3){
    let sum = n1 + n2 + n3
    let result = String(sum)
    let type = "Integer"

    for(let i = 0; i < result.length; i++){
        if(result[i] === "."){
           type = "Float"
        } 
    }
console.log(`${sum} - ${type}`)

}
intOrFloat(9, 100, 1.1)