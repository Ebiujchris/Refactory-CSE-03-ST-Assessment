//introducing mongoose
const mongoose = require("mongoose");

//using the function to build schema
const refactorySchema = new mongoose.Schema(
  {
firstName: {type:String},
lastName:{ type:String, trim:true},
course:{ type:String, trim:true},
entrySchema:{ type:String, trim: true},
intake: { type: String, trim: true},
sponsorship: {type: String, trim: true},
gender: {type: String, trim: true},
dateOfBirth: {type: String, trim: true},
residence: {type: String, trim: true}
  }

);


module.exports = mongoose.model("Refactory",refactorySchema);