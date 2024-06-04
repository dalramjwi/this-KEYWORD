console.log(this);
function workThree(a, b) {
  console.log(this);
  return a + b;
}
workThree();
