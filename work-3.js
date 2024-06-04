console.log(this);
function workThree(a, b) {
  console.log(this);
  return a + b;
}
workThree();
let itsME = {
  name: "dalramjwi",
  age: "1",
  home: "tree",
  test: this,
};
console.dir(itsME.test);
