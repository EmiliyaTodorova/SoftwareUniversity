function pin(input) {
    let n1 = Number(input[0])
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let string = ""

    for (let a = 1; a <= n1; a++) {
        for (let b = 1; b <= n2; b++) {
            for (let c = 1; c <= n3; c++) {
                if (a % 2 === 0 && c % 2 === 0){
                    if ((b >= 2 && b <= 7) && (b % 2 !== 0 || b === 2))
                    console.log(`${a} ${b} ${c} `)
                    }
                }
            }
        }

    }


pin([3, 5, 5])