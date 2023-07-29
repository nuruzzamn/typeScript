// enum example
// helps us to store constants

// numeric enum
enum UserRequest {
    readData = 2,
    // ReadData = 2,
    saveData=8,
    updateData,
  }
  
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
  
let x: any;

x= "zaman";
x= 123;
// x= [123, "zaman"]

console.log(x)