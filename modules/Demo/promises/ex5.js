const add = (a, b) => {
    return a + b;
}


const main = async () => {
    let res = await add(5, 5);
    res = await add(res, 5);
    res = await add(res, 5);
    res = await add(res, 5);

    console.log(res);

}

// let ff = await add(10, 10);
console.log(ff);

main();