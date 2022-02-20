const express = require("express");
const os = require("os");
const app = express();

//app.get('/', post.createPost);

app.get("/", (req, res) => {
  return res.json(`${os.hostname()}`);
});

app.listen(3000, () => console.log(`${os.hostname()}`));
