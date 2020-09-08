// fulfilled, rejected, pending
// promise 解决 callback hell

// function asyncSum(a, b, cb) {
//   setTimeout(() => {
//     console.log(a + b);
//     cb(a + b);
//   }, Math.random() * 1000);
// }

// function sumAll() {
//   asyncSum(1, 1, (result) => {
//     ////
//     asyncSum(1, result, (result2) => {
//       asyncSum(1, result2, () => {});
//     });
//     ///
//   });
// }

function asyncSum(a, b) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log(a + b);
        res(a + b);
      } else {
        rej('nooo');
      }
    }, Math.random() * 1000);
  });
}

// promise chain
// function sumAll() {
//   asyncSum(1, 1)
//     .then((result) => {
//       return asyncSum(1, result);
//     })
//     .then((result) => asyncSum(1, result))
//     .catch((error) => {
//       console.log(error);
//     });
// }

//async await
async function sumAll() {
  try {
    let result = await asyncSum(1, 1);
    result = await asyncSum(1, result);
    result = await asyncSum(1, result);
  } catch (error) {
    console.log(error);
  }
}
// (async () => { await asyncSum(1, 1) })();

sumAll();
