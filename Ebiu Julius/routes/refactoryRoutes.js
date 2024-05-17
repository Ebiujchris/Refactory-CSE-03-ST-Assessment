const express = require("express");
const router = express.Router();

//import model
const  Refactory= require("../models/refactoryModel");


router.get("/registerStudent",(req, res)=>{
  res.render("studentForm");
});

//post route 
//using the async function
router.post("/registerStudent", async(req, res)=>{
  try{
    const student = new Refactory(req.body)
    console.log(student);
    await student.save();
    res.redirect("/registerStudent");
    
  } catch (error) {
     res.status(400).send("error, student not registered")
     console.log("Error registering ..",error);
  }
 
});



module.exports = router;