const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000)
}

// const res = add(5, 5);
// const res2 = add(res, 5);
// const res3 = add(res2, 5);
// -----

add(5, 5, (res) => {
    add(res, 5, (res1) => {
        add(res1, 5, (res2) => {
            add(res2, 5, (res3) => {
                console.log(res3);
            })
        })
    })
})


