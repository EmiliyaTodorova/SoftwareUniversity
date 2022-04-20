function suppForSchool(input){

    let pen = Number(input[0]) * 5.8;
    let marker = Number(input[1]) * 7.2;
    let lithreChemical = Number(input[2]) * 1.2;
    let percentDisc = Number(input[3]) / 100;

    let totalSum = pen + marker + lithreChemical
    let totalSumDisc = totalSum * percentDisc
    let totalSumPlusDisc = totalSum - totalSumDisc

    console.log(totalSumPlusDisc)
}

suppForSchool(["2","3","4","25"])