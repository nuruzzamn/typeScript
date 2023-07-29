// import { studentName,studentAge } from "./student";
// import { studentName as name, studentAge as age } from "./student";
/*
import * as studentData from "./student"

function displayStudentInfo(){
    console.log(`${studentData.studentName}, ${studentData.studentAge}`);
    }

displayStudentInfo() */

import { User } from "./user";

let user1 = new User("nur", 55);
console.log(user1.userName);
// user1.display();