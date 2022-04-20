function building(input) {
    let floor = Number(input[0]);
    let countRoom = Number(input[1]);
    countFloor = 0;
    


    for (let f = floor; f >= 1; f--) {
        let type = ""
        for (let r = 0; r < countRoom; r++) {
            if (f === floor) {
                type += "L" + f + r + " "
            }
            if (f % 2 === 0 && f !== floor) {
                type += "O" + f + r + " "

            } else if (f % 2 !== 0 && f !== floor) {
                type += "A" + f + r + " "

            }
        }

        console.log(type)
    }
}

building(["9", "5"])

