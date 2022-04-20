function triple(num) {
    let startNum = 97;
    let endNum = 97 + Number(num);
  
    for (let i = startNum; i < endNum; i++) {
      for (let j = startNum; j < endNum; j++) {
        for (let l = startNum; l < endNum; l++) {
  
  
  
  
            console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(l)}`)
        }
      }
    }
  }
  triple("3");
