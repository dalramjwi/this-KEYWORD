const fs = require("fs");
const path = "utf8.csv";
const data = fs.readFileSync(path, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
});
const adata = data.split("\r\n");
const line = adata[0];
const sline = line.split(",");
// console.log(sline);
const wdata = adata[1];
const swdata = wdata.split(",");
// console.log(swdata);
function objMake(a, b) {
  let obj = {};
  obj = { [a]: b };
  return obj;
}
let test = objMake(sline[0], swdata[0], sline[1], swdata[1]);
const array = [];
array.push(test);
console.log(test);
