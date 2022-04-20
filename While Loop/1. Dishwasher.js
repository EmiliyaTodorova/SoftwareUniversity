function dishwasher(input) {
    let index = 0;
    let bottle = Number(input[index]);
    index++;
    let countDishes = input[index];
    index++

    let count = 0;
    let washerMl = bottle * 750;

    let totalDish = 0;
    let totalPots = 0
    let dishMl = 5;
    let potMl = 15;

    while (countDishes !== "End") {
        let currentDishes = Number(countDishes);
        let totalDishMl = currentDishes * dishMl;
        let totalPotMl = currentDishes * potMl;
       

        count++;

        if (count < 3) {
            totalDish += currentDishes;
            totalPots += 0;
            washerMl -= totalDishMl

        } else if (count >= 3) {
            count = 0;
            totalPots += currentDishes
            totalDish += 0;
            washerMl -= totalPotMl
        }
        if (washerMl < 0) {

            console.log(`Not enough detergent, ${Math.abs(washerMl)} ml. more necessary!`)
            break;
        }

        countDishes = input[index];
        index++
    }

    if (washerMl >= 0) {
        let diff = Math.abs()
        console.log(`Detergent was enough!`)
        console.log(`${totalDish} dishes and ${totalPots} pots were washed.`)
        console.log(`Leftover detergent ${washerMl} ml.`)
    }





}
dishwasher([2, 53, 65, 55, "End"])