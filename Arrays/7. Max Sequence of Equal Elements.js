function solve(arr) {
  let sequence = [];
 

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let newArr = [currentElement];

    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = arr[j];

      if (currentElement === nextElement) {
        newArr.push(currentElement);
      } else {
        break;
      }
    }
    if (newArr.length > sequence.length) {
      sequence = newArr;
    }
  }
  console.log(sequence.join(" "));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
