const express =  require('express')
const router = express.Router()
const Home = require('../models/homes')

// create a home listing
router.post('/', async  (req, res) => {
  try {
    console.log(req.body)
    const createdHome = await Home.create(req.body)
    const foundUser = await User.findById(req.body.userId)
    const [findUser, createBook] = await ([foundUser,createdBook]);
    findUser.homes.push(createBook)
    res.json(createdHome)
  } catch (err){
    res.send(err)
  };
});

module.exports = router