/**
 * 自定义实现 Promise.all 功能
 * @param {Array} promises - Promise 数组或包含 Promise 的数组
 * @returns {Promise} 返回一个 Promise
 */
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('arguments must be an array');
    }

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let completedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(res => {
          results[index] = res;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reason => {
          reject(reason);
        });
    });
  });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
// const promise3 = Promise.reject('error');
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// console.log(promise3, 'ceshihihiii');

myPromiseAll([promise1, promise2, promise4])
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    throw new Error(err);
  })
