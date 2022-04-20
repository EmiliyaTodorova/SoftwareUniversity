function equalSums(arr) {
  let hasEqual = false;
  for (let i = 0; i < arr.length; i++) {
    let rightSum = 0;
    let leftSum = 0;

    for (let k = i - 1; k >= 0; k--) {
      leftSum += arr[k];
    }
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
        console.log(i);
        hasEqual = true;
      }
  }

  if (!hasEqual) {
    console.log("no");
  }
}

equalSums([1]);
