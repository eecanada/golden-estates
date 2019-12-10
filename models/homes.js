// calling mongoose
const mongoose = require('mongoose')

// Schema is a blueprint that my user object will follow 
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  address: {type: String, require: true},
  city: {type: String, require: true},
  state: {type: String, require: true},
  salePrice: {type: String, require: true},
  img: {type: String, require: true},
  description: {type: String, require: true}
})


// creating my model and calling it User
const Home = mongoose.model('Home',homeSchema)


// exporting my model
module.exports = Home 