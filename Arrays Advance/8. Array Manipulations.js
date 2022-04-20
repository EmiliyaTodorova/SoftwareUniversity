function arrayManipulations(commands) {
  let arr = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    let currentCommand = command[0];
    let firstNum = Number(command[1]);
    let secondNum = Number(command[2]);

    switch (currentCommand) {
      case "Add":
        arr.push(firstNum);
        break;
      case "Remove":
        for (const element of arr) {
          if (element === firstNum) {
            let index = arr.indexOf(element);
            arr.splice(index, 1);
          }
        }
        break;
      case "RemoveAt":
        arr.splice(firstNum, 1);

        break;
      case "Insert":
        arr.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(arr.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
