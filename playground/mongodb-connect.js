// const MongoClient = require("mongodb").MongoClient;

// var user = { name: "andrew", age: 25 };
// var { name } = user;
// console.log("name");
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("Todoapp");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    db.collection("Users").insertOne(
      {
        name: "Daniel",
        age: 48,
        location: "Largo, Florida"
      },
      (err, result) => {
        if (err) {
          return console.log("unable to insert todo", err);
        }
        console.log(result.ops[0]._id.getTimestamp());
      }
    );

    client.close();
  }
);
