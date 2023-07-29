var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// create class
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
// use previous class 
// inheritence part start
// student class inherite user class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    //make constructor and using all perameter 
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    //show data in display
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, ", id: ").concat(this.studentId));
    };
    return Student;
}(User));
// create student and user object with data 
var student1 = new Student("zaman", 28, 111);
student1.display();
var user1 = new User("nur", 29);
user1.display();
var student2 = new Student("moon", 30, 222);
student2.display();
var user2 = new User("babu", 31);
user2.display();
