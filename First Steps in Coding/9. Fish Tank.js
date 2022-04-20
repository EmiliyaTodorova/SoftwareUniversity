function fishTank(input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentageBusy = Number(input[3]);
    let volume = lenght * width * hight / 1000;
    let totalVolume = volume - volume * percentageBusy/100;

    console.log(totalVolume)

}

fishTank(["85","75","47","17"])
