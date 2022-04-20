function equalSum(arr) {
  let arrayL = arr.length;
  let isEqual = false;

  for (let i = 0; i < arrayL; i++) {
    let rightSum = 0;
    let leftSum = 0;
    for (let j = i + 1; j < arrayL; j++) {
      let nextElement = arr[j];
      rightSum += nextElement;
    }
    for (let k = 0; k < i; k++) {
      let previousElement =  [k];
      leftSum += previousElement;
    }
    if (leftSum === rightSum) {
      isEqual = true;
      console.log(i);
    }
  }
  if (!isEqual) {
    console.log("no");
  }
}
equalSum([1]);
