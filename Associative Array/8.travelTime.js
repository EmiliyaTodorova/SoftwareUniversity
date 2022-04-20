function travelTime(input) {
  let countryName = {};

  for (let line of input) {
    let [country, city, cost] = line.split(" > ");
    cost = Number(cost)
    if (!countryName.hasOwnProperty(country)) {
        countryName[country] = {};
    }
    if(!countryName[country].hasOwnProperty(city)){
        countryName[country][city] = cost;
    }
    if(countryName[country][city] > cost){
        countryName[country][city] = cost
    }
}
let key = Object.keys(countryName);
let sortedCountry = key.sort((a,b) => a[0].localeCompare(b[0]))



for(let country of sortedCountry){
    let sortedCountriesValues = Object.entries(countryName[country]);
       sortedCountriesValues.sort((a, b) => a[1] - b[1]);
       let result = [];
       for (let [city, cost] of sortedCountriesValues) {
           
         result.push(city);
         result.push(cost)
        
       }
       console.log(`${country} -> ${result.join(" -> ")}`);
}

}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
