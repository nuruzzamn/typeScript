// 1. class can have constructor, properties, methods

// 2. create object - let objectName = new className();


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
  
  //create object with data  
  let user1 = new User("zaman", 25);
  //show this data
  user1.display();
  
  //repeat for another object
  let user2 = new User("nur", 31);
  user2.display();