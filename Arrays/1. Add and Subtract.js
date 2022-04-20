function addAndSubtract(arr) {
  let newArr = [];
  let sumArr = 0;
  let sumNewArr = 0;
  let newNum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    sumArr += arr[i];
    if (currentNumber % 2 === 0) {
      newNum = currentNumber + i;
      newArr.push(newNum)
    } else {
      newNum = currentNumber - i;
      newArr.push(newNum)
    }
  }

  for (let num of newArr) {
    sumNewArr += num;
  }
  console.log(`[ ${newArr.join(", ")} ]`);
  console.log(sumArr);
  console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
