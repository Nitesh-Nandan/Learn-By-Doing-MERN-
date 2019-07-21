/*jslint es6 */

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectID;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const insertManyQuery = client => {
  const db = client.db(databaseName);
  db.collection("users")
    .insertMany([
      {
        name: "Nitesh Nandan",
        age: 23
      },
      {
        name: "Jerry",
        age: 25
      },
      {
        name: "John",
        age: 23
      },
      {
        name: "Aman Mishra",
        age: 25
      },
      {
        name: "India",
        age: 79
      }
    ])
    .then(arg => console.log("Sucess"))
    .catch("Failed");
};

const updateOne = client => {
  const db = client.db(databaseName);
  db.collection("users")
    .updateOne(
      {
        _id: new objectId("5d304c9624a3f839547d074c")
      },
      {
        $set: {
          name: "Mishra"
        }
      }
    )
    .then(() => console.log("successfully updated"))
    .catch(arg => console.log("Error occured: ", arg));
};

const updateOne = client => {
  const db = client.db(databaseName);
  db.collection("users")
    .updateOne(
      {
        _id: new objectId("5d304c9624a3f839547d074c")
      },
      {
        $set: {
          name: "Mishra"
        }
      }
    )
    .then(() => console.log("successfully updated"))
    .catch(arg => console.log("Error occured: ", arg));
};

const pp = MongoClient.connect(connectionUrl, { useNewUrlParser: true })
  .then(client => {
    // insertManyQuery(client);
    updateOne(client);
  })
  .catch(arg => {
    console.log("Error in connectiog: ", arg);
  });


