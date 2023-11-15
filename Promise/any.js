import { createFailurePromise, createSuccessPromise } from "./createPromise.js";
// 只要有一个promis成功就返回，只有所有Promise都拒绝才会拒绝
function myPromiseAny(promiseArr) {
    return new Promise((resolve, reject) => {
        let failArr = [],
            count = 0;
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i]()
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    failArr.push(err);
                    count++;
                    if (count === promiseArr.length) {
                        reject(failArr);
                    }
                });
        }
    });
}

let arr = [];
// arr.push(createSuccessPromise("one", 300));
arr.push(createFailurePromise("two", 200));
arr.push(createFailurePromise("three", 100));
arr.push(createFailurePromise("three", 99));

// 所有成功的示例
myPromiseAny(arr)
    .then((res) => {
        console.log("🚀 ~ file: all.js:26 ~ myPromiseAll ~ res:", res);
    })
    .catch((err) => {
        console.log("🚀 ~ file: all.js:30 ~ myPromiseAll ~ err:", err);
    });
