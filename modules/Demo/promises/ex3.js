const add = (a, b) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(a + b);
        }, 1000)
    })
}


add(5, 5)
    .then(res => add(res, 5))
    .then(res => add(res, 5))
    .then(res => add(res, 5))
    .then(res => console.log(res));