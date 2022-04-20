function city(obj){

    let result = Object.entries(obj)
    
    for (let [cityKey, cityValue] of result) {
        console.log(`${cityKey} -> ${cityValue}`)
        
    }


}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})