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

// this doesnt have to match
app.get('/', (req, res) => {
  res.send('hit the home route!')
})


app.post("/", cors(), async (req,res)=>{

  const getSearchResultsParameters = {
    address: req.body.address,
    citystatezip: req.body.citystatezip,
    rentzestimate: req.body.rentzestimate
  } 

  const zpid = await zillow.get("GetSearchResults", getSearchResultsParameters ).then(results => {
    return results.response.results.result[0].zpid[0]
  })

  const getUpdatedPropertyparameters = {
   zpid:zpid
  }

  console.log(getUpdatedPropertyparameters)
  await zillow.get('GetUpdatedPropertyDetails', getUpdatedPropertyparameters)
     .then(results => {
       if(results.message.code === '0'){
         
        res.json({data: results.response})
       } else {
         res.json({data: {}, status: {message: "REQUEST UNSUCCESSFUL", code: 400}})
       }
     })
  })



  

  app.listen(8000, ()=>{
    console.log(`running on port ${8000}`)
  })