function searchNum(arr1, arr2) {
  let numberOfElements = arr2[0];
  let numberToDelete = arr2[1];
  let searchingNum = Number(arr2[2]);
  let count = 0;

  let newArr = arr1.splice(0, numberOfElements)
  newArr = newArr.splice(numberToDelete)
  
  for (let i = 0; i < newArr.length; i++) {
      
    if (newArr[i] === searchingNum) {
      count++;
    }
  }

  console.log(`Number ${searchingNum} occurs ${count} times.`);
}
searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
