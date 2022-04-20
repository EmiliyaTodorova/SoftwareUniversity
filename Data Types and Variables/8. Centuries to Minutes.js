function centuriesToMinutes(centuries){

    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422)
    let hours = days * 24
    let min = hours * 60

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`) 
//5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
}
centuriesToMinutes(5)