function inventory(input) {
  let = arrOfObj = [];

  for (let line of input) {
    let obj = {};
    line = line.split(" / ");
    let hero = line.shift();
    let level = Number(line.shift());
    let items = line;
    obj.hero = hero;
    obj.level = level;
    obj.items = line;
    arrOfObj.push(obj);
  }

  let sortArr = arrOfObj.sort((a, b) => {
    return a.level - b.level;
  });
  for (let object of sortArr) {
    console.log(`Hero: ${object.hero}`);
    console.log(`level => ${object.level}`);
    console.log(`items => ${object.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
