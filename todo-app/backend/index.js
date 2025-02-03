const express = require("express");
const cors = require("cors");
const { todo } = require("./db.js");
const { createTodo, updateTodo } = require("./types.js");
const app = express();

app.use(express.json());
app.use(cors({}));
app.get("/todo", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsePayLoad = createTodo.safeParse(createPayload);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "you sent the wrog input ",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo added to db ",
  });
});

app.put("/completed", async function (req, res) {
  const updatePayLoade = req.body;
  const parsePayLoad = updateTodo.safeParse(updatePayLoade);

  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "you sent the wrong input ",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
});

app.listen(3000, () => {
  console.log("app is hosted at http://localhost:3000/");
});
