function onePromise(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i);
        }, 1000);
    });
}

async function test() {
    for (let i = 1; i < 6; i++) {
        let res = await onePromise(i);
        console.log(res);
    }
}

test();
