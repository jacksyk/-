function mySetTimeout(cb, delay) {
    let timer = null;
    timer = setInterval(() => {
        cb();
        clearInterval(timer);
    }, delay);
    return () => clearInterval(timer);
}

mySetTimeout(() => {
    console.log("hello world");
}, 1000);
