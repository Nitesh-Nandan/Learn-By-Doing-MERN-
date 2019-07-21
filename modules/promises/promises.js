var fun = arg => {
  console.log(arg);
};

var fx = (var1, callback) => {
  // doing some opeariont of var 1;
  var1 = var1 * 1000;
  callback(var1); // callback
};

fx(2, fun);
