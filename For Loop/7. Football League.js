function football(input){
    let index = 0;
    let seat = Number(input[index]);
    index ++;
    let fens = Number(input[index]);
    index ++;
    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;

    for(let i = 0; i < fens; i++){
        let sectors = input[index];
        index ++;
        if(sectors === "A"){
            countA ++;
        } else if (sectors === "B"){
            countB ++;
        }else if (sectors === "V"){
            countV ++;
        }else if (sectors === "G"){
            countG ++;
        }
        
    }

    let prCountA = countA / fens * 100;
        let prCountB = countB / fens * 100;
        let prCountV = countV / fens * 100;
        let prCountG = countG / fens * 100;
        let prFens = fens / seat * 100

        console.log(`${prCountA.toFixed(2)}% `)
        console.log(`${prCountB.toFixed(2)}% `)
        console.log(`${prCountV.toFixed(2)}% `)
        console.log(`${prCountG.toFixed(2)}% `)
        console.log(`${prFens.toFixed(2)}% `)
        


}
football([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])