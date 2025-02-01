const fs = require("fs");

// Synchronous -Blocking operation
// fs.writeFileSync("./test.txt","hey there");

// Asynchronous - non blocking operation
// fs.writeFile("./test.txt","hey Anand",(err)=>{});

// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result)

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./contact.txt",new Date().getDate().toLocaleString());

// fs.appendFileSync("./contact.txt", new Date().toLocaleString() + '\n');

// file copy
// fs.cpSync("./contact.txt","./copy.txt")

// file delete
// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./contact.txt").isFile());

// create folder
// fs.mkdirSync("my-docs/")

// fs.mkdirSync("my-docss/a/b",{recursive:true})