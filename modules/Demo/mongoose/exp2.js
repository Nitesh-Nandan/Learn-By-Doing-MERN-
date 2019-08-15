const evenTester2 = (param, callback) => {
    let even = param;
    let error = false;
    let res = "This is even Number";
    if (even & 1) {
        error = true;
        res = "This is odd Number";
    }

    if (callback !== undefined) {
        if (error) {
            callback(true, res);
        }
        else {
            callback(undefined, `${even} is even Number.`);
        }

    }
    else {
        return new Promise(function (resolve, reject) {
            if (error) {
                reject(res);
            }
            else {
                resolve(`${even} is even Number.`);
            }
        })

    }
}

const promise = evenTester2(101);
promise.then((res) => {
    console.log(res);
}).catch(err => {
    console.log("Some error Occured!!");
})

const promise2 = evenTester2(100);
promise2.then((res) => {
    console.log(res);
}).catch(err => {
    console.log("Some error Occured!!");
})