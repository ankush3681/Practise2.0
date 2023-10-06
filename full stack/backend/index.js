const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { UserRouter } = require("./route/User.route");
const jwt = require("jsonwebtoken");
const { auth } = require("./middleware/auth.middleware");
const { NoteRouter } = require("./route/Note.route");

const app = express();

app.use(express.json());

app.use("/user", UserRouter);

app.use(auth);  //middleware

app.use("/note", NoteRouter);

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
