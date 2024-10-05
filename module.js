const os = require("node:os");
const path = require("path");
const moment = require("moment");

console.log(os.platform());
console.log(os.release());
console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem()/1024/1024/1024);
console.log(path.parse("C:\Users\kavitha\OneDrive\Desktop\kavitha\New folder\Javascript and react.js\first\client\internal and external modules"));
console.log(moment().format("Do MMMM YYYY h:m:s a"));