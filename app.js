const fs = require("fs");
const path = "utf8.csv";
const data = fs.readFileSync(path, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
});
const adata = data.split("\r\n");
const line = adata[0];
// console.log(adata);
const sline = line.split(",");
// console.log(sline);
function objMake(a, b) {
  let obj = {};
  obj = { [a]: b };
  return obj;
}
let test = objMake(sline, "A");
console.log(test);
