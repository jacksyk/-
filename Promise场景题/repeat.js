// repeat(console.log, 5, 1000);
// 第一个参数为要打印的函数，第二个参数为要打印的次数，第三个参数为打印的间隔时间
function one(fn, delay, ...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn(...args);
            resolve();
        }, delay);
    });
}

function repeat(fn, timers, delay) {
    return async function (...args1) {
        for (let i = 0; i < timers; i++) {
            await one(fn, delay, ...args1);
        }
    };
}

repeat(console.log, 5, 1000)("hello", "cnm");
