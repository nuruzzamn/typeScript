/*
// create custom type
type User = { userName: string, userId: number };

//create array object
let users: User[];
//decleare a blank array
users = [];

//assign custom type User
let user1: User;
//set value
user1 = { userName: "zaman", userId: 101 };
//push data in users array
users.push(user1);

//repeate for user2
let user2: User;
user2 = { userName: "nur", userId: 102 };
users.push(user2);

//repeate for user3
let user3: User;
user3 = { userName: "moon", userId: 103 };
users.push(user3);

// console.log(users);
// */
// let getRequest: RequestType;
// getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
