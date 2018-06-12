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

    // delete many
    db.collection("Todos")
      .deleteMany({ text: "Eat lunch" })
      .then(result => {
        console.log(result);
      });

    // // delete one
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // // fineOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // client.close();
  }
);
