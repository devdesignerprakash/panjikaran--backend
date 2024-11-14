const mongoose = require('mongoose')

const companySchema=  new mongoose.Schema({
    companyName:{type:String, required:true, unique:true},
    registrationDate:{type:String, required:true},
    registredOfficeName:{type:String, requried:true},
    registrationNumber:{type:String, required:true},
    panNo:{type:Number, required:true},
    dateOfIssue:{type:Date, required:true, default:Date.now()},
    validity:{type:Date, required:true},
    documents:{type:String, required:true}
})
const Company= mongoose.model('Çompany',companySchema)
module.exports= Company;