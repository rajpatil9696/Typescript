function genericFunction<type>(x:type) : type{  // this is generic function and we can use any data type inplace of <type>
    return x ;
}

let result1 =genericFunction<number>(123);
let result2 =genericFunction<string>("raj patil");
let result3 =genericFunction<boolean>(true);

console.log(result1);
console.log(result2);
console.log(result3);

// use of generics along with interface 
// Generic Interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Interface for a specific data type
interface User {
  id: number;
  name: string;
}

// Function using the generic interface 
function fetchData<T>(item: T): ApiResponse<T> {
  return {
    data: item,
    status: 200,
    message: "Success"
  };
}

// Using the generic interface with User type
const userResponse: ApiResponse<User> = fetchData({
  id: 1,
  name: "Raj"
});

console.log(userResponse);


// multiple parameter types 
function multiple<T,U>(x:T,y:U):[T,U]{
    return[x,y];
}

const answer=multiple("raj patil",21); // two different types string and number 
console.log(answer);
