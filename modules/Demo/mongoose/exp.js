// let promise = new Promise(function (resolve, reject) {
//     resolve("hello");
// });

// promise.then((res) => console.log(res));


const obj = {
    name: "Nitesh",
    msg: "Hey I am error message",
    error: true,
    then: function (resolve, reject) {
        const self = this;
        if (self.error) {
            reject(self.msg);
        }
        else {
            resolve(self.name);
        }
    }
}

obj.then((name) => {
    console.log(name);
}, (err) => {
    console.log(err);
})


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
                if (error) {
                    reject(res);
                }
                else {
                    resolve(res);
                }
            }
        }
    }
}


evenTester(10, (err, res) => {
    if (err) {
        console.log("error occured");
    }
    else {
        console.log("Succesfully executed: ", res);
    }
});

let tt = evenTester(5);
tt.then(res => {
    console.log(res);
}, (err) => {
    console.log("Some error occurred!!!");
});


const main = async () => {
    const
}



///---------------------------

