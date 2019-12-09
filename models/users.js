// calling mongoose
const mongoose = require('mongoose')

// Schema is a blueprint that my user object will follow 
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true}
})


// creating my model and calling it User
const User = mongoose.model('User',userSchema)


// exporting my model
module.exports = User 