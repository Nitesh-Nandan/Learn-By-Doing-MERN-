const mongoose = require('mongoose');
const Employee = require('./model');
const dbName = "api-demo"; //api-demo  authentication

const url = "mongodb://localhost:27017/" + dbName;

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then((arg) => {
    console.log("Mongoose connected Successfully");
    main();
}).catch((err) => {
    // main();
    console.log("Error!! Connecting to DB: ", err);
});


const main = () => {
    Employee.find({ eid: 101 }).then(res => console.log("type1"));
    console.log("---------------------------");
    Employee.find({ eid: 101 }).then(res => console.log("type2")).catch(ex => console.log("Error Occured ", ex));
    console.log("---------------------------");
    Employee.find({ eid: 101 }).then((res) => {
        console.log("type3");
    }, (err) => {
        console.log("Error Occured ", ex);
    });
    console.log("---------------------------");

    Employee.find({ eid: 101 }, (res) => console.log("type4"), (err) => console.log("err4"));

    Employee.find({ eid: 101 }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log("Error Occured ", ex);
    }).then(res => console.log("this is test", res)).catch(err => console.log(err));
    console.log("Finished");
}


const main2 = () => {
    const query = Employee.find({});
    const query2 = Employee.find({}).then;

    //  what about query.then()??

    const query3 = Employee.find({}).exec();

    console.log("wait");
}

