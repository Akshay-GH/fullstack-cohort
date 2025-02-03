const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dualdeveloper002:akshay123@cluster0.cxhro.mongodb.net/user-todos"
);
const todosSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todosSchema);

module.exports = {
  todo,
};
