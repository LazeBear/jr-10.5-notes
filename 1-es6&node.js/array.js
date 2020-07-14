const array = [1, 2, 3];

// item
// element
array.forEach(function (i) {
  console.log(i);
});

// if (true) { console.log('object'); }

// fat arrow, arrow function
// ->
array.forEach((i) => {
  return console.log(i);
});

array.forEach((i) => console.log(i));

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  callback(element);
}

sum(1, 2, 3);

function sum(a, b) {}
// a, b 是数字
// callback 是一个函数
// function sum(a, b, callback) {
//   callback(a + b);
// }

// const cb = function (total) {
//   console.log(total);
// };

// sum(1, 2, cb);

// map, filter, find, findIndex (indexOf), some, reduce
const array = [1, 2, 3];
const map = [1, 2, 3];

array.some((i) => {
  // 检测i为奇数
  return true;
  // 否则
  return false;
});
