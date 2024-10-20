// index.ts
import express2 from "express";

// user.ts
import express from "express";
var userRouter = express.Router();
userRouter.get("/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Hello ${username}!`);
});
var user_default = userRouter;

// index.ts
var app = express2();
var logger = (req, res, next) => {
  console.log(`Require made: ${req.method} ${req.url}`);
  next();
};
app.use("/user", logger);
app.use("/user", user_default);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/text", (req, res) => {
  res.send("Hello World!");
});
app.get("/json", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.get("/search", (req, res) => {
  const { keyword = "" } = req.query;
  res.send(`The keyword is ${keyword}`);
});
app.use(express2.json());
app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === "TimChen" && password === "123456") {
    const token = { status: "login", username: "TimChen" };
    res.json(token);
  } else {
    res.status(400).json({ error: "Invalid username or password" });
  }
});
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
