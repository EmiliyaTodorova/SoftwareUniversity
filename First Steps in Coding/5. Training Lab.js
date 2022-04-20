function trainingLab(input){

    let w = Number(input[0]);
    let h = Number(input[1]);
    let deskPerW = parseInt(w / 1.20);
    let deskPerH = parseInt((h-1) / 0.7);
    let totalDesk = deskPerH * deskPerW - 3;

    console.log(totalDesk)
   
  

   
}

trainingLab([8.4, 5.2])