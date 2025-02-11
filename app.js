// Exercise 1
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(rmHobby) {
    this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
  }

  greeting() {
    console.log("Hello fellow person!");
  }

  toString() {
    return Object.values(this).toString();
  }
}

// Exercise 2
class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);

    this.occupation = occupation;
  }

  greeting() {
    console.log("Hello, I am a coder!");
  }
}

// Exercise 3
let coder = new Coder("John", 0, "Costa Mesa", [
  "running",
  "swimming",
  "reading",
]);

coder.addHobby("Basketball");

coder.removeHobby("swimming");

console.log(coder);

coder.greeting();

console.log(coder.toString());

// Exercise 4
class Calculator {
  result = 0;

  //   or
  //   constructor() {
  //     this.result = 0;
  //   }

  add(a, b) {
    let res;

    if (b == undefined) {
      res = this.result + a;
    } else {
      res = a + b;
    }

    this.result = res;
    return this.result;
  }

  subtract(a, b) {
    let res;

    if (b == undefined) {
      res = this.result - a;
    } else {
      res = a - b;
    }

    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    let res;

    if (b == undefined) {
      res = this.result * a;
    } else {
      res = a * b;
    }

    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    let res;

    if (b == undefined) {
      res = this.result / a;
    } else {
      res = a / b;
    }

    this.result = a / b;
    return this.result;
  }

  display() {
    console.log(this.result);
  }
}

let calc = new Calculator();

calc.add(0, 1);
calc.display();
calc.add(9);
calc.display();
calc.subtract(5, 3);
calc.display();
calc.multiply(1, 3);
calc.display();
calc.divide(8, 2);
calc.display();
