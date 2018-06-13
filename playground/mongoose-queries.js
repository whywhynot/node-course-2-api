const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "5b205586d614ef3294218126";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todo", todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo By Id", todo);
  })
  .catch(e => console.log(e));

// User.findById("5b2053460f436f2c702e5c6d").then(
//   users => {
//     if (!users) {
//       return console.log("Unable to find user");
//     }

//     console.log(JSON.stringify(users, undefined, 2));
//   },
//   e => {
//     console.log(e);
//   }
// );

// 5b203f94ae2a0732bc9fd48f
