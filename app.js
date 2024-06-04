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
//*sline은 만들어질 객체의 key 배열이다.
// console.log(sline);
for (let i = 1; i < adata.length; i++) {
  const wline = adata[i];
  const awline = wline.split(",");
  //*awline은 value값에 해당하는 배열 원본이다.
  const larr = [];
  larr.push(awline[0]);
  //* larr은 awline의 0번 배열 모음이다, 한글
  console.log(larr[1]);
}

function makeobj(a, b) {
  let obj = {};
  obj = { [a]: b };
}
// console.log(adata.length);
// for (let i = 1; i < adata.length; i++) {
//   const wline = adata[i];
//   const swline = wline.split(",");
//   // console.log(swline);
//   for (let j = 0; j < sline.length; j++) {
//     let result = objMake(sline[j], swline[j]);
//     let stringresult = result.toString();
//     console.log(result);
//   }
// }
// function objMake(a, b) {
//   let obj = {};
//   obj[a] = b;
//   return obj;
// }
// // console.log(sline[1]);
// const nameline = swline[0];
// console.log(nameline);
// const wdata = adata[1];
// const swdata = wdata.split(",");
// // console.log(swdata);
// function objMake(a, b) {
//   let obj = {};
//   obj = { [a]: b };
//   return obj;
// }
// let test = objMake(sline[0], swdata[0], sline[1], swdata[1]);
// const array = [];
// array.push(test);
// console.log(test);
