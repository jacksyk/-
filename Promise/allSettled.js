import { createFailurePromise, createSuccessPromise } from "./createPromise.js";
// 该 Promise 在提供的所有 Promise 全部完成（无论是成功还是失败）后才会被解决（resolved）。
function myPromiseAllSettled(promiseArr) {
    return new Promise((resolve, reject) => {
        let resultArr = [],
            count = 0;
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i]()
                .then((res) => {
                    resultArr.push(res);
                    count++;
                    if (count === promiseArr.length) {
                        resolve(resultArr);
                    }
                })
                .catch((err) => {
                    resultArr.push(err);
                    count++;
                    if (count === promiseArr.length) {
                        resolve(resultArr);
                    }
                });
        }
    });
}

let arr = [];
// arr.push(createSuccessPromise("one", 300));
arr.push(createFailurePromise("two", 200));
arr.push(createFailurePromise("three", 100));
arr.push(createSuccessPromise("four", 99));

// 所有成功的示例
myPromiseAllSettled(arr)
    .then((res) => {
        console.log("🚀 ~ file: all.js:26 ~ myPromiseAllSettled ~ res:", res);
    })
    .catch((err) => {
        console.log("🚀 ~ file: all.js:30 ~ myPromiseAllSettled ~ err:", err);
    });
