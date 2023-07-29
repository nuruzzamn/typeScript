// enum example
// helps us to store constants
// numeric enum
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["readData"] = 2] = "readData";
    // ReadData = 2,
    UserRequest[UserRequest["saveData"] = 8] = "saveData";
    UserRequest[UserRequest["updateData"] = 9] = "updateData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.readData);
console.log(UserRequest.saveData);
//   // string enum
//   enum UserRequest {
//     ReadData = "READ_DATA",
//     // ReadData = 2,
//     SaveData = "SAVE_DATA",
//     UpdateData = "UPDATE_DATA",
//   }
//   console.log(UserRequest);
//   console.log(UserRequest.ReadData);
//   console.log(UserRequest.SaveData);
//   console.log(UserRequest["UpdateData"]);
//   // Heterogeneous enum
//     enum User {
//     id = 101,
//     name = "anisul",
//     }
var x;
x = "zaman";
x = 123;
// x= [123, "zaman"]
console.log(x);
