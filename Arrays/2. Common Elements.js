function common(arr1, arr2) {
  let currentElement1 = 0;
  let currentElement2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    currentElement1 = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
        currentElement2 = arr2[j];
        if(currentElement1 === currentElement2){
            console.log(currentElement1)
        }
    }
  }
}
common(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
