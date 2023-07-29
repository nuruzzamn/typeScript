// 1. abstraction helps us to hide the implementation of something

// 2. class declared with abstract keyword

// 3. object can not be created from abstract class

// 4. if a class extends abstract class; it must inherit all the abstract methods


// create abstrtact class
abstract class User {
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    abstract display(): void;
  }
  
  class Student extends User {
    studentId: number;
  
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
  }
  
  let student1 = new Student("zaman", 28, 111222);
  student1.display();
  