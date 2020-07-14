let array = [0, 1, 2, 3];
// const a = {};
// const a = new Object();
// pass by reference (object, array), pass by value, primitive type (boolean, number, string)
const map = array.map((e) => {
  e * 2;
});
console.log(map);

let arr = [0, 1, 2, 3];
const res = arr.map((i) => {
  if (i % 2) {
    return i;
  }
  return undefined;
});
console.log(res);

var that = this;
