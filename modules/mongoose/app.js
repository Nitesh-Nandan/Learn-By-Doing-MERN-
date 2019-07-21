const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/albanero", { useNewUrlParser: true })
  .then(() => {
    console.log("connected succesfully");
  })
  .catch(error => {
    console.error(error);
  });
