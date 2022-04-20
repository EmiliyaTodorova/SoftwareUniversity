
  function solve(arr) {
   
    let topInteger = [];
    
  
    for (let index = 0; index < arr.length; index++) {
      
      let currElemnt = arr[index];
      let isTopInteger = true;
      for (let j = index + 1; j < arr.length; j++) {
        let nextEl = arr[j];
        if (currElemnt <= nextEl) {
            isTopInteger = false;
          break;
        }
      }
      if (isTopInteger) {
        topInteger.push(currElemnt);
      }
    }
    console.log(topInteger.join(" "));
  }
solve([1, 4, 3, 2]);
