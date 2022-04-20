function nxn(num) {
    let rows = num
  let newArr = [];
  for (let i = 0; i < rows; i++) {
    newArr.push(rows);
  }
  for(let j = 0; j < num; j++){
      console.log(newArr.join(" "))
  }
}
nxn(3);
