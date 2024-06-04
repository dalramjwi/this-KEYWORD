const fs = require("fs");
const path = "utf8.csv";
const data = fs.readFiles(path, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
});
console.log(data);
