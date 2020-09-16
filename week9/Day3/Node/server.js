var studentcount=0,mentorcount=0
const PORT = process.env.port || 3000;
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.json())
const mongodb=require("mongodb");
const mongoclient=mongodb.MongoClient;
const url="mongodb://localhost:27017";

//create student and mentor.......................
app.post("/student",async function(req,res){
studentcount++;    
let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
let db=client.db("taskdata")
await db.collection("students").insertOne({_id:studentcount,name:req.body.name,mentor:[]})
client.close()


    //     students.push(
//         {   _id:students.length+1,
//             name:req.body.name,
//             mentor:[]
//         }
//     )
    res.json({message:"student added"})
})
app.get("/students",async function(req,res){
    let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
    let db=client.db("taskdata")
    let arr=await db.collection("students").find().toArray()
    client.close() 
    res.json(arr)
})
app.post("/mentor",async function(req,res){
    mentorcount++;    
    let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
    let db=client.db("taskdata")
    await db.collection("mentors").insertOne({_id:mentorcount,name:req.body.name,studentslist:[]})
    client.close()
   
    // mentors.push(
    //     {   _id:mentors.length+1,
    //         name:req.body.name,
    //         studentslist:[]
    //     }
    // )
   res.json({message:"mentor added"})
})
app.get("/mentors",async function(req,res){
    let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
    let db=client.db("taskdata")
    let arr=await db.collection("mentors").find().toArray()
    client.close() 
    res.json(arr)
})
//get students list from mentor id..........................
app.get("/studentsof/:id",async function(req,res){
   try{
    let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
    let db=client.db("taskdata")
    let id=+req.params.id
    let mentor=await db.mentors.find({"_id":id}).toArray(),arr=[]
    mentor["studentslist"].forEach(id => {
             arr.push(students[id])
            })     
    res.json(arr)}catch(err){
        console.log(err);
        res.json({"message":"error!"})}
})
//assign a mentor to student...................
app.post("/mentorofstudent/:s_id/:m_id",async function(req,res){
    try{
    let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
    let db=client.db("taskdata")
    let s_id=+req.params.s_id
    let m_id=+req.params.m_id
    await db.students.findOneAndUpdate({"_id":s_id},{$set:{"mentor":[m_id]}})
    // students[req.params.s_id-1]["mentor"][0]=+req.params.m_id
   res.json({message:"mentor added to student"})}catch(err){
    console.log(err)   
    res.json({"message":"error!"})}
})
//assign students to mentor..................................
app.post("/studentsofmentor/:m_id",async function(req,res){
    try{
    var m_id=+req.params.m_id
    var list=req.body.arr
    let client=await mongoclient.connect(url,{ useUnifiedTopology: true })
    let db=client.db("taskdata"),arr=[]
    db.mentors.findOneAndUpdate({"_id":m_id},{$set:{"studentslist":req.body.arr}})
    res.json({message:"students added"})}catch(err){
        console.log(err)
        res.json({"message":"error!"})}

})
app.listen(PORT, () => console.log(`server running on ${PORT}`));




