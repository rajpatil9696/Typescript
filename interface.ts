interface computer {
    name:string,
    ram:number,
    storage:number
}

const computerExample :computer = {
name:"victus",
ram:8,
storage:521
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.storage);

// function interface 
interface mathoperation {
    (x:number , y:number) :number 
}

const add :mathoperation=(a,b)=>(a+b);
console.log(add(2,5));
const substract :mathoperation=(a,b)=>(a-b);
console.log(substract(7,5));

// 
interface moviedetails {
    readonly name: string;
    rating: number;
    printmovieinfo(name: string, price: number, rating: number): number | string;
}

interface movieGanra extends moviedetails {
    genra: string;
}

const movie1: movieGanra = {
    name: "inception",
    rating: 8.9,
    genra: "action",
    printmovieinfo(name: string, price: number, rating: number): string | number {
        return `${name}, ${price}, ${rating}`;
    }
};

console.log(movie1.printmovieinfo("inception", 200, 8.9));

// interfece with classes 
// Interface declaration
interface Car {
    brand: string;
    speed: number;
    drive(distance: number): void;
}

// Class implementing interface
class SportsCar implements Car {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    drive(distance: number): void {
        console.log(`${this.brand} drove ${distance} km at ${this.speed} km/h`);
    }
}

// Creating object
const car1 = new SportsCar("Ferrari", 220);
car1.drive(50);



// declaration merging 
// First interface declaration
interface Product {
    name: string;
}

// Second interface with the same name (Merges with the first)
interface Product {
    price: number;
}

// Now Product has both: name + price
const p1: Product = {
    name: "Laptop",
    price: 45000
};

console.log(p1);


