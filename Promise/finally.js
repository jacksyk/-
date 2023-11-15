// Promise.finally本身就是一个传递的作用。他返回一个promise，
// 然后返回的值其实是上一个then函数的返回值
Promise.prototype.myFinally = function (callback) {
    return this.then(
        (value) => {
            callback();
            return value;
        },
        (err) => {
            callback();
            throw err;
        }
    );
};

let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 1000);
});

myPromise1
    .then((res) => {
        return "第一次res" + res;
    })
    .then((res) => {
        console.log("🚀 ~ file: finally.js:27 ~ .then ~ res:", res);
        console.log(res);
    })
    .then((res) => {
        console.log("🚀 ~ file: finally.js:31 ~ .then ~ res:", res);
        console.log(res);
    })
    .then((res) => {
        console.log("🚀 ~ file: finally.js:35 ~ .then ~ res:", res);
        console.log(res);
    })
    .catch((err) => {
        console.log("🚀 ~ file: finally.js:26 ~ .then ~ err:", err);
    });
