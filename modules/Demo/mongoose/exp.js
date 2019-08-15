const test = (arg) => {
    return {
        then: function (resolve, reject) {
            return new Promise(function (undefined, reject) {
                if (arg % 2 == 0) {
                    resolve("success");
                }
                else {
                    reject("failed");
                }
            })
        }
    }
};

test(11).then(res => console.log(res)).catch(ex => console.log(ex));
test(10).then(res => console.log(res)).catch(ex => console.log(ex));