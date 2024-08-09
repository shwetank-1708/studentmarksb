const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/formpage", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.get("/getUsers", (req, resp) => {
  User.find()
    .then((users) => resp.json(users))
    .catch((err) => resp.json(err));
});

app.listen(5000);
