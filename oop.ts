// Parent Class (Base Class)
class Person {
  public name: string;         // public → accessible everywhere
  protected age: number;       // protected → accessible inside class & subclasses
  private password: string;    // private → accessible only inside this class

  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  public showInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  private showPassword(): void {
    console.log(`Password: ${this.password}`);
  }
}

// Child Class (Subclass)
class Student extends Person {
  public grade: number;

  constructor(name: string, age: number, password: string, grade: number) {
    super(name, age, password); // calling parent constructor
    this.grade = grade;
  }

  // We can access 'protected age' but not 'private password'
  public showStudentInfo(): void {
    console.log(
      `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    );
  }
}

// Usage
const student = new Student("Raj", 21, "mySecret123", 10);

student.showInfo();         // OK → public method
student.showStudentInfo();  // OK → public method

console.log(student.name);  // OK → public property
// console.log(student.age); // ❌ ERROR (protected)
// console.log(student.password); // ❌ ERROR (private)
