function palindrome(array) {
  let numberOfArray = array;

  function isPalindrome(number) {
    let startNum = number;
    let reversedNum = (Number(number.toString().split("").reverse().join("")));
    if (startNum === reversedNum) {
      return true;
    } else {
      return false;
    }
  }
for(let i = 0; i < numberOfArray.length; i ++){
    let currentNumber = numberOfArray[i];
    console.log(isPalindrome(currentNumber));
}

}
palindrome([123, 323, 421, 121]);
