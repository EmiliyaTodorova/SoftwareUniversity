function trainTheTrainers(input) {
    let index = 0;
    let judge = Number(input[index]);
    index++
    let command = input[index];
    index++
    let sumOfGrade = 0;


    let countGrade = 0;
    let countPresentation = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let tempSumGrade = 0
        countPresentation++

        for (let i = 0; i < judge; i++) {
            let grade = Number(input[index]);
            index++
            tempSumGrade += grade;

        }
        let tempAverageGrade = tempSumGrade / judge
        console.log(`${presentationName} - ${tempAverageGrade.toFixed(2)}.`)

        sumOfGrade += tempAverageGrade
        command = input[index];
        index++;

    }

    let totalAverageGrade = sumOfGrade / countPresentation

   if (command === "Finish"){
 console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`)
   }
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])