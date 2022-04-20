function hospital(input){
   let index = 0;
    let period = Number(input[index]);
    index++;    
    
    
    let examinedPatient = 0;
    let unExaminedPatient = 0;
    let countDoctors = 7;
    let totalUnexaminatedPatient = 0;
    let totalExaminatedPatient = 0;
    
    for(let i = 1; i <= period; i++){
        let countPatient = Number(input[i])
       
        
        if(i % 3 === 0 && totalUnexaminatedPatient > totalExaminatedPatient){
            countDoctors++;
        }
                
        if (countDoctors >= countPatient){
            
            examinedPatient = countPatient;
            totalExaminatedPatient += examinedPatient
        } else if (countDoctors < countPatient) {
            unExaminedPatient = countPatient - countDoctors;
            totalUnexaminatedPatient += unExaminedPatient
            examinedPatient = countDoctors
            totalExaminatedPatient += examinedPatient
            }

        }
            console.log(`Treated patients: ${totalExaminatedPatient}.`)
            console.log(`Untreated patients: ${totalUnexaminatedPatient}.`)
        }
        
       
    



hospital([6, 25, 25, 25, 25, 25, 2])