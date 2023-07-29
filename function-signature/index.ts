///a

// void function 
/*let username: () => void;


username = ( ) =>{
    console.log("username function");
}
username()*/

/* return 1 syring parameter 
let username: (x: string) => void;

username = ( x:string ) =>{
    return console.log(`My name is ${x}`);
}
console.log(username("zaman"))
*/

//return 2 parameter
let userName: (x:string, y:number)=> void;

userName = (x, y)=>{
    return console.log(`My name is ${x} and age ${y}`)
}
console.log(userName("zaman", 34))
