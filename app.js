const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Kaif Nazeer",
    email: "kaifnazeer@gmail.com",
    username: "kaifnazeer",
  });

  res.send(createduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.get("/readone", async (req, res) => {
  let user = await userModel.findOne({ username: "kaifnazeer" });
  res.send(user);
});

app.get("/update", async (req, res) => {
  const updateduser = await userModel.findOneAndUpdate(
    { username: "Kaif" },
    { name: "Muhammad Kaif Nazee" },
    { new: true }
  );

  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  let deleteduser = await userModel.findOneAndDelete({
    username: "kaifnazeer",
  });
  res.send(deleteduser);
});

app.listen(3000);
