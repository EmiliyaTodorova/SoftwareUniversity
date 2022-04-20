function examPreparation(input) {
    let index = 0;
    let poorGrade = Number(input[index]);
    index++;
    let name = input[index];
    index++;
    let grade = Number(input[index])
    index++
    countGrade = 0;
    sumGrade = 0;
    countName = 0;
    lastName = 0;

    countPoorGrade = 0;

    while (name !== "Enough") {
        countGrade++
        sumGrade += grade
        lastName = name;
        countName++;
        if (grade <= 4) {
            countPoorGrade++;
            
        } 
        if(countPoorGrade === poorGrade){
            console.log(`You need a break, ${countPoorGrade} poor grades.`)
            break;
        }

        name = input[index]
        index++    
          
        grade = Number(input[index])
        index++
        
    }
    
   
   
    let averageScore = sumGrade / countGrade
       if(name === "Enough"){
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${countName}`)
        console.log(`Last problem: ${lastName}`)
            
       }

   
    



}
examPreparation(["2",
"Income",
"3",
"GameInfo",
"6",
"BestPlayer",
"4"])
