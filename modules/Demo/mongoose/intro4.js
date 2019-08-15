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
            return new Promise(function (resolve, reject) {
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
    }
};

checkEven(10).then().then(res => console.log(res));

const main = async () => {
    const tt = checkEven(10);

    console.log("wait");
}
main();