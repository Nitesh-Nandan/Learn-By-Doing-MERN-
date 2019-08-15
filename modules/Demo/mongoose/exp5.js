const obj = {
    name: "Nitesh",
    msg: "Hey I am error message",
    error: false,
    then: function (resolve, reject) {
        if (!resolve && !reject) {
            return new Promise(function (resolve, reject) {
                if (this.error) {
                    reject("failed")
                }
                else {
                    resolve("success");
                }
            })
        }

        else if (resolve) {
            return new Promise(function (_resolve = resolve, reject) {
                if (this.error) {
                    reject("failed")
                }
                else {
                    _resolve("success");
                }
            })
        }
    }
}

obj.then((msg) => console.log(msg)).catch((msg) => {
    console.log(msg);
})

