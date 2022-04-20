function salary(input){

    let index = 0
    let tab = Number(input[index]);
    index ++;    
    let money = Number(input[index]);
    index ++;
    
    

    for( let i = 0; i < tab; i++){
        let site = input[index]   
        index ++     
        switch(site){
            case "Facebook": 
            money -= 150;
            break;
            case "Instagram":
                money -= 100;
                break;
                case "Reddit":
                    money -= 50;
                    break;
        }
        
    }
    if (money <= 0){
        console.log(`You have lost your salary.`)
    } else {
        console.log(Math.trunc(money))
    }
    


}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
