function storeProvision(arr1, arr2) {
  

  for (let i = 0; i < arr2.length; i += 2) {
    let product = arr2[i];
    let quantt = arr2[i + 1];
       if (!arr1.includes(product)) {
      arr1.push(product);
      arr1.push(quantt);
    } else {
      let index = arr1.indexOf(product);
      arr1[index + 1] = Number(arr1[index + 1]) + Number(quantt);
    }
  }

  for(let i = 0; i<arr1.length; i +=2){
      let product = arr1[i]
      let quantity = arr1[i+1]

      let obj = {
        stock:product,
        quantitys:quantity
    };
      
      console.log(`${obj.stock} -> ${obj.quantitys}`)
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
