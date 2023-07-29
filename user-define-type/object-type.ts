// let user: object[];

// user= [{userId: 123, userName: "zaman"},
//         {userId1: 11, userName: "zam"},
//         {userId2: 22, userName: "nur"}];

// console.log(user[1])
/*
let user: {username:string, userId: number}

user = {username:"zaman", userId:123}

console.log(user)*/

let user2: object[];
user2= [];

let userData1: {userId:number, userName: string};
userData1= {userId: 123, userName: "zaman"};

user2.push(userData1)
// console.log(user2)

let userData2: {userId:number, userName: string};
userData2= {userId: 111, userName: "nur"};

user2.push(userData2)
// console.log(user2)

//console.log(user2)

for (const key in user2){
    console.log(user2[key]["userId"])
} 