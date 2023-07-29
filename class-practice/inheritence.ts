// create class
class User {
    // properties, methods, constructor

    //property userName, age and decleare their type
    userName: string;
    age: number;
  
    //create constructor
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    //show result
    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  // use previous class 
  // inheritence part start
  
  // student class inherite user class
  class Student extends User {
    //assign new data property name studentId 
    studentId: number;
  
    //make constructor and using all perameter 
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }

    //show data in display
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
  }
  

  // create student and user object with data 
  let student1 = new Student("zaman", 28, 111);
  student1.display();
  
  let user1 = new User("nur", 29);
  user1.display();


  let student2 = new Student("moon", 30, 222);
  student2.display();
  
  let user2 = new User("babu", 31);
  user2.display();

