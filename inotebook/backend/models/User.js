const mongoose=require('mongoose');
const blogSchema = new Schema({
    name:{
         type:string,
         required:true,
    },
    Email:{
        type:string,
        required:true,
        unique:true,
        },
    password:{
        type:string,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
   },
  });
  module.exports=mongoose.model('user',UserSchema)