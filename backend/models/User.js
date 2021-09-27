import mongoose from "mongoose";
var userSchema = mongoose.Schema({
    firstname : {type:String,required:true},
    lastaname : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
})
 
export const User = mongoose.model('User', userSchema);
