function meeting(input) {
  let calendar = {};

  for (let entry of input) {
    entry = entry.split(" ");
    let day = entry[0];
    let name = entry[1];
    if (calendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
        calendar[day] = name
        console.log(`Scheduled for ${day}`)
    }
  }
  for(let key in calendar){
      console.log(`${key} -> ${calendar[key]}`)
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
