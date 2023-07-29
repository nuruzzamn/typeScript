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
// declare blank User array for store different user data 
var users = [];
//set value for user 1 and user 2 
var user1 = { id: 1, name: "zaman", age: 28 };
var user2 = { id: 2, name: "nur", age: 25 };
//push data on User array
users.push(user1);
users.push(user2);
// create a function for display
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
// call forEach loop for call each of User array data and send on printUserInfo function
users.forEach(function (user) { return printUserInfo(user); });
