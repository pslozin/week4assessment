const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs")

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

function postnewName (req,res) 
{
    // console.log(req.data);
    res.status(200).send(req.data);
}

app.get("/api/compliment", getCompliment);
//app.post("/api/names", postnewName);

app.post("/api/names", (req,res) => {
 //console.log("Received",req.body)   
 res.status(200).send(req.body);

  });

  app.post("/api/hash", (req,res) => {
    console.log("Received",req.body)   
    let {hashname} = req.body
    let newhs = bcrypt.hashSync(hashname)
  
    
    res.status(200).send(newhs);
   
     });

app.listen(4000, () => console.log("Server running on 4000"));




