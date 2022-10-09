const express = require("express");
const path = require("path");
const cors = require("cors");
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
const port = 8000;

const { Schema } = mongoose;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });

var contacts = new Schema({
  username: String,
  phone: Number,
  email: String,
  password: String
  
});
var Detail = mongoose.model('Detail', contacts);





app.get("/",(req,res)=>{
  res.send("server is running")
})

app.post("/signupreq",(req, res)=>{
  // console.log(req.body.username);
  // console.log(req.body.phone);
  // console.log(req.body.email);
  // console.log(req.body.password);
  // console.log(req.body.confirmpassword);

  const { username, phone, email, password, confirmpassword} = req.body
  Detail.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const detail = new Detail({
              username,
              phone,
              email,
              password
          })
          detail.save((err) => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
})

app.post("/loginreq",(req, res)=>{
  // console.log(req.body.email);
  // console.log(req.body.password);
  const { email, password} = req.body
  Detail.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })



})






// app.post("/payment",(req, res)=>{
//   console.log(req.body.username);
//   console.log(req.body.phone);
//   console.log(req.body.email);
  
//   console.log(req.body);
// })





app.listen(port, () => {
  console.log(`Port is working on ${port}`);
});




