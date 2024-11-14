const Company = require('../schemas/Company')
const CompanyServices= require('../services/CompanyServices')

class CompanyControllers{
    async createCompany(req,res){
        try {
            const companyData= req.body
            const existCompany= await Company.findOne({companyName:companyData.companyName})
            if(!existCompany){
                const newCompany= await CompanyServices.createCompany(companyData)
                res.status(200).json({
                    msg:"company created successfully",
                    newCompany
                })}                   
            else{
                    return res.status(400).json({
                        msg: "Company with this name already exists"
                    });
                }
        }catch(error){
            console.error("Error creating company:", error);
            res.status(500).json({
                msg: "Error creating company",
                error: error.message
            });
        }
    }
    async getCompany(req,res){
        const {id}=req.params
        try{
            const existCompany= await Company.findOne({_id:id})
            if(existCompany){
                const company= await CompanyServices.getCompany(id)
                res.status(200).json({
                    data:company
                })
            }
            else{
                res.status(400).json({
                    msg:"the company you are trying to search doesn't exist"
                })
            }
        }catch(error){
            return res.status(500).json({
                error: error.message
            });

        }
    }
    async getCompanies(req,res){
        try{
            const companies= await Company.find()
            if(companies.length!==0){
                res.status(200).json({
                    data:companies
                })
            }
            else{
                res.status(400).json({
                    msg:"No data Found"
                })
            }

        }catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }
    async updateCompany(req,res){
        const {id}= req.params
        try {
            const existCompany= await Company.findOne({_id:id})
            if(existCompany){
               await CompanyServices.updateCompany(id,req.body)
                res.status(200).json({
                   msg:"company updated successfully",
                })
            }
            else{
                res.status(400).json({
                    msg:"the company you are trying to search doesn't exist"
                })
            }

        }catch(error){
            return res.status(500).json({
                error: error.message
            });

        }

    }
    async deleteCompany(req,res){
        const {id}=req.params
        try{
            const existCompany= await Company.findOne({_id:id})
            if(existCompany){
                await CompanyServices.deleteCompany(id)
                res.status(200).json({
                    msg:"company deleted Successfully"
                })
            }
            else{
                res.status(400).json({
                    msg:"the company you are trying to search doesn't exist"
                })
            }
        }catch(error){
            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports=new CompanyControllers()