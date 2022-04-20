function formatGrade(grade){

    let description = 0;
    let formatedGrade = grade.toFixed(2)


    if(grade < 3){
        description = "Fail"
        formatedGrade = "2"
    }else if (grade < 3.50){
        description = "Poor"
    }else if (grade < 4.50){
        description = "Good"
    }else if (grade < 5.50){
        description = "Very good"
    }else {
        description = "Excellent"
    }

    console.log(`${description} (${formatedGrade})`)

    }
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)