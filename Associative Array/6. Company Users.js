function companyUsers(input) {
  let companyName = {};

  for (let line of input) {
    let [name, emploeeID] = line.split(" -> ");
    if (!companyName.hasOwnProperty(name)) {
      companyName[name] = new Set();
      companyName[name].add(emploeeID);
    } else {
      companyName[name].add(emploeeID);
    }
     }
  
  let sorted = Object.entries(companyName);

  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  
  for(let [name, emploees] of sorted){
    console.log(`${name}`) 
    for(let emploee of emploees){
        
        console.log(`-- ${emploee}`)
       }
    
  }
  

 
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
