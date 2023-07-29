/*

// without interface

//let decleare empty users array for store multiple users data 
let users: {
    //decleare syntax
    id: number,
    name: string,
    age: number,
  }[] = [];
  
  // declare user 1 data with syntax
  let user1: {
    id: number,
    name: string,
    age: number,
  } = {
    id: 1,
    name: "zaman",
    age: 28,
  };
  
  // declare user 2 data with syntax
  let user2: {
    id: number,
    name: string,
    age: number,
  } = { id: 2, 
        name: "nur", 
        age: 25 };
  
  //push those two user in users array
  users.push(user1);
  users.push(user2);
 // console.log(users);
  
 //create a function print user info for display user data
  const printUserInfo = (user: { id: number, name: string, age: number }) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
  };

  //call each of users data and send on printUserInfo function 
  users.forEach((user)=> printUserInfo(user));
  
  */


// interface are use for decleare a group of syntax data which use in differnt time in again and again
// its helps us for clean code and easy to understand

  // with interface

  //create a interface named User
  interface User {
    //decleare syntax
    id: number;
    name: string;
    age: number;
  }
  
  // declare blank User array for store different user data 
  let users: User[] = [];
  
  //set value for user 1 and user 2 
  let user1: User = { id: 1, name: "zaman", age: 28 };
  let user2: User = { id: 2, name: "nur", age: 25 };
  
  //push data on User array
  users.push(user1);
  users.push(user2);
  
  // create a function for display
  const printUserInfo = (user: User) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
  };
  
  // call forEach loop for call each of User array data and send on printUserInfo function
  users.forEach((user) => printUserInfo(user));