function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
        index++;
    
    let klass = 0;
    let sum = 0;
    let poorGrade = 0;
   


    while (klass < "12") {
       if (grade >= 4){
           klass++;
           sum += grade
        }else if (grade < 4){
            sum += grade;
            poorGrade ++;
        }
        if (poorGrade > 1){
            klass++;
            console.log(`${name} has been excluded at ${klass} grade`)
            break;
        }
        if (klass > 11){
            let averageGrade = sum / klass
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            break;
        }
        
        
            
              
       
        grade = Number(input[index]);
        index++
    }
   



    



}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

