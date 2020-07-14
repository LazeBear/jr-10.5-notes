const array = [['jiangren'], 'fullstack', 1, 3];

// const company = array[0];
// const course = array[1];

// const [[company], course] = array;
// console.log(company);

// const [, , third, forth] = array;
// console.log(third);
// const [head, ...tail] = array;

// console.log(tail);

// const obj = { company: 'jiangren', course: 'fullstack' };

// const { company = true } = obj;
// console.log(company);

// const [first = true] = [];
// console.log(first);

function sum(a = 1, b = 2) {
  console.log(a + b);
}

const result = sum();
