function schoolGrades(input) {
  let map = new Map();
 

  for (let line of input) {
    line = line.split(" ");
    let name = line.shift();
    let grades = line.map(Number);
    if (!map.has(name)) {
      map.set(name, grades);
    } else {
      let currantGrades = map.get(name);

      for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        currantGrades.push(grade);
      }
      map.set(name, currantGrades);
    }
  }
  let sorted = Array.from(map.entries());
  sorted.sort((a, b) => {
   return a[0].localeCompare(b[0]);
  });
let result = new Map()
for(let [name, grades] of sorted){
    let sumOfGrade = 0;
    let count = 0;
    for(let grade of grades){
        count++
        sumOfGrade += grade
    }
    let averageGrade = sumOfGrade/count
    result.set(name, averageGrade.toFixed(2))
    
}
for(let key of result.keys()){
    console.log(`${key}: ${result.get(key)}`)
  }
  
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
