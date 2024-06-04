const fs = require("fs");
const path = "utf8.csv";
const data = fs.readFileSync(path, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
});
const splitdata = data.split("\r\n");
const name = splitdata[0].split(",");
// console.log(splitdata);
// console.log(name);
let arr = [];
for (let i = 1; i < splitdata.length; i++) {
  let listArr = splitdata[i].split(",");
  let local = {};
  for (let j = 0; j < name.length; j++) {
    let obj = {};
    let a = name[j];
    let b = listArr[j];
    local[a] = b;
  }
  arr.push(local);
}
let parse = JSON.stringify(arr);
console.log(parse);
fs.writeFile("parse.json", parse, (err) => {});
// console.log(arr);
