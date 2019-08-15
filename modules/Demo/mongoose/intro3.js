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
        then: new Promise(function (resolve, reject) {
            if (arg & 1) {
                if (callback != undefined) reject();
                else reject(msg);
            }
            else {
                if (callback != undefined) resolve();
                else resolve(`${arg}: is a Even Number`);
            }
        })
    }
};

// throw error

const main = async () => {
    console.log(typeof (checkEven(10).then()));
}
main();