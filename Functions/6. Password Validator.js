function passwordValidator(pass) {
  function isLengthEnought(passwordInString) {
    if (passwordInString.length >= 6 && passwordInString <= 10) {
      return true;
    } else {
      return false;
    }
  }

  function isOnlyLettersAndDiggits(stringPassword) {
    for (let char of stringPassword) {
      let currChar = Number(char.charCodeAt(0));
      if (
        !(currChar >= 48 && currChar <= 57) &&
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122)) {
        return false;
      } 
        
      
    }
    return true ;
  }

  function isHavingTwoDiggits(stringPassword) {
    let diggit = 0;
    for (const charr of stringPassword) {
      let currChar = charr.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        diggit++;
      }
    }
    if (diggit >= 2) {
      return true;
    } else {
      return false;
    }
  }
  let isLength = isLengthEnought(pass);
  let isOnlyLettersAndDiggitsContain = isOnlyLettersAndDiggits(pass);
  let isHaveTwoDiggits = isHavingTwoDiggits(pass);
  if (isLength && isOnlyLettersAndDiggitsContain && isHaveTwoDiggits) {
    console.log("Password is valid");
  }
  if (isLength !== true) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (isOnlyLettersAndDiggitsContain !== true) {
    console.log("Password must consist only of letters and digits");
  }
  if (isHaveTwoDiggits !== true) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("'MyPass123'");
