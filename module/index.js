"use strict";
// import { studentName,studentAge } from "./student";
// import { studentName as name, studentAge as age } from "./student";
/*
import * as studentData from "./student"

function displayStudentInfo(){
    console.log(`${studentData.studentName}, ${studentData.studentAge}`);
    }

displayStudentInfo() */
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var user1 = new user_1.User("nur", 55);
console.log(user1.userName);
// user1.display();
