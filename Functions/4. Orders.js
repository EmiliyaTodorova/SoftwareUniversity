function orders(product, num){
    //•	coffee - 1.50
	//•	water - 1.00
	//•	coke - 1.40
	//•	snacks - 2.00

    let price = 0;

    if(product === "coffee"){
        price = num * 1.50
    }else if (product === "water"){
        price = num * 1.00
    } else if (product === "coke"){
        price = num * 1.40
    } else if(product === "snacks"){
        price = num * 2
    }
console.log(price.toFixed(2))

}
orders("water", 5)