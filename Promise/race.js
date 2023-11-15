import { createFailurePromise, createSuccessPromise } from "./createPromise.js";
function myPromiseRace(promiseArr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i]()
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        }
    });
}

let arr = [];
arr.push(createSuccessPromise("one", 300));
arr.push(createSuccessPromise("two", 200));
arr.push(createSuccessPromise("three", 100));
arr.push(createFailurePromise("three", 99));

// 所有成功的示例
myPromiseRace(arr)
    .then((res) => {
        console.log("🚀 ~ file: all.js:26 ~ myPromiseAll ~ res:", res);
    })
    .catch((err) => {
        console.log("🚀 ~ file: all.js:30 ~ myPromiseAll ~ err:", err);
    });
