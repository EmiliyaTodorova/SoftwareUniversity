function mouving(input){
    let index = 0;
    let w = Number(input[index]);
    index ++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index ++
    let volume = w * h * l;
    let countBox = input[index];
    index++;
    let totalBox = 0;

    while(countBox !== "Done"){
        let currBox = Number(countBox)
        totalBox += currBox
        if (totalBox >= volume){
            let diff = Math.abs(totalBox - volume)
            console.log(`No more free space! You need ${diff} Cubic meters more.`)
            break;
        }
        countBox = input[index];
        index++;
    }

    if (countBox === "Done"){
        if (totalBox < volume){
            let diff = Math.abs(totalBox - volume)
            console.log(`${diff} Cubic meters left.`)
        }

    }



}
mouving(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
