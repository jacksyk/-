import { createFailurePromise, createSuccessPromise } from "./createPromise.js";
function myPromiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        let count = 0,
            result = [];
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i]()
                .then((res) => {
                    count++;
                    result.push(res);
                    if (count === promiseArr.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        }
    });
}

let arr = [];
arr.push(createSuccessPromise("one", 300));
arr.push(createSuccessPromise("two", 300));

// 所有成功的示例
myPromiseAll(arr)
    .then((res) => {
        console.log("🚀 ~ file: all.js:26 ~ myPromiseAll ~ res:", res);
    })
    .catch((err) => {
        console.log("🚀 ~ file: all.js:30 ~ myPromiseAll ~ err:", err);
    });

arr.push(createFailurePromise("three", 300));

// 所有失败的示例
myPromiseAll(arr)
    .then((res) => {
        console.log("🚀 ~ file: all.js:26 ~ myPromiseAll ~ res:", res);
    })
    .catch((err) => {
        console.log("🚀 ~ file: all.js:30 ~ myPromiseAll ~ err:", err);
    });
