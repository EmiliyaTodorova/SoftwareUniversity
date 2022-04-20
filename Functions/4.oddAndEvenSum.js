function oddAndevenSum(num) {
  let numberAsText = num.toString();

  function totalOddSum(numAsString) {
    let oddSum = 0;

    for (let i = 0; i < numberAsText.length; i++) {
      let currentElement = Number(numberAsText[i]);
      if (currentElement % 2 !== 0) {
        oddSum += currentElement;
      }
    }
    return oddSum;
  }
  function totalEvenSum(numAsString) {
    let evenSum = 0;
    for (let i = 0; i < numberAsText.length; i++) {
      let currentElement = Number(numberAsText[i]);
      if (currentElement % 2 === 0) {
        evenSum += currentElement;
      }
    }
    return evenSum;
  }
  console.log(`Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(numberAsText)}`)
}
oddAndevenSum(1000435);
