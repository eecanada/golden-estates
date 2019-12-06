const Zillow = require("node-zillow")
const zillow = new Zillow("X1-ZWz17j2vmb7tor_8b748")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

//middleware
app.use(cors());
app.options("http://localhost:3000", cors())
app.use(express.static("public"))
app.use(bodyParser.json())

app.post("/", cors(), (req,res)=>{
  console.log(req.body, "req.body is here")
  const parameters = {
    zpid:req.body.zpid
  }
  console.log(parameters)
  zillow.get('GetUpdatedPropertyDetails', parameters)
    .then(results =>{
      console.log(results)
      res.json({data: results.response})
    })
  })

  app.listen(8000, ()=>{
    console.log(`running on port ${8000}`)
  })