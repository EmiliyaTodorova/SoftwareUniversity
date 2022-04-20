function storage(input) {
  let map = new Map();

  for (let line of input) {
    line = line.split(" ");
    let product = line[0];
    let quantity = Number(line[1]);
    if (!map.has(product)) {
      map.set(product, quantity);
    } else {
      let currantQuantity = map.get(product);
      let newQuantity = currantQuantity + quantity;
      map.set(product, newQuantity);
    }
  }
  for(let key of map.keys()){
    console.log(`${key} -> ${map.get(key)}`)
  }
  
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
