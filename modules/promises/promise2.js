let fx = arg1 => {
  console.log(arg1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arg1 * 10);
    }, 2000);
  });
};

let fy = arg1 => {
  console.log(arg1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arg1 * 10);
    }, 2000);
  });
};

let fz = arg1 => {
  console.log(arg1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arg1 * 10);
    }, 2000);
  });
};

const outPut = arg => {
  console.log(arg);
};

// fx(100)
//   .then(fy)
//   .then(fz)
//   .then(outPut)
//   .catch("Error!! occured");

const tx = arg => {
  console.log(arg);
};

const ty = arg => {
  console.log("Error");
};

fx(100)
  .then(tx)
  .catch(ty);
