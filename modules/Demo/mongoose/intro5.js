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
            return new Promise(function (undefined, reject) {
                if (arg & 1) {
                    if (!callback) {
                        reject(msg);
                    }
                    else {
                        reject();
                    }
                }
                else {
                    if (!callback) {
                        resolve(`${arg}: is a Even Number`);
                    }
                    else {
                        resolve();
                    }

                }
            })
        }
    }
};

checkEven(10).then(res => console.log(res)).catch((ex) => console.log(ex));
checkEven(11).then(res => console.log(res)).catch((ex) => console.log(ex));

// const main = async () => {
//     const tt = checkEven(10);

//     console.log("wait");
// }
// main();