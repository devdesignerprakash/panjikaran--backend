const vehicleSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true, unique: true },
    registredCompany:{type:String, required:true},
    model: { type: String, required: true },
    registrationDate: { type:Date, required: true },
    contractDate:{type:Date, required:true},
    owner: { type: String, required: true },
    citizenShipNumber:{type:String, requried:true},
    driverName:{type:String, required:true},
    driverlicenseNumber:{type:String, required:true},
    conductorName:{type:String,},
    conductorLicenseNumber:{type:String},
    insuranceDate:{type:Date, required:true}, 
    vehicleFitnessTestDate:{type:Date, required:true},
    capacity: { type: Number },
    dateAdded: { type: Date, default: Date.now },
    documents:{type:String, required:true}
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports=Vehicle