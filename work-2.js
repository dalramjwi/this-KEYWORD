class workTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  set a(value) {
    if (typeof value === "number") {
      return (this._a = value);
    } else {
      throw new Error("a는 숫자만 입력 가능하다.");
    }
  }
  set b(value) {
    if (typeof value === "number") {
      return (this._b = value);
    } else {
      throw new Error("b는 숫자만 입력 가능하다.");
    }
  }
  add() {
    return this._a + this._b;
  }
}
let test = new workTwo(1, 2);
console.log(test);
// console.dir(test);
// console.log(test.add());
console.log(test instanceof workTwo);
