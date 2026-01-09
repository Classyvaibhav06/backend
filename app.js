const express = require("express");
const app = express();
const port = 3000;
const User = require("./usermodel");
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/createuser", async (req, res) => {
  const newUser = await User.create({
    name: "vaibhav ki bandi",
    email: "bandi@gmail.com",
    password: "bandi123+",
  });

  res.send(newUser);
});

app.get("/updateuser", async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { name: "John Doe" },
    { name: "vaibhav ghoshi" },
    { new: true }
  );

  res.send(updatedUser);
});

// route for reading the data

app.get("/readuser",async (req,res)=>{
  let user = await usermodel.findOne()
  res.send(user);
})

//route for deleting a User

app.get("/deleteuser",async (req,res)=>{
  let user = await usermodel.findOneAndDelete({name:"vaibhav ghoshi"})
  res.send(user)
})

//listening the port

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
