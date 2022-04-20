function wordTracker(input) {

    let map = new Map
    let wordsToCount = input.shift().split(" ")
    for(let i = 0; i < wordsToCount.length; i++){
      map.set(wordsToCount[i], 0);
       
    }
    for(let word of input){
        if(map.has(word)){
            let currCount = map.get(word)
            currCount++
            map.set(word, currCount)
        }
    }
        let sorted = Array.from(map.entries())
        sorted.sort((a,b) => b[1] - a[1])
        for (let line of sorted) {
            console.log(`${line[0]} - ${line[1]}`);
          }
    
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
