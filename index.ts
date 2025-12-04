// string annotation 
let name :string="raj patil";
name="viraj patil"  // we can reassign 
console.log(name);

// number annotation
let age:number=21;
console.log(age);

// boolian annotation
let isHard : boolean =false;
console.log(isHard);

// type inference 
let tech= "typescript";  // type is automaticall set 
// if we write tech =13 it will give error 
console.log(tech);

// any type 
let color :any="orange";
color=23;  // no type checking for this because it can be any type 
console.log(color);

// function parameter annotation 
function addone(num:number){  // annotation of the parameter 
    return num+1;
}

let res = addone(5);
console.log(res);

// arrow function 
const multi=(x:number , y:number)=>{
   return  x*y;
}
let res2=multi(2,10);
console.log(res2);

// default value of parameter 
function greet(person="raj"){
    return `hello ${person}`;
}
console.log(greet());

//return annotation 
function double(x:number):number{  // return annotation 
    return 2*x;
}
const res3=double(5);
console.log(res3);

// arrrow function 
const triple=(x:number) :number=> 3*x;

console.log(triple(5));

// void function 
function printMessage(message:string):void{
    console.log(`hello guys this is ${message}`); // not returning any value 
}

printMessage("raj patil ");

// never keyword 
function throwerror(msg:string):never{
    throw new Error(msg);
}  // used in throwing error , infinite loop , or variable that don't have any value 

