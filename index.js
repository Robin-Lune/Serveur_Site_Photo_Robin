const express = require("express");
const app = express();
const path = require("path");
const port = 3500;

app.use(express.static("./build"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port, () => {
  console.log("Server app en écoute sur le port " + port);
});
