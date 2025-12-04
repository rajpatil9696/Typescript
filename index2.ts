// type aliases 
type user={
    name:string;
    age:number;
    location:string;
    email?:string // this is optional property 
}

const viraj:user={
    name:"viraj",
    age:21,
    location:"india",
    email:"viraj@gmail.com"  // this is optional code will run without this also 
}

console.log(viraj);

const printuser=(user:user)=>{
   return `name: ${user.name} age: ${user.age} location: ${user.location}`;
}

const res=printuser({name:"raj",age:21, location:"india"});
console.log(res);

//intersection types it is used to combine two types inside one it is done using & operator 
type userinfo={
    first:string;
    last:string;
    age:number;
}
type accountinfo={
   email:string;
   password:string;
}

type userdetails =userinfo&accountinfo ;

const raj:userdetails={
    first:"raj",
    last:"patil",
    age:21,
    email:"raajpatil9696@gmail.com",
    password:"raj@2004"
}

console.log(raj.first);
console.log(raj);


// union type 
let password:string|number="raj"; // password can take both values string and number in this case 
password=1234 ;
console.log(password);

// literal types 
let color : "red"|"blue"|"green"|"yellow";
color="red";
console.log(color);

//tuples 
let mytuple:[string,number];
mytuple=["raj",42];
console.log(mytuple[0]);
console.log(mytuple[1]);

// enum 
enum weathercondition{
    sunny="sunny",
    rainy="rainy",
    cloudy="cloudy"
}

console.log(weathercondition.rainy);