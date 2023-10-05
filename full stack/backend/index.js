const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { UserRouter } = require("./route/User.route");
const jwt = require("jsonwebtoken");
// const { auth } = require("./middleware/auth.middleware");

const app = express();
app.use(express.json());
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.send("hello there");
});

// post

// app.use(auth);

app.get("/post", (req, res) => {
  const token = req.headers.authorization;
  if(token){
      jwt.verify(token.split(" ")[1], 'ankush', (err, decoded)=> {
          res.send("Post from Ankush");
        })
    }else{
        res.send({"err":"Please provide token"})
    }
});



app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("server is connected to DB");
  } catch (err) {
    console.log(err);
    console.log("cannot connect to DB");
  }
  console.log(`server is running on port ${process.env.Port}`);
});
