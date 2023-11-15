// 生成成功的Promise
function createSuccessPromise(lang, delay) {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(lang);
            }, delay);
        });
    };
}

// 生成失败的Promise
function createFailurePromise(lang, delay) {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(lang);
            }, delay);
        });
    };
}

export { createSuccessPromise, createFailurePromise };
