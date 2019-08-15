const evenTester = (param, callback) => {
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
            callback(undefined, res);
        }

    }
    else {
        return {
            then: function (resolve, reject) {
                setTimeout(() => {
                    if (error) {
                        reject(res);
                    }
                    else {
                        resolve(res);
                    }
                }, 1000);
            }
        }
    }
}


const main = async () => {
    const msg = await evenTester(100);
    console.log(msg);
}

main();
