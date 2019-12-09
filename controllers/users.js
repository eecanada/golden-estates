// bringing in express to help me build routes
const express = require('express')
// creates user router
const router = express.Router()

// calling my User model 
const User = require('../models/users')

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
router.post('/', async  (req, res) => {
  try {
    console.log(req.body)
    const createdUser = await User.create(req.body)
    res.json(createdUser)
  } catch (error){
    console.log(error)
  };
});


// delete a user 
router.delete('/:id', async (req,res)=>{
  try{
    const deletedUser = await User.findByIdAndRemove(req.params.id)
    res.redirect('/')
    res.send('user is deleted')
  } catch (err){
    res.send(err)
  }
})



module.exports = router
