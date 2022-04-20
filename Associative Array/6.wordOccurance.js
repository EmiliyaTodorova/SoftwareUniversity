function word(input) {

    let map = new Map();

    for(let word of input){
        if(!map.has(word)){
            map.set(word, 1)
        } else {
            let currentTimes = map.get(word)
            currentTimes++
            map.set(word, currentTimes)
        }
    }
   
    
let sorted = Array.from(map.entries())
sorted.sort((a,b) => b[1]-a[1])

for(let line of sorted){
    console.log(`${line[0]} -> ${line[1]} times`)
}






}
word([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
