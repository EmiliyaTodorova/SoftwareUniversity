function grades(input){
    let index = 0;
    let countStudents = Number(input[index])
    index++
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    let totalGrade = 0;

    for(let i = 1; i <= countStudents; i++){
        let gradeSt = Number(input[index]);
       index++
        totalGrade += gradeSt

        if (gradeSt >= 2 && gradeSt <= 2.99){
            counter2++;
        } else if (gradeSt >= 3 && gradeSt <=3.99){
            counter3++;
        } else if (gradeSt >= 4 && gradeSt <= 4.99){
            counter4++
        } else if (gradeSt >= 5){
            counter5++
        }
    }

console.log(`Top students: ${(counter5 / countStudents * 100).toFixed(2)}%`)
console.log(`Between 4.00 and 4.99: ${(counter4 / countStudents * 100).toFixed(2)}%`)
console.log(`Between 3.00 and 3.99: ${(counter3 / countStudents * 100).toFixed(2)}%`)
console.log(`Fail: ${(counter2 / countStudents * 100).toFixed(2)}%`)
console.log(`Average: ${(totalGrade / countStudents).toFixed(2)}`)
}



grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])