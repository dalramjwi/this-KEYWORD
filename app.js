const fs = require("fs");
const path = "한국전력공사_지역별 전기차 충전기 현황정보_20221231.csv";
fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
