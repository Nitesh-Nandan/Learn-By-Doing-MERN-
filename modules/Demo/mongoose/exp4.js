
const evenTester = (arg) => {
    return {
        then: function (resolve, reject) {
            setTimeout(() => {
                console.log(resolve);
                resolve(`${arg}:this is your no.`);
            }, 1000)
        }
    }
}


const main = async () => {
    const msg = await evenTester(100);
    console.log(msg);
}

main();

evenTester(100).then((res) => {
    console.log(res);
});