function summOfOddNumbers(num) {
  let sum = 0;
  let counter = 0;

  for (let i = 1; i <= 100; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
      counter++;
      sum += i;
    }
    if (counter === num) {
      console.log(`Sum: ${sum}`);
      break;
    }
  }
}
summOfOddNumbers(5);
