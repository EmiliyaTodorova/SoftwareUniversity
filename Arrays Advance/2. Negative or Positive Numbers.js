function nefativePositive(arr){
    let newArr = [];
arr = arr.map(Number)
    for (let i of arr) {
        if (i >= 0){
            newArr.push(i)
        }else {
            newArr.unshift(i)
        }
        
    }
   console.log(newArr.join("\n"))


}
nefativePositive(['3', '-2', '0', '-1'])