function depCalc(input){

    let depSum = Number(input[0]);
    let timeDep = Number(input[1]);
    let DivPr = Number(input[2]);
    let yearDivPr = depSum * DivPr / 100;
    let monthDivPr = yearDivPr / 12;
    

    let totalSum = depSum + timeDep * monthDivPr    ;

    console.log(totalSum)
}
depCalc(["200","3","5.7"])
