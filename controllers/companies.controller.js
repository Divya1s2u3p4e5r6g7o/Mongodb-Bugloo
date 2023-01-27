const db = require("../models");
const apiResponses = require('../helpers/apiResponses')
const companiesModel = db.companies;
const dbConfig=require('../config/db');
const companyModel =require('../models/companies.model')


exports.insertCompany = async (req,res)=>{
    try{
        await createCompany(req,res)
    .then((response)=>{
        return apiResponses.successResponseWithData(res, "Company Created Successfully.", response);

     })
     .catch((error)=>{
        return apiResponses.errorResponse(res, error);
    })
    }
    catch(error){
        console.log(error)
        return apiResponses.errorResponse(res, error);
    }

}

//Create Company Using Promise

 const createCompany=async(req,res)=>{
return new Promise((resolve,reject)=>{
    const company =new companyModel({
        companycode:req.body.companycode,
        name:req.body.name,
        address:req.body.address,
        state:req.body.state,
        city:req.body.city,
        pincode:req.body.pincode
        
    })
    company.save((error, company) => {
        if (error) { reject(error) }
        resolve(company)
    })
})
}

//Fetch all companies
exports.fetchCompanies=async(req,res)=>{
    try {
        companyModel.find().then((companieslist) => {
            if (companieslist.length>0) {
                return apiResponses.successResponseWithData(res, "Fetched companies list Successfully", companieslist);
            } else {
                return apiResponses.notFoundResponse(res, "companieslist list Not Found");
            }
        })
    } catch (e) {
        return apiResponses.errorResponse(res, e);
    }
}
//Fetch company by companyCode
exports.fetchCompaniesByCompanyCode=async(req,res)=>{

    try {
        companyModel.find({companycode:req.params.companycode}).then((companieslist) => {
            if (companieslist.length>0) {
                return apiResponses.successResponseWithData(res, "Fetched companies list Successfully", companieslist);
            } else {
                return apiResponses.notFoundResponse(res, "companieslist list Not Found");
            }
        })
    } catch (e) {
        return apiResponses.errorResponse(res, e);
    }
}

//Update Company  by id
exports.updateCompaniesById=async(req,res)=>{
    const company={
    
        companycode:req.body.companycode,
        name:req.body.name,
        address:req.body.address,
        state:req.body.state,
        city:req.body.city,
        pincode:req.body.pincode          
}
const id = req.params.id;

    try {
        companyModel.updateOne({ _id: id }, company).then((companiesdata) => {
            if (companiesdata) {
                return apiResponses.successResponseWithData(res, "updated companies  Successfully", companiesdata);
            } else {
                return apiResponses.notFoundResponse(res, "companies data Not Found");
            }
        })
    } catch (e) {
        return apiResponses.errorResponse(res, e);
    }
}

//Delete Company by Id
exports.deleteCompaniesById=async(req,res)=>{
    const id = req.params.id;

    try {
        companyModel.findOneAndDelete({ _id: id }).then((companiesdata) => {
            if (companiesdata) {
                return apiResponses.successResponseWithData(res, "Delete company Succuessfully", companiesdata);
            } else {
                return apiResponses.notFoundResponse(res, "Data Not Found");
            }
        })
    } catch (e) {
        return apiResponses.errorResponse(res, e);
    }
}
