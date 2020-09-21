var express = require('express');
var router = express.Router();
var {url,mongoClient}=require("../config")
var bcrptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const {authenticate}=require("../common/auth")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async function(req, res, next) {
  var client=await mongoClient.connect(url,{useUnifiedTopology: true })
  var db=client.db("login")
  var user=await db.collection("users").findOne({"email":req.body.email})
  if(user){
    res.json({
      message:"User already exist"
    })
  }
else{
  var salt=await bcrptjs.genSalt(10)
  var hash=await bcrptjs.hash(req.body.password,salt)
  req.body.password=hash

  await db.collection("users").insertOne(req.body)
  res.json({
    message:"inserted"
  })
}
});

router.post('/login', async function(req, res, next) {
  try{var client=await mongoClient.connect(url,{useUnifiedTopology: true })
  var db=client.db("login")
  var user=await db.collection("users").findOne({"email":req.body.email})
if(user){

  var result=await bcrptjs.compare(req.body.password,user.password)
  
  if(result){
    let token=jwt.sign({id:1},"12345")
    res.json({
      message:"allow",
      token
    })}else{
      res.json({
        message:"wrong password"
      })
    }
  }
else{
  res.json({
    message:"no user found"
  })
}}catch(err){console.log(err)}

});

router.post('/reset', async function(req, res, next) {
  try{var client=await mongoClient.connect(url,{useUnifiedTopology: true })
  var db=client.db("login")
  var user=await db.collection("users").findOne({"email":req.body.email})
if(user){

  var salt=await bcrptjs.genSalt(10)
  var hash=await bcrptjs.hash(req.body.password,salt)
  req.body.password=hash

  var update=await db.collection("users").findOneAndUpdate({"email":req.body.email},{$set:{"password":req.body.password}})
  res.json({
    message:"password updated"
  })
  
  }
else{
  res.json({
    message:"no user found"
  })
}}catch(err){console.log(err)}

});

router.get('/dashboard',authenticate, function(req, res, next) {
  res.json({
    message:"protected route"
  });
});

module.exports = router;
