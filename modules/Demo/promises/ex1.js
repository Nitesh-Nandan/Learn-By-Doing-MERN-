//  problem

const add = (a, b) => {
    setTimeout(() => {
        return a + b;
    }, 1000);
}


console.log(add(3, 4));


// callback

const add1 = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000)
}


const print = (res) => console.log(res);

add1(5, 5, print);