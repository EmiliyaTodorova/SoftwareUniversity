function fishLnd(input){

    let skumriqLv = Number(input[0]);
    let cacaLv = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMussels = Number(input[4]);
    let palamudLv = (skumriqLv * 0.6 + skumriqLv) * kgPalamud;
    let safridLv = (cacaLv * 0.8 + cacaLv) * kgSafrid;
    let musselsLv = 7.5 * kgMussels;
    let totalCost = (palamudLv + safridLv + musselsLv);

    console.log(totalCost.toFixed(2));
    
}

fishLnd([6.90, 4.20, 1.5, 2.5, 1])