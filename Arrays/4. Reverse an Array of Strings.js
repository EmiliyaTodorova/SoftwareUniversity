function reverseAnArrayOfString(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let k = arr.length - 1 - i;
    let buffer = arr[i];
    arr[i] = arr[k];
    arr[k] = buffer;
  }
  console.log(arr.join(" "));
}
reverseAnArrayOfString(["33", "123", "0", "dd"]);
