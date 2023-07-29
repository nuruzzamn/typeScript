/*let username: () => void;


username = ( ) =>{
    console.log("username function");
}
username()*/
/*
let username: (x: string) => void;

username = ( x:string ) =>{
    return console.log(`My name is ${x}`);
}
console.log(username("zaman"))
*/
var userName;
userName = function (x, y) {
    return console.log("My name is ".concat(x, " and age ").concat(y));
};
console.log(userName("zaman", 34));
