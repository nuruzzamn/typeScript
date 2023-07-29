// 1. 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.

// 2. Encapsulation helps us to manage the visibility of class members.

// 3. Access modifiers: public, private, protected, readonly


  // public, private, protected, readonly
  class User {
    readonly userName: string;
    public age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }

    setStudentId(studentId: number): void {
      this.studentId = studentId;
    }

    getStudentId(): number {
      return this.studentId;
    }
  }

  let student1 = new Student("zaman", 31, 333);
  student1.setStudentId(444);
  console.log(student1.getStudentId());
  // student1.display();

  let user1 = new User("nur", 55);
  console.log(user1.userName);
  // user1.display();
