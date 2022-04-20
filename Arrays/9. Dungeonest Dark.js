function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  //let arrayL = arr.length;
  let elements = arr.shift().split("");
  isNewRoom = false;
  let word = ""
  let currentPoints = ""
  for (let i = 0; i < elements.length; i++) {
    let currentElement = elements[i];
    
    while(currentElement !== "|"){
    word += currentElement;
    if(currentElement === " "){
    currentPoints += currentElement
    }
   break;
    }
    
}   

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
