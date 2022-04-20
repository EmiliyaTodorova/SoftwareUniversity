function rounding(num, rounding){
    if(rounding > 15){
        rounding = 15;
    }
    console.log(parseFloat(num.toFixed(rounding)))

}
rounding(10.5,3)