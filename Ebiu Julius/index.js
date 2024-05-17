//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");




require("dotenv").config();


const port = 3000;

//for importing routes
const refactoryRoutes = require("./routes/refactoryRoutes");

//Instantiations
const app = express();

 //Configurations
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });


app.set("view engine", "pug"); //setting engine to pug
app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found



//Middleware
app.use(express.static(path.join(__dirname, "public"))); //set for directory static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//use imported routes
app.use("/", refactoryRoutes);


//For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL");
});


//Always the last line in your code
app.listen(port, () => console.log(`listening on port ${port}`));
