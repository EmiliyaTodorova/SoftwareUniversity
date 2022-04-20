function vegMarket(input){

let n = Number(input[0]);
let m = Number(input[1]);
let nKg = Number(input[2]);
let mKg = Number(input[3]);
let totalMoneyLev = (n * nKg) + (m * mKg)
let totalMoneyEur = totalMoneyLev / 1.94

console.log(totalMoneyEur.toFixed(2))
}

vegMarket([0.194, 19.4, 10, 10])