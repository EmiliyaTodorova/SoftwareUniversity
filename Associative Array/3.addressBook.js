function addressBook(input) {
  let assocArr = {};

  for (let line of input) {
    line = line.split(":");
    let name = line[0];
    let address = line[1];
    assocArr[name] = address;
    //console.log(assocArr);
  }

  let sorted = Object.entries(assocArr);
  sorted.sort((a, b) => {
   return a[0].localeCompare(b[0]);
  });

 for(let result of sorted){
     console.log(`${result[0]} -> ${result[1]}`)
 }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
