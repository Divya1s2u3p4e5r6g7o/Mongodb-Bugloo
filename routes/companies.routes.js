const mongoose=require('mongoose');
const express=require('express');
const companyController=require('../controllers/companies.controller');
const router = express.Router(); 

router.post('/Create',companyController.insertCompany);
router.get('/fetch',companyController.fetchCompanies);
router.get('/fetch/:companycode',companyController.fetchCompaniesByCompanyCode)
router.put('/:id',companyController.updateCompaniesById)
router.delete('/:id',companyController.deleteCompaniesById)




module.exports =router;