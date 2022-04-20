function partyTime(input) {
    let listOfGuest = new Set();
    let commingGuest = new Set();
    let index = 0;
    let command = input[index];
  
    while (command !== "PARTY") {
      let guest = input.shift();
      listOfGuest.add(guest);
      command = input[index];
    }
    if (command === "PARTY") {
      let party = input.shift();
    }
    let listOfGuestAsArr = []
    listOfGuestAsArr = Array.from(listOfGuest)
    for (let guest of input) {
      
      
      if (listOfGuestAsArr.includes(guest)) {
        commingGuest.add(guest);
      //   listOfGuest.delete(guest);
      
      
      let indexToDelete = listOfGuestAsArr.indexOf(guest)
      listOfGuestAsArr.splice(indexToDelete,1)
          
      }
        }
        console.log(listOfGuestAsArr.length)
      //   let result = Array.from(listOfGuest)
      //   let count = listOfGuest.size
      //   console.log(count)
        for(let guest of listOfGuestAsArr){
            if(guest[0] == Number(guest[0])){
                console.log(guest)
            } 
        }
        for(let guest of listOfGuestAsArr){
          if(guest[0] != Number(guest[0])){
              console.log(guest)
          } 
  
        }
       
  }


partyTime(['7IK9Yo0h',
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);
