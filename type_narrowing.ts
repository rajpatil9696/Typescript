// type guard 
type mytype=string|number;

function exampleFunction(value:mytype):void{
    if(typeof value==="string"){
        console.log(value);
    }
    else{
        console.log(value.toFixed(2)) // this will print 2 
    }
}

let result1=exampleFunction("raj");
console.log(result1);

// instance of operator 
class Dog {
  bark() {
    console.log("Dog is barking!");
  }
}

class Cat {
  meow() {
    console.log("Cat is meowing!");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // narrowed to Dog
    animal.bark();
  } else {
    // narrowed to Cat
    animal.meow();
  }
}

const d = new Dog();
const c = new Cat();

animalSound(d); // Dog is barking!
animalSound(c); // Cat is meowing!


