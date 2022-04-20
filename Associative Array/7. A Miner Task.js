function minarTask(input){

    let obj={};
    for(let i = 0; i < input.length; i +=2){
        let resource = input[i];
        let quantity = input[i+1];
       if(!obj.hasOwnProperty(resource)){
           obj[resource] = quantity;
       } else {
           let currQuantity = Number(obj[resource]) + Number(quantity);
           obj[resource] = currQuantity;
       }
    }
    for(let [name, count] of Object.entries(obj)){
        console.log(`${name} -> ${count}`)
    }


}
minarTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])