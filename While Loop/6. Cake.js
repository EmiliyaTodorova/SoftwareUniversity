function cake(input){
    
    let index = 0;
    let w = Number(input[index]);
        index++;
        let l = Number(input[index]);
        index ++
        let cakeCm2 = l * w;
        let countCake = input[index];
        index ++
        let totalCake = 0;

        while (countCake !== "STOP"){
            let currCake = Number(countCake);
            totalCake += currCake;
            if (totalCake >= cakeCm2){
                let diff = Math.abs(totalCake - cakeCm2)
                console.log(`No more cake left! You need ${diff} pieces more.`)
                break;
            }
            countCake = input[index];
            index ++
        }

        if (countCake === "STOP"){
            if(totalCake < cakeCm2){
                let diff = Math.abs(totalCake - cakeCm2)
                console.log(`${diff} pieces are left.`)
            
            }

            
        }
        


}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

