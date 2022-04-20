function foodDelivery(input){

    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.4;
    let vegMenu = Number(input[2]) * 8.15;
    let desert = (chickenMenu + fishMenu + vegMenu) * 0.2;
    let dellivery = 2.5;
    let totalPrice = chickenMenu + fishMenu + vegMenu + desert + dellivery;
    
    console.log(totalPrice)
}

foodDelivery(["2","4","3"])