function solve(arr) {
    class Cat {
      constructor(name, age) {
        (this.name = name), (this.age = age);
      }
  
      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }
    let catsArr = [];
    for (let cats of arr) {
      let [name, age] = cats.split(" ");
      let newCat = new Cat(name, age);
      catsArr.push(newCat);
    }
  
    catsArr.forEach((cat) => cat.meow());
  }
  solve(['Mellow 2', 'Tom 5'])