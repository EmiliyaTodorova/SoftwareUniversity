function trecking(input){
    let index = 0;
    let countGroup = Number(input[index]);
    index++;
    let mountainPeak = 0;
    let peakMusala = 0;
    let peakMonblan = 0;
    let peakKilimandjaro = 0;
    let peakK2 = 0;
    let peakEverest = 0
    let totalPeople = 0;
    

    for(let i = 0; i < countGroup; i++){
        let peopleCount = Number(input[index]);
    index ++;
    totalPeople += peopleCount
    if( peopleCount <= 5){
        peakMusala += peopleCount
    } else if (peopleCount >= 6 && peopleCount <= 12){
        peakMonblan+=peopleCount
    } else if (peopleCount >= 13 && peopleCount <= 25){
        peakKilimandjaro+=peopleCount
    } else if(peopleCount >= 26 && peopleCount <= 40){
        peakK2+=peopleCount
    } else if (peopleCount >= 41) {
        peakEverest+=peopleCount
    }
    
    

    }
    

let procentMusala = peakMusala / totalPeople * 100
   console.log(`${procentMusala.toFixed(2)}%`)
   let procentMounblan = peakMonblan / totalPeople * 100
   console.log(`${procentMounblan.toFixed(2)}%`)
   let procentKilimandjaro = peakKilimandjaro / totalPeople * 100
   console.log(`${procentKilimandjaro.toFixed(2)}%`)
   let procentK2 = peakK2 / totalPeople * 100
   console.log(`${procentK2.toFixed(2)}%`)
   let procentEverest = peakEverest / totalPeople * 100
   console.log(`${procentEverest.toFixed(2)}%`)




}
trecking(["5",
"25",
"41",
"31",
"250",
"6"])


