function makeADictionary(arr) {
  let arrOfObj = [];
  let finalArr = []

  for (let line of arr) {
    let newLine = JSON.parse(line);
    arrOfObj.push(newLine)
    }

    for(let currObj of arrOfObj){
        let newObj = {};
        newObj.name = Object.keys(currObj).join("")
        newObj.deffinition = Object.values(currObj).join("")
        let isExist = false;
        for(let element of finalArr){
            if(element.name === newObj.name){
                element.deffinition = newObj.deffinition
                isExist = true;
                break
            }
        }
        if(isExist === false){
            finalArr.push(newObj)
        }
       
      

    }
    let sortArr = finalArr.sort((a,b) => {
        return a.name.localeCompare(b.name);
    })
    
    for(let obj of sortArr){
      console.log(`Term: ${obj.name} => Definition: ${obj.deffinition}`) 
    }
  
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"super"}'
]);
