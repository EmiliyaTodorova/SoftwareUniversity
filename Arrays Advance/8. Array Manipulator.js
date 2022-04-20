function arrayManipulator(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    let currantCommand = tokens[0];
    if (currantCommand === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      numbers.splice(index, 0, element);
    } else if (currantCommand === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let numToAdd = tokens.map(Number);
      numbers.splice(index, 0, ...numToAdd);
    } else if (currantCommand === "contains") {
      let element = Number(tokens[1]);
      let result = numbers.indexOf(element);
      console.log(result);
    } else if (currantCommand === "remove") {
      let index = Number(tokens[1]);
      numbers.splice(index, 1);
    } else if (currantCommand === "shift") {
      let position = Number(tokens[1]);
      let rotation = numbers.splice(0, position);
      numbers.push(...rotation);
    } else if (currantCommand === "sumPairs") {
      let result = [];
      if(numbers.length % 2 !== 0){
          numbers.push(0)
      }
      for (let i = 0; i < numbers.length-1; i+=2) {
        let currEl = Number(numbers[i]);
        let nextEl = Number(numbers[i + 1]);
        let sum = currEl + nextEl;
        result.push(sum)
      }
      numbers = result
    } else if(currantCommand === "print"){
        console.log(`[ ${numbers.join(", ")} ] `)
    }
  }
  

  
}
arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
    //3, 3, 3 3 3 3 3 3 3 3 2
    // 6 6 6 6 6 6 6 6 6 2
);
