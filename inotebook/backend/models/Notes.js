const mongoose=require('mongoose');
const blogSchema = new Schema({
    title:{
         type:string,
         required:true,
    },
    description:{
        type:string,
        required:true,
        unique:true,
        },
    tag:{
        type:string,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now,
   },
  });
  module.exports=mongoose.model('user',UserSchema)