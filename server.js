const express = require("express");
const path = require("path");
var app = express();

// const bodyParser = require("body-parser");

const port =4000;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'backend/build')));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"build", "index.html"));
// });

var __dirname = path.resolve()
const buildPath = path.join(__dirname,'/build')
app.use(express.static(buildPath))
app.get("/", (req, res) => {
  res.sendFile(buildPath+"/index.html");
  // res.send("backend is working");
});


app.get("/login", (req, res) => {
  res.sendFile(buildPath+"/index.html");
  // res.send("backend is working");s
});


app.get("/signup", (req, res) => {
  res.sendFile(buildPath+"/index.html");
  // res.send("backend is working");
});
app.get("/shop", (req, res) => {
  res.sendFile(buildPath+"/index.html");
  // res.send("backend is working");
});

app.post('/login', (req, res) => {

  console.log(req.body);
  then(() => {
    res.sendFile(buildPath+"/index.html");
  }).catch(() => {
    res.status(400).send("not saved ")
  });
});




app.listen(port, () => {
  console.log(`Port is working on ${port}`);
});




