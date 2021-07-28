const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
  path: path.join(__dirname, '/.env')
})

const PORT = process.env.PORT || 4000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@grapql-demo.oufae.mongodb.net/GrapQL-Demo?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log(`MongoDB connected successfully!`)
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}
module.exports = {
  PORT,
  connectDB
}
