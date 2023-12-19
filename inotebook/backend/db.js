const mongoose= require('mongoose');
const mongoURI="mongodb+srv://rogergunu18:zhZULO6CwbZi9E6A@cluster0.8ubh6lp.mongodb.net/";
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }
  
  module.exports = connectToMongo;
  
  