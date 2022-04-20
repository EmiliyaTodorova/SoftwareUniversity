// Objects
// creating object with properties and values
let person = {
    name: "Peter",
    age: 20,
    hairColor: "black",
  };
   
  // We can define empty object and add or change the properties later
  let person = {};
   
  person.name = "Stefan";
  person["lastName"] = "Petrov";
  console.log(person);
   
  // define method in object
   
  let person = {
    sayHello: function () {
      console.log("Hi, guys");
    },
  };
   
  // or
   
  let person = {
    sayHello() {
      console.log("Hi, guys");
    },
  };
   
  // We can add a method to an already defined object
   
  let person = {
    name: "Peter",
    age: 20,
  };
   
  person.sayHello = () => console.log("Hi, guys");
   
  // Built-in Object Methods
   
  Object.entries();
  //   returns an array of all properties and their values
   
  Object.keys();
  //  returns array with all the properties
   
  Object.values();
  //  - returns array with all the values of the properties
   
  // examples:
   
  Object.entries(cat);
  // [['name', 'Tom'], ['age', 5]]
   
  Object.keys(cat);
  // ['name', 'age']
   
  Object.values(cat);
  //  ['Tom', 5]
   
  // Use for-of loop to iterate over the object properties by key:
   
  let obj = {
    name: "Peter",
    age: "18",
    grade: "5.50",
  };
  for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
   
  // JSON Methods
  // We can convert object into JSON string using
   
  JSON.stringify(object);
  // example
  let text = JSON.stringify(obj);
   
  // We can convert JSON string into object using
  JSON.parse(text);
  // example
  let obj = JSON.parse(text);
   
  // Classes
  // declare a class
  class Student {
    constructor(name) {
      this.name = name;
    }
  }
   
  // example
  class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  }
   
  // Creating an instance of the class:
  let firstStudent = new Student("Peter", 5.5);
   
  // Functions in a Class, called methods
  class Dog {
    constructor() {
      this.speak = () => {
        console.log("Woof");
      };
    }
  }
   
  let dog = new Dog();
  dog.speak(); // Woof