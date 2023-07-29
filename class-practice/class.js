// 1. class can have constructor, properties, methods
// 2. create object - let objectName = new className();
var User = /** @class */ (function () {
    //create constructor
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    //show result
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
//create object with data  
var user1 = new User("zaman", 25);
//show this data
user1.display();
//repeat for another object
var user2 = new User("nur", 31);
user2.display();
