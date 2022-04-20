function repainting(input){

    let nailon = Number(input[0]) * 1.5;
    let paint = Number(input[1]) * 14.5;
    let thinner = Number(input[2]) * 5;
    let workingHour = Number(input[3]);
    let totalNailon = nailon + 3;
    let totalPaint = paint + paint * 0.1;
    let bags = 0.4; 
    let priceForMatirial = totalNailon + totalPaint + thinner + bags
    let priceForWork = workingHour * priceForMatirial * 0.3; 
    let totalPrice = priceForWork + priceForMatirial;

    console.log(totalPrice)
}
repainting(["5","10","10","1"])