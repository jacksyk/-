// 封装一个工具函数输入一个promiseA返回一个promiseB如果超过1s没返回则抛出异常如果正常则输出正确的值
let tempPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error");
    }, 1000);
});

function translatePromise(promiseA) {
    return new Promise((resolve, reject) => {
        Promise.race([promiseA, tempPromise])
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 500);
});

translatePromise(myPromise)
    .then((res) => {
        console.log("🚀 ~ file: 超出时间报错.js:27 ~ res:", res);
    })
    .catch((err) => {
        console.log(
            "🚀 ~ file: 超出时间报错.js:29 ~ translatePromise ~ err:",
            err
        );
    });
