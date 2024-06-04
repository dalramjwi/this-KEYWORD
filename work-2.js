class workTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  set a(value) {
    if (typeof value === "number") {
      return (this._a = value);
    }
  }
}
let test = new workTwo(1, 2);
console.log(test);
