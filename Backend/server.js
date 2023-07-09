const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to me");
});

mongoose
  .connect(
    "mongodb+srv://todolist:todolist@cluster0.cthhuqm.mongodb.net/Node-api?retryWrites=true&w=majority"
  )

  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })

  .catch(() => {
    console.log("error connecting to database");
  });
