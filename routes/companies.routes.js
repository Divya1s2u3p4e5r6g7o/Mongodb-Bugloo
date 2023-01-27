const mongoose=require('mongoose');
const express=require('express');
const companyController=require('../controllers/companies.controller');
const router = express.Router(); 

router.post('/Create',companyController.insertCompany);
router.get('/fetch',companyController.fetchCompanies)
router.get('/fetch/:companycode',companyController.fetchCompaniesByCompanyCode)


module.exports =router;