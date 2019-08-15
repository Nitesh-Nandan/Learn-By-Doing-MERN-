const checkEven = (arg, callback) => {

    const msg = "Error!! not a even number";
    const error = false;

    if (callback != undefined) {
        if (arg & 1) {
            callback(msg, undefined);
        }
        else {
            callback(undefined, `${arg}: is a Even Number`);
        }
    }

    return {
        then: function (resolve, reject) {
            if (arg & 1) {
                if (callback != undefined) reject();
                else reject(msg);
            }
            else {
                if (callback != undefined) resolve();
                else resolve(`${arg}: is a Even Number`);
            }
        }
    }
};


checkEven(10, function (err, res) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
});


checkEven(10, function (err, res) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
}).then(res => console.log("see :", res));


checkEven(10).then(res => console.log("see :", res));