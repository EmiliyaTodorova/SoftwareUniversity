function phone(input) {
  let assocArr = {};

  for (let entry of input) {
    entry = entry.split(" ");
    
    assocArr[entry[0]] = entry[1];
    
  }
  for(let key in assocArr){
      console.log(`${key} -> ${assocArr[key]}`)
  }
}
phone([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
