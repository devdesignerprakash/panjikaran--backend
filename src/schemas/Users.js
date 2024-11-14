const mongoose = require('mongoose')
const ROLES = {
    ADMIN: 'admin',
    SUPER_ADMIN: 'superAdmin'
};
const userSchema= new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, enum:Object.values(Roles), default:ROLES.ADMIN},
    dateCreated:{type:Date, default:Date.now()}
})
const User= moongose.model('User', userSchema)
module.exports=User;