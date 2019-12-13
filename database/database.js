const mongoose = require('mongoose')


// location of where my mongodb server is going to be located at 
const connectionString = process.env.MONGODB_URI;

// connect to a local database mongodb, and these other lines of code are options so that mongoose does not complain about depicated warnings 
mongoose.connect(connectionString, { useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });


mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
console.log('Mongoose error: ', err);
});