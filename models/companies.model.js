const mongoose=require('mongoose');



var companySchema =new mongoose.Schema({

    companycode: {
                 type:String
               },

    name: {
                 type:String
              },
    address: {
                 type:String
             },
    state: {
                 type:String
            },
    city: {
                type:String
           },
    pincode: {
            type:String
         }
});

var companyModel= new mongoose.model('company',companySchema);

module.exports=companyModel;