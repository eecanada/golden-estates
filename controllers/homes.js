const express =  require('express')
const router = express.Router()
const Home = require('../models/homes')
const User = require('../models/users')


// create a home listing
router.post('/', async  (req, res) => {
  try {
    console.log(req.body)
    const createdHome = await Home.create(req.body)
    const foundUser = await User.findById(req.body.userId)
    const [findUser, createHome] = await ([foundUser,createdHome]);
    findUser.homes.push(createHome)
    await findUser.save();
    res.json(createdHome)
  } catch (err){
    res.send(err)
  };
});

// will get all homes 
router.get('/', async (req,res)=>{
  try{
    const allHomes = await Home.find({})
    res.json(allHomes)
  } catch(err){
    res.send(err);
  }
});

// this will allow me to edit my home 
router.put('/:id', async (req,res)=>{
  try{
    const updatedHome = await Home.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedHome)
  } catch (err){
    res.send(err)
  }
})


// this will let me select a user's home
router.get('/:id', async (req,res)=>{
  try{
    const foundUser = await User.findOne({'homes': req.params.id})
    .populate({path: 'homes', match:{_id: req.params.id}})
    console.log(foundUser)
    res.json(foundUser)
  } catch(err){
    res.send(err)
  }
})


module.exports = router