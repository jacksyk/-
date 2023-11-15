function createRandomArr() {
    let res = [];
    for (let i = 0; i < 5; i++) {
        res.push(Math.floor(Math.random() * 10));
    }
    return res;
}

export { createRandomArr };
