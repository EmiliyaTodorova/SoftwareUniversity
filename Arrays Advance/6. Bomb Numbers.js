function bombNumber(arr, num) {
  let bombNum = num[0];
  let power = num[1];
  let indexOfBomb = arr.indexOf(bombNum);

  while (indexOfBomb !== -1) {
    let startIndexExplosion = indexOfBomb - power;
    let lengthExplosion = power * 2 + 1;
    arr.splice(startIndexExplosion, lengthExplosion);
    indexOfBomb = arr.indexOf(bombNum);
  }
  let sum = arr.reduce((a,b) => a + b, 0)

  console.log(sum);
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
