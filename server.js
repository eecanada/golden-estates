const Zillow = require("node-zillow")
const zillow = new Zillow("X1-ZWz17j2vmb7tor_8b748")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const methodOverride = require('method-override')
const session = require('express-session')


const usersController = require('./controllers/users')
const homesController = require('./controllers/homes')
// using process.env.PORT is when I deploy my app online ti will check to use if the is any environmental variable called PORT and if there isnt then it will go to PORT 8000
const PORT = process.env.PORT || 8000

require('./database/database')

//middleware
app.use(cors());
app.options("http://localhost:3000", cors())
app.use(express.static("public")) //
app.use(express.json()) //
app.use(methodOverride('_method')); //

app.use(session({
  secret: "this is a random secret string",
  resave: false,
  saveUninitialized: false 
}))

// taking json that is sent from the client,to the server and it is going to parse it 
app.use(bodyParser.json())


// this is my home page
app.get('/', (req, res) => {
  res.send()
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

  // setting up my user route
  app.get('/registration', (req,res)=>{
    res.render()
  })
 
  // // telling express app to use this route 
  app.use('/users',usersController)
  app.use('/homes',homesController)

  app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
  })