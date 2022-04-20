function circleArea(input){
let r = Number(input[0]);
let s = r * r * Math.PI;
let p = 2 * Math.PI * r;

console.log(s.toFixed(2))
console.log(p.toFixed(2))


}

circleArea([3, 4.5])