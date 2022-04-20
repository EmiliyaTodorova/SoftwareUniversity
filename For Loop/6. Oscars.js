function oscars(input) {
    let index = 0;
    let actor = input[index];
    index++;
    let pointAcademy = Number(input[index]);
    index++;
    let countEvaluate = Number(input[index]);
    index++;
    let totalPointEvaluating = 0;
    let sumTotalPointEvaluating = 0;

    for (let i = 0; i < countEvaluate; i++) {
        let nameEvaluating = input[index]
        index++;
        let pointEvaluating = Number(input[index])
        index++

        totalPointEvaluating = (nameEvaluating.length * pointEvaluating) / 2

        sumTotalPointEvaluating += totalPointEvaluating;
        let totalPointActior = sumTotalPointEvaluating + pointAcademy;
        if (totalPointActior > 1250.5){
            break;
        }

    }

  
    let totalPointActior = sumTotalPointEvaluating + pointAcademy;
    let diff = Math.abs(1250.5 - totalPointActior)



     if (totalPointActior > 1250.5){
          console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPointActior.toFixed(1)}!`)
               }else if (totalPointEvaluating < 1250.5){
         console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`)
}


}






oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
