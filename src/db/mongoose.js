const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("connected succesfully");
  })
  .catch(error => {
    console.error(error);
  });

const user = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const me = new user({
  name: "Andrew",
  age: 27
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log(error);
  });
