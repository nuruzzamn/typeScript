// let user: object[];
// user= [{userId: 123, userName: "zaman"},
//         {userId1: 11, userName: "zam"},
//         {userId2: 22, userName: "nur"}];
// console.log(user[1])
/*
let user: {username:string, userId: number}

user = {username:"zaman", userId:123}

console.log(user)*/
var user2;
user2 = [];
var userData1;
userData1 = { userId: 123, userName: "zaman" };
user2.push(userData1);
// console.log(user2)
var userData2;
userData2 = { userId: 111, userName: "nur" };
user2.push(userData2);
// console.log(user2)
//console.log(user2)
for (var key in user2) {
    console.log(user2[key]["userId"]);
}
