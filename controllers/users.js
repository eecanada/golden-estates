// bringing in express to help me build routes
const express = require('express')
// creates user router
const router = express.Router()

// calling my User model 
const User = require('../models/users')
const bcrypt = require('bcryptjs')

// http://localhost:8000/users/:id,
// http://localhost:8000/users   <-- this is coming from app.use('/users',usersController) on server.js

// Get a single user
router.get('/:id', async (req,res)=>{
  try{
    const foundUser = await User.findById(req.params.id)
    res.json(foundUser)
  } catch (err){
    res.send(err)
  }
})

// create a user 
// router.post('/', async  (req, res) => {
//   try {
//     console.log(req.body)
//     const createdUser = await User.create(req.body)
//     res.json(createdUser)
//   } catch (err){
//     res.send(err)
//   };
// });


// delete a user 
router.delete('/:id', async (req,res)=>{
  try{
    const deletedUser = await User.findByIdAndRemove(req.params.id)
    res.json(deletedUser)
  } catch (err){
    res.send(err)
  }
})

// Edit route 
router.put('/:id', async (req,res)=>{
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedUser)
  } catch (err){
    res.send(err)
  }
})

// // edit route 
// router.get('/:id/edit', async (req,res)=>{
//   try{
//     const foundUser = await User.findById(req.params.id)
//     res.json(foundUser)
//   } catch (err){
//     res.send(err)
//   }
// });



// registration route 
router.post("/register", async (req, res) => {
  console.log("hit it mike")
    try{
        const foundEmail = await User.findOne({
            email: req.body.email
        })
        console.log(foundEmail, 'this is found email')
        const foundUsername = await User.findOne({
            username: req.body.username
        })
        console.log(foundUsername, 'this is found username')

        if(foundEmail || foundUsername){
          res.json({data: currentUser, status: {code: "201", message: "already registed"}})
        } else {
          console.log('should make user')
            const userDbEntry = {}
            const password = req.body.password
            const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
            userDbEntry.username = req.body.username
            userDbEntry.email = req.body.email
            userDbEntry.password = passwordHash
            const newUser = await User.create(userDbEntry)
            console.log(newUser);
            req.session.email = newUser.email
            req.session.username = newUser.username
            req.session.userId = newUser.userId
            res.json({
                email: req.session.email,
                username: req.session.username,
                userId: req.session.userId,
                message: 'Success, user is registered'
            })
        }
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
})


//login route 
router.post("/login", async (req, res) => {
  try{
      const foundUser = await User.findOne({
          username: req.body.username
      })
      if(foundUser){
          if(bcrypt.compareSync(req.body.password, foundUser.password)){
            const currentUser = foundUser.toObject()
            delete currentUser.password
            res.json(currentUser)
          } else {
            res.json({
              message: "Incorrect username or password."
            })
          }
      }
      else {
        res.json({
          message: "Incorrect username or password."
        })
      }
  } catch(err){
    res.send(err)
    console.log(err)
  }
})

module.exports = router
