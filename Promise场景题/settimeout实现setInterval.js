function myInterval(cb, delay) {
    let timer = null;
    const task = () => {
        return setTimeout(() => {
            cb();
            timer = task();
        }, delay);
    };
    timer = task();
    return () => clearTimeout(timer);
}

// 写一个测试用例
let timer = myInterval(() => {
    console.log("hello world");
}, 1000);

setTimeout(() => {
    timer();
}, 3100);
