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
  sentence: function () {
    return this.name + "배고파";
  },
};
console.log(itsME);
console.log(itsME.sentence());
