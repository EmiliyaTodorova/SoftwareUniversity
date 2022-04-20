function walking(input){

    let index = 0;
    let steps = input[index];
    index++
    let totalSteps = 0

    while (steps !== "Going home"){
        let currentStep = Number(steps);
        totalSteps += currentStep
        if (totalSteps >= 10000){
            let diff = Math.abs(totalSteps - 10000)
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`)
            break;
        }

        steps = input[index];
        index++
    }
    if (steps === "Going home"){
        let currentStep = Number(input[index]);
        index++
        totalSteps += currentStep;
        if(totalSteps < 10000){
            let diff = Math.abs(totalSteps - 10000)
            console.log(`${diff} more steps to reach goal.`)
        } else {
            let diff = Math.abs(totalSteps - 10000)
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`)
        }
    }


}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])


