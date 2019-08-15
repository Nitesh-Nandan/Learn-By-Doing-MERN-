const fx = async () => {
    setTimeout(() => {
        return "Success";
    }, 2000)
}

const add = (a, b) => {
    return new Promise(function (resolve, reject) => {
    setTimeout(() => {
        resolve(a + b);
    }, 2000);
})
}
// type 1
add(2, 3)
    .then((sum) => {
        add(sum, 5)
            .then((sum) => {
                console.log(sum);
            })
            .catch(() => {
                console.log("Error")
            });
    })
    .catch(() => {
        console.log("Error")
    });

// type 2

add(2, 3).then((sum) => {
    console.log(sum);
    return add(sum, 5);
}).then((sum) => {
    console.log(sum);
    return add(sum, 10);
}).then((sum) => {
    console.log(sum);
}).catch(() => console.log("Error occured!!"));


// Type 3
const res = async () => {
    let sum1 = await add(2, 3);
    let sum2 = await add(sum1, 5);
    let sum3 = await add(sum2, 10);
    let sum4 = await add(sum3, 10);
    return sum4;
}

res().then((sum) => {
    console.log("The sum is: ", sum);
}).catch(() => {
    console.log("Error");
})