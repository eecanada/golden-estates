// calling mongoose
const mongoose = require('mongoose')

// Schema is a blueprint that my user object will follow 
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true}
})

const User = mongoose.model('User',userSchema)

module.export = User 