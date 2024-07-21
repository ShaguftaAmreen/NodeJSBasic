 const fs = require('fs');
// fs.readFile("index.js","utf8",(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync("index.js");
// console.log(a.toString());
// console.log("Hello Amreen here");

// fs.writeFile("file.txt","This is a new file.",()=>{
//     console.log("Hello everyone");
// })
const c=fs.writeFileSync("file.text","Write file sync");
console.log(c);
console.log("hello its me")