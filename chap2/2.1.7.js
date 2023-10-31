// promise

const condition = true;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("success");
  } else {
    reject("fail");
  }
});

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// promise all
const promise1 = Promise.resolve("s1");
const promise2 = Promise.resolve("s2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));

// allsettled
const p1 = Promise.resolve("s1");
const p2 = Promise.reject("f1");
const p3 = Promise.resolve("s3");
Promise.allSettled([p1, p2, p3]).then((result) => console.log(result));

// try {
//   Promise.reject("e");
// } catch (e) {
//   console.log(e);
// }

Promise.reject("err").catch((err) => console.log(err));
