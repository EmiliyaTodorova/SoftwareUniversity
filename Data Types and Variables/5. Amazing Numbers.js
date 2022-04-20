function amazingNumber(num){

    let numAsString = String(num);
    let sum = 0;
    let isAmazing = "False";

    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i])
              
    }
    let sumInString = String(sum)
   for (let j = 0; j < sumInString.length; j++){
       if(sumInString[j] === "9"){
           isAmazing = "True";
       }
   }


    console.log(`${num} Amazing? ${isAmazing}`)

}
amazingNumber(1233);