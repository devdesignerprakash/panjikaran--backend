const express= require('express');
const CompanyControllers = require('../controllers/CompanyControllers');
const router= express.Router()

router.post('/company', CompanyControllers.createCompany)
router.get('/company/:id',CompanyControllers.getCompany)
router.get('/company',CompanyControllers.getCompanies)
router.post('/company/:id',CompanyControllers.updateCompany)
router.delete('/company/:id',CompanyControllers.deleteCompany)

module.exports= router;