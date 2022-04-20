function theatrePromotion(day, ages){
    
    let price = 0;

    switch (day){
        case "Weekday": 
        if (ages >= 0 && ages <= 18){
            price = "12$";
        } else if (ages > 18 && ages <= 64){
            price = "18$";
        } else if (ages > 64 && ages <= 122){
            price = "12$";
        } else {
            price = "Error!"
        }

        break;
        case "Weekend": 
        if (ages >= 0 && ages <= 18){
            price = "15$";
        } else if (ages > 18 && ages <= 64){
            price = "20$";
        } else if (ages > 64 && ages <= 122){
            price = "15$";
        } else {
            price = "Error!"
        }
                break;
        case "Holiday":
            if (ages >= 0 && ages <= 18){
                price = "5$";
            } else if (ages > 18 && ages <= 64){
                price = "12$";
            } else if (ages > 64 && ages <= 122){
                price = "10$";
            } else {
                price = "Error!"
            }
           
        break;
    }
    console.log(price)
    

}
theatrePromotion('Weekday', 42);