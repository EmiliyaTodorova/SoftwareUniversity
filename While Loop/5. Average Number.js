function averrageNum(input){
    let index = 0;
    let num = Number(input[index]);
    index++
    let sum = 0;
   
    let counter = 0;

    for(let i = 0; i < num; i++){
        let n = Number(input[index]);
        index++;
        counter++;
        sum += n
        
    }
    console.log(sum / counter)

}
averrageNum([4, 3, 2, 4, 2])