function basketballEq(input){

let yearFee = Number(input[0]);
let sneekers = yearFee - yearFee * 0.4;
let tracksuit = sneekers - sneekers*0.2;
let ball = tracksuit / 4;
let accessory = ball / 5;

let totalPrice = yearFee + sneekers + tracksuit + ball + accessory

console.log(totalPrice)
}

basketballEq([365])