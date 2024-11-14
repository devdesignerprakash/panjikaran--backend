
const Company= require('../schemas/Company')
class CompanyServices{
    async createCompany(companyData){
        const newCompany= await Company.create(companyData)
        return newCompany;
    }
   async getCompany(id){
    return await Company.findById(id)
   }
   async getCompanies(){
    return await Company.find()
   }
   async updateCompany(id,companyData){
    return await Company.findOneAndUpdate({_id:id}, companyData,{new:true})
   }
   async deleteCompany(id){
    return await Company.findOneAndDelete(id)
   }
}
module.exports = new CompanyServices();

